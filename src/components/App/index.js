import { useStore } from '../../store/Store';
import Content from '../Content';
import Progressbar from '../Progressbar';

function App() {
	
	const [state] = useStore();
	const { progress } = state;

	return (
		<>
			<p>Course progress</p>
			<Progressbar progress={progress}/>
			<h2>Course contents</h2>	
			<div>				
				{state.contents.map((content, index) => (
					<Content key={index} id={index} />
				))}	
			</div>						
		</>
	);
}

export default App;
