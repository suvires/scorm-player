import { useEffect } from 'react';
import { useStore } from '../../../../store/Store';
import { updateContentProgress, updateContentTimeWatched, updateContentCurrentTime  } from '../../../../store/storeReducer'

function Audio(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];

	content.progress = content.progress ? content.progress : 0;	
	content.currentTime = content.currentTime ? content.currentTime : 0;		
	content.timeWatched = content.timeWatched ? content.timeWatched : 0;	
	//console.log('Enter in compomenent Audio');

	useEffect(() => {
		//console.log('Enter in useEffect of Audio');

		const audio = document.querySelector('audio');		
		
		audio.addEventListener('loadedmetadata', (event) => {			
			if (content.currentTime >= audio.duration) {
				content.currentTime = 0;
			}
			audio.currentTime = content.currentTime;
		});			

		// prevent user from seeking
		audio.addEventListener('seeking', function() {
			const seekTime = audio.currentTime;
			if(seekTime > content.timeWatched) {
				// guard agains infinite recursion:
				// user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
				var delta = audio.currentTime - content.currentTime;
				if (delta > 0.01) {
					audio.currentTime = content.timeWatched;
				}
			}
		});
		
		audio.ontimeupdate = (event) => {			
			if (!audio.seeking) {
				//console.log(timeWatched);						
				if (audio.currentTime > content.timeWatched) {
					//console.log('Updating content.timeWatched to ' + audio.currentTime)
					dispatch(updateContentTimeWatched({id: id, timeWatched: audio.currentTime}));
				}				
				
				dispatch(updateContentCurrentTime({id: id, currentTime: audio.currentTime}));	
							
				const progress = audio.currentTime * 100 / audio.duration;											
				if (progress > content.progress) {
					//console.log('Updating content.progress to ' + progress)
					dispatch(updateContentProgress({id: id, progress: progress}));
				}
			}
		};

    }, [id, content, dispatch]);
    
    return (
        <div className="audioWrapper">
            <audio controls autoPlay src={content.src} controlsList="nodownload noremoteplayback" disablePictureInPicture></audio>
        </div>
	);
}

export default Audio;