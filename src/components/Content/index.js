import { useState } from 'react';
import { useStore } from '../../store/Store';
import Modal from '../Modal';
import Progressbar from '../Progressbar';
import Button from '../Button';
import Pdf from './Pdf';
import Media from './Media';
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
		if (modal) {
			document.querySelector('body').style.overflow = 'visible'; 				
			if (window.YT) { 
				const player = window.YT.get('player');			
				if (!!player) { //if player is not null
					player.destroy();
				}
			}
		} else {
			document.querySelector('body').style.overflow = 'hidden';
		}
	}

	const handleClick = (e) => {
		e.preventDefault();
		toogleModal();
	}
	
	let children;
	switch(content.type) {
		case 'pdf':
			children = <Pdf id={id} />;
			break
		case 'media':
			children = <Media id={id} />;
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
