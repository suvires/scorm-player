import { useStore } from '../../store/Store';
import ContentList from '../Content/ContentList';
import Progressbar from '../Progressbar';

function App() {
	
	const [state] = useStore();
	const { progress } = state;

	return (
		<>
			<p>Course progress</p>
			<Progressbar progress={progress}/>
			<h2>Course contents</h2>	
			<ContentList />								
		</>
	);
}

export default App;
