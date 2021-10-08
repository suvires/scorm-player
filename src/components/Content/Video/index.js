import { useRef, useState, useEffect } from 'react';
import { useStore } from '../../../store/Store';
import { updateContentProgress } from '../../../store/storeReducer'
import ReactPlayer from 'react-player'

function Video(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];
	
	const player = useRef(null);	

	const handleEnded = () => {
		console.log('Video finished!');		
		if(content.progress < 100) {
			console.log('Updating progress to: 100 %');
			dispatch(updateContentProgress({id: id, progress: 100}));
			// setProgress(100);
			// props.updateProgress(100);
			// setMaxTimeViewed(duration);
			// props.updateMaxTimeViewed(duration);
			// console.log(`Updating maxTimeViewed to: ${duration} %`);			
		}		
		// setLastTime(duration);
		// props.updateLastTime(duration);
	}
	
	// const handleDuration = () => {
	// 	console.log('Payer started!');
	// 	let duration = player.current.getDuration();
	// 	setDuration(duration);		
	// 	console.log(`duration: ${duration}`);
	// 	console.log(`lastTime: ${lastTime}`);
	// 	if(content.lastTime < content.duration) {			
	// 		player.current.seekTo(content.lastTime, 'seconds');
	// 	}
	// }

	// const handleProgress = () => {				
	// 	let currentTime = player.current.getCurrentTime();		
	// 	console.log(`currentTime: ${currentTime}`);				
	// 	setLastTime(currentTime);
	// 	console.log(`lastTime setted to: ${currentTime}`);
	// 	props.updateLastTime(currentTime);
	// 	console.log(`Updating lastTime to: ${currentTime}`);
		
	// 	console.log(`maxTimeViewed: ${maxTimeViewed}`);
	// 	if(content.maxTimeViewed < content.currentTime) {
	// 		setMaxTimeViewed(currentTime);
	// 		console.log(`maxTimeViewed setted to: ${currentTime}`);
	// 		props.updateMaxTimeViewed(currentTime);
	// 		console.log(`Updating maxTimeViewed to: ${currentTime}`);
	// 		setProgress(100 * currentTime / duration);
	// 		console.log(`progress setted to: ${100 * currentTime / duration}`);
	// 		props.updateProgress(100 * currentTime / duration);
	// 		console.log(`Updating progress to: ${100 * currentTime / duration} %`);
	// 	}
	// }

	// const handleSeek = () => {	
	// 	let currentTime =	player.current.getCurrentTime();
	// 	if (content.maxTimeViewed < content.currentTime) {
	// 		player.current.seekTo(content.maxTimeViewed, 'seconds');
	// 	}		
	// }

	return (
        <ReactPlayer 
			ref={player}
			url={content.src} 
			width='100%'
          	height='100%'			
			controls={true}
			playing={true}
			pip={false}
			playsinline={true}
			config={{ 
				youtube: {
					playerVars: { 
						playsinline: 1,
						modestbranding: 1,
						rel: 0,
					}
				},
				vimeo: {
					playerOptions: { 
						title: false,
						speed: false,
						pip: false,
						playsinline: true,
						autoplay: true,
						portrait: false,
					}
				},
				file: { 
					attributes: { 
						disablePictureInPicture: true, 
						controlsList: 'nodownload noplaybackrate',
					}
				},
			}}
			// progressInterval={1000}			
			// onDuration={handleDuration}
			// onProgress={handleProgress}
			// onSeek={handleSeek}
			onEnded={handleEnded}
		/>
	);
}

export default Video;