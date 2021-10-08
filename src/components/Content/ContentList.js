import { useStore } from '../../store/Store';
import Content from '../Content';

const ContentList = () => {
	const [state] = useStore();
  	const { contents } = state;

	if(contents.length) {
		return (    
			<div>				
				{contents.map((content, index) => (
					<Content key={index} id={index} />
				))}	
			</div>
		);	
	}
};

export default ContentList;