import { useEffect } from 'react';
import { useStore } from '../../../../store/Store';
import loadScript from 'load-script2';
import { updateContentProgress, updateContentTimeWatched, updateContentCurrentTime  } from '../../../../store/storeReducer'

function Youtube(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];	
	
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
	const match = content.src.match(regExp)
	const videoId = (match[7].length)? match[7] : false		
					
	content.progress = content.progress ? content.progress : 0;	
	content.currentTime = content.currentTime ? content.currentTime : 0;		
	content.timeWatched = content.timeWatched ? content.timeWatched : 0;
		
	//console.log('Enter in compomenent Youtube');

	useEffect(() => {		
		//console.log('Enter in useEffect of Youtube');
		loadScript('https://www.youtube.com/iframe_api').then( () => {
			window.YT.ready(() => {
				const options = {					
					videoId: videoId,
					playerVars: {
						autoplay: 1,
						playsinline: 1,
						rel: 0,
						modestbranding: 1,
						start: Math.floor(content.currentTime),
					}
				}
				const player = new window.YT.Player('player', options);			

				player.addEventListener('onReady', () => {					

					const timer = setInterval(function() {						
						if (player.h === null) {
							clearInterval(timer);
						}

						var seekTime = player.getCurrentTime();
						///expecting 1 second interval , with 500 ms margin
						if ((seekTime - content.currentTime) > 0.5) {
							if(seekTime > content.timeWatched) {
								player.seekTo(content.timeWatched);
								player.playVideo();
							}
						}
						
						if(player.getPlayerState() === 1) {														
							let timeWatched = player.getCurrentTime();
							//console.log(timeWatched);						
							if (timeWatched > content.timeWatched) {
								//console.log('Updating content.timeWatched to ' + content.timeWatched)
								dispatch(updateContentTimeWatched({id: id, timeWatched: timeWatched}));
							}				
							
							dispatch(updateContentCurrentTime({id: id, currentTime: timeWatched}));	
							
							const duration = player.getDuration();
							const progress = timeWatched * 100 / duration;											
							if (progress > content.progress) {
								//console.log('Updating content.progress to ' + progress)
								dispatch(updateContentProgress({id: id, progress: progress}));
							}
						}

					}, 250);
				});	
				
			});

		});
		
    }, [id, videoId, content, dispatch]);

	return(
		<div className="youtubeWrapper">
			<div id="player"></div>
		</div>
	);
}

export default Youtube;