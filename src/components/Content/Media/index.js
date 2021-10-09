import { useStore } from '../../../store/Store';
import Youtube from './Youtube';
import Vimeo from './Vimeo';
import Video from './Video';
import Audio from './Audio';

function Media(props) {
	const [state] = useStore();
	const { contents } = state;
	const id = props.id;
	const content = contents[id];
	
	const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//
	const MATCH_URL_VIMEO = /vimeo\.com\/.+/
	const AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i
	const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i

	if ( MATCH_URL_YOUTUBE.test(content.src) ) {
		return (
			<Youtube id={id} />
		);
	} else if ( MATCH_URL_VIMEO.test(content.src) ) {
		return (
			<Vimeo id={id} />
		);
	} else if ( VIDEO_EXTENSIONS.test(content.src) ) {
		return (
			<Video id={id} />
		);
	} else if ( AUDIO_EXTENSIONS.test(content.src) ) {
		return (
			<Audio id={id} />
		);
	} else {
		return (
			<p>Media not found.</p>
		);
	}	
}

export default Media;