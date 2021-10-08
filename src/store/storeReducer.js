export const UPDATE_CONTENT_PROGRESS = 'APP/CONTENT/UPDATE_PROGRESS';

export const initialState = {	
	contents: [									
		{
			title: "PDF 1 (local)",
			type: "pdf",
			src: "landing/contents/1.pdf",
			progress: 0,
		},
		{
			title: "Web (local)",
			type: "web",
			src: "landing/index.html",
			progress: 0,
		},
		{
			title: "Web (external)",
			type: "web",
			src: "https://suvi.es",
			progress: 0,
		},
		{
			title: "PDF 2 (local)",
			type: "pdf",
			src: "landing/contents/2.pdf",
			progress: 0,
		},
		{
			title: "PDF (external)",
			type: "pdf",
			src: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf",
			progress: 0,
		},			
		{
			title: "Video 1 (local)",
			type: "video",
			src: "landing/contents/1.mp4",
			progress: 0,
			maxTimeViewed: 3
		},
		{
			title: "Video 2 (local)",
			type: "video",
			src: "landing/contents/2.mp4",
			progress: 0,
			maxTimeViewed: 15
		},
		{
			title: "Storyline (local)",
			type: "scorm",
			src: "landing/contents/seguimiento/story.html",
			progress: 0,
		},
		{
			title: "YouTube 1",
			type: "video",
			src: "https://www.youtube.com/watch?v=C0DPdy98e4c",
			progress: 0,
		},
		{
			title: "YouTube 2",
			type: "video",
			src: "https://www.youtube.com/embed/bTqVqk7FSmY",
			progress: 0,
		},
		{
			title: "Vimeo 1",
			type: "video",
			src: "https://vimeo.com/33698814",
			progress: 0,
		},
		{
			title: "Vimeo 2",
			type: "video",
			src: "https://player.vimeo.com/video/76979871",
			progress: 0,
		},		
	],
	progress: 0,
	lang: "en"
};

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

export const updateContentProgress = (payload) => ({
	type: UPDATE_CONTENT_PROGRESS,
	payload
});

export const storeReducer = (state = initialState, action) => {	
	switch (action.type) {
		case UPDATE_CONTENT_PROGRESS:				
			const id = action.payload.id;
			const progress = action.payload.progress;			
			state.contents[id].progress = progress;
			if(id + 1 <  state.contents.length - 1) {
				state.contents[id + 1].disabled = 0;
			}
			state.progress += Math.round(100 / state.contents.length);
			return ({...initialState, ...state});
		default:
			throw new Error();
	}
};