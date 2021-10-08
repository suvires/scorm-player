function Scorm(props) {
	return (		
        <iframe className="scormWrapper" title={props.title} src={props.src}></iframe>
	);
}

export default Scorm;