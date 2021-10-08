import { useEffect } from 'react';
import { useStore } from '../../../store/Store';
import { updateContentProgress } from '../../../store/storeReducer'

function Web(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];

	useEffect(() => {
		dispatch(updateContentProgress({id: id, progress: 100}));
    }, [dispatch, id]);

	return <div className="iframeWrapper" title={content.title} dangerouslySetInnerHTML={{ __html: "<iframe src='"+ content.src +"' sandbox='allow-downloads allow-scripts allow-same-origin allow-forms allow-popups'/>"}} />;	
}

export default Web;