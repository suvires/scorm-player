import { useStore } from '../../../store/Store';
import { updateContentProgress } from '../../../store/storeReducer';
import scormAdapter from './scormAdapter';

function Scorm(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];
	window.API = new scormAdapter(id, state, dispatch, updateContentProgress);

	return (		
        <iframe className="scormWrapper" title={content.title} src={content.src}></iframe>
	);
}

export default Scorm;