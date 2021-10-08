import { useEffect } from 'react';
import { useStore } from '../../../store/Store';
import { updateContentProgress } from '../../../store/storeReducer'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Pdf(props) {
	const [state, dispatch] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];

	const defaultLayoutPluginInstance = defaultLayoutPlugin();			
	const workerUrl = "https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js";

	useEffect(() => {
		dispatch(updateContentProgress({id: id, progress: 100}));
    }, [dispatch, id]);

    return (		
        <Worker workerUrl={workerUrl}>							
			<div
				style={{
					height: '100%',
				}}
			>
				<Viewer 
					fileUrl={content.src} 
					plugins={[
						defaultLayoutPluginInstance,                				
					]}
					theme="dark" 
				/>
			</div>
		</Worker>
	);
}

export default Pdf;