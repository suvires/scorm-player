import { useState } from 'react';
import { useStore } from '../../store/Store';
import Modal from '../Modal';
import Progressbar from '../Progressbar';
import Button from '../Button';
import Pdf from './Pdf';
import Video from './Video';
import Scorm from './Scorm';
import Web from './Web';

function Content(props) {
	
	const [state] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];

	const [modal, setModal] = useState(false);	

	const toogleModal = () => {
		setModal(!modal);
		modal ? document.querySelector('body').style.overflow = 'visible' : document.querySelector('body').style.overflow = 'hidden';
	}

	const handleClick = (e) => {
		e.preventDefault();
		toogleModal();
	}

	// let tempProgress = props.progress ? props.progress : 0;
	// let tempMaxTimeViewed = props.maxTimeViewed ? props.maxTimeViewed : 0;
	// let tempLastTime = props.lastTime ? props.lastTime : 0;
	// const [maxTimeViewed, setMaxTimeViewed] = useState(tempMaxTimeViewed);
	// const [lastTime, setLastTime] = useState(tempLastTime);

	// const updateMaxTimeViewed = (maxTimeViewed) => {
	// 	setMaxTimeViewed(maxTimeViewed);
	// }

	// const updateLastTime = (lastTime) => {
	// 	setLastTime(lastTime);
	// }

	// useLayoutEffect(
	// 	() => {		
	// 		updateProgress(progress);			
	// 	},
	// 	[progress]
	// );	

	// useEffect(
	// 	() => {								
	// 		updateMaxTimeViewed(maxTimeViewed);			
	// 	},
	// 	[maxTimeViewed]
	// );	

	// useEffect(
	// 	() => {		
	// 		updateLastTime(lastTime);			
	// 	},
	// 	[lastTime]
	// );	
	
	let children;
	switch(content.type) {
		case 'pdf':
			children = <Pdf id={id} />;
			break
		case 'video':
			children = <Video id={id} />;
			break;			
		case 'scorm':
			children = <Scorm id={id} />;
			break;			
		case 'web':
			children = <Web id={id} />;
			break;
		default:
	}	

	return (
		<>
			<Button className="contentLink" disabled={content.disabled} progress={content.progress} onClick={handleClick}>{content.title}</Button>
			<Progressbar progress={content.progress} />
			<Modal show={modal} title={content.title} onClose={toogleModal}>
				{children}
			</Modal>
		</>
	);
}

export default Content;
