import { useEffect } from 'react';
import { useStore } from '../../../../store/Store';
import { updateContentProgress, updateContentTimeWatched, updateContentCurrentTime } from '../../../../store/storeReducer'
import Player from '@vimeo/player';

function Vimeo(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];
	
	const regExp = /(?:http:|https:|)\/\/(?:player.|www.)?vimeo\.com\/(?:video\/|embed\/|watch\?\S*v=|v\/)?(\d*)/
	const match = content.src.match(regExp);        
	const videoId = match[1].length ? match[1] : false;	

	content.progress = content.progress ? content.progress : 0;	
	content.currentTime = content.currentTime ? content.currentTime : 0;			
	content.timeWatched = content.timeWatched ? content.timeWatched : 0;
	
	//console.log('Enter in compomenent Vimeo');

	useEffect(() => {
		//console.log('Enter in useEffect of Vimeo');
		const options = {
			id: videoId,			
			autoplay: true,
			speed: false,
			dnt: true,
		};

		
		const player = new Player('player', options);				
		
		player.ready().then(function() {
			player.getDuration().then(function(duration) {				
				if(Math.ceil(content.currentTime) >= duration) {
					content.currentTime = 0;
				}
				player.setCurrentTime(content.currentTime);
			});			
		});

		player.on('timeupdate', function(data) {
				
			//console.log('Updating content.currentTime to ' + data.seconds)
			dispatch(updateContentCurrentTime({id: id, currentTime: data.seconds}));

			if (data.seconds - 1 < content.timeWatched && data.seconds > content.timeWatched) {
				//timeWatched = data.seconds;
				/* This prevents seeking. The reason this is needed
				is because when the user tries to seek, a time update is called which results in the
				watchedTime becoming the same as the seeked time before it goes into the function 'seeked' (below) resulting
				in both values being the same. We need to get the most recent time update before the seek.
				(data.seconds - 1 < currentTime) basically if you seek, this will return false and the current time wont get updated
				(data.seconds > currentTime) if they seek backwards then dont update current time so they can seek back to where they were before */				
				
				if (data.seconds > content.timeWatched) {
					//console.log('Updating content.timeWatched to ' + data.seconds)
					dispatch(updateContentTimeWatched({id: id, timeWatched: data.seconds}));
				}								
				
				let progress = data.percent * 100;											
				if (progress > content.progress) {
					//console.log('Updating content.progress to ' + progress)
					dispatch(updateContentProgress({id: id, progress: progress}));
				}			
			}	
		});

		player.on('seeked', function(data) {	
			if (content.timeWatched < data.seconds) {
				player.setCurrentTime(content.timeWatched);
			}	
		});

	}, [id, videoId, content, dispatch]);

    return (
		<div className="vimeoWrapper">			
			<div id="player"></div>							
		</div>		
	);
}

export default Vimeo;