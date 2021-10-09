import { useEffect } from 'react';
import { useStore } from '../../../../store/Store';
import { updateContentProgress, updateContentTimeWatched, updateContentCurrentTime  } from '../../../../store/storeReducer'

function Video(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];

	content.progress = content.progress ? content.progress : 0;	
	content.currentTime = content.currentTime ? content.currentTime : 0;		
	content.timeWatched = content.timeWatched ? content.timeWatched : 0;	
	//console.log('Enter in compomenent Video');

	useEffect(() => {
		//console.log('Enter in useEffect of Video');

		const video = document.querySelector('video');		
		
		video.addEventListener('loadedmetadata', (event) => {			
			if (content.currentTime >= video.duration) {
				content.currentTime = 0;
			}
			video.currentTime = content.currentTime;
		});			

		// prevent user from seeking
		video.addEventListener('seeking', function() {
			const seekTime = video.currentTime;
			if(seekTime > content.timeWatched) {
				// guard agains infinite recursion:
				// user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
				var delta = video.currentTime - content.currentTime;
				if (delta > 0.01) {
					video.currentTime = content.timeWatched;
				}
			}
		});
		
		video.ontimeupdate = (event) => {			
			if (!video.seeking) {
				//console.log(timeWatched);						
				if (video.currentTime > content.timeWatched) {
					//console.log('Updating content.timeWatched to ' + video.currentTime)
					dispatch(updateContentTimeWatched({id: id, timeWatched: video.currentTime}));
				}				
				
				dispatch(updateContentCurrentTime({id: id, currentTime: video.currentTime}));	
							
				const progress = video.currentTime * 100 / video.duration;											
				if (progress > content.progress) {
					//console.log('Updating content.progress to ' + progress)
					dispatch(updateContentProgress({id: id, progress: progress}));
				}
			}
		};

    }, [id, content, dispatch]);
    
    return (
        <div className="videoWrapper">
            <video controls autoPlay src={content.src} controlsList="nodownload noremoteplayback" disablePictureInPicture></video>
        </div>
	);
}

export default Video;