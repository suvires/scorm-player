import classNames from "classnames";

function Progressbar(props) {
	const { progress = 0 } = { progress: props.progress };	
	return (
		<div className="progressBar">
			<div 
			className={classNames({
				filled: progress
			})}
			style={{ width: progress + '%'}}>
				<span>{progress} %</span>
			</div>
		</div>
	);
}

export default Progressbar;