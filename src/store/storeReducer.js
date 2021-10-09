import {SCORM} from 'pipwerks-scorm-api-wrapper';
import { INITIAL_STATE } from '../config/initialState.js';
import { FREE_NAVIGATION } from '../config/const.js';

const scormInit = SCORM.init();

export const UPDATE_CONTENT_PROGRESS = 'APP/CONTENT/UPDATE_PROGRESS';
export const UPDATE_CONTENT_TIME_WATCHED = 'APP/CONTENT/MEDIA/UPDATE_TIME_WATCHED';
export const UPDATE_CONTENT_CURRENT_TIME = 'APP/CONTENT/MEDIA/UPDATE_CURRENT_TIME';

export const updateContentProgress = (payload) => ({
	type: UPDATE_CONTENT_PROGRESS,
	payload
});

export const updateContentTimeWatched = (payload) => ({
	type: UPDATE_CONTENT_TIME_WATCHED,
	payload
});

export const updateContentCurrentTime = (payload) => ({
	type: UPDATE_CONTENT_CURRENT_TIME,
	payload
});

function saveSuspendData(suspendData) {
	//console.log("saveSuspendData");	
	//console.log(suspendData);		
	if(scormInit) {
		SCORM.set("cmi.suspend_data", btoa(JSON.stringify(suspendData)));
		SCORM.save();
	}
	//console.log(JSON.stringify(suspendData));		
}

function setScore(score) {
	//console.log("setScore");	
	//console.log(score);	
	if(scormInit) {
		SCORM.set("cmi.core.score.raw", score)   		
		SCORM.save()		
	}
}

function setCompleted() {
	//console.log("setCompleted");		
	if(scormInit) {
		SCORM.set("cmi.core.lesson_status", "completed");
		SCORM.quit();		
	}
}

function loadSuspendData() {
	//console.log("Loading suspend data...")
    let suspendData;
	if(scormInit) {
		suspendData = SCORM.get('cmi.suspend_data');
	}
	if(suspendData) { 
		return JSON.parse(atob(suspendData));
	} else {		
		let initialState = INITIAL_STATE;

		if(FREE_NAVIGATION === 0) {
			initialState.contents.forEach((content, index) => {
				if (index === 0) {
					initialState.contents[0].disabled = 0;
				} else {
					if (initialState.contents[index-1].progress === 100) {
						initialState.contents[index].disabled = 0;
					} else {
						initialState.contents[index].disabled = 1;
					}
				}		
			});
		}
		
		if(!initialState.progress) {
			initialState.progress = 0;
		}

		return initialState;
	}
}

export const initialState = loadSuspendData();

let prueba = JSON.stringify(initialState);
console.log(prueba);
console.log('Sin codificar: ' + prueba.length);
prueba = btoa(prueba);
console.log('Codificada: ' + prueba.length);

export const storeReducer = (state = initialState, action) => {	
	let id = action.payload.id;
	let newState;
	switch (action.type) {
		case UPDATE_CONTENT_PROGRESS:							
			let progress = Math.ceil(action.payload.progress);
			if (progress > 100) progress = 100;			
			state.contents[id].progress = progress;
			if(progress === 100 && id + 1 <  state.contents.length - 1) {
				state.contents[id + 1].disabled = 0;
			}
			if(progress === 100 && !state.contents[id].completed) {
				state.contents[id].completed = 1;
				state.progress += Math.ceil(100 / state.contents.length);				
				if (state.progress >= 100) {
					state.progress = 100;	
					setCompleted();
				}
				setScore(state.progress);
			} 		
			newState = ({...initialState, ...state});
			saveSuspendData(newState);
			return newState;
		case UPDATE_CONTENT_TIME_WATCHED:							
			state.contents[id].timeWatched = action.payload.timeWatched;			
			newState = ({...initialState, ...state});
			saveSuspendData(newState);
			return newState;
		case UPDATE_CONTENT_CURRENT_TIME:							
			state.contents[id].currentTime = action.payload.currentTime;			
			newState = ({...initialState, ...state});
			saveSuspendData(newState);
			return newState;
		default:
			throw new Error();
	}
};