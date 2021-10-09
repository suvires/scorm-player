import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";

import Close from "./Close";

function Modal(props) {
	
	const keyEscape = useCallback(
		(event) => {
			if(event.keyCode === 27) {
				props.close();
			}
		}, [props]
	);
	
	useEffect(() => {
		document.addEventListener("keydown", keyEscape, true);

		return () => {
			document.removeEventListener("keydown", keyEscape, false);
		};
	});

	if (!props.show) {
		return null
	} else {
		return ReactDOM.createPortal(
			<div className="modal">
				<div className="modalWrapper">
					<div className="modalHeader">
						<h1>{props.title}</h1>
						<Close onClose={props.onClose} />
					</div>
					<div className="modalContent">
						{props.children}						
					</div>
				</div>
			</div>
		, document.getElementById('modal'));
	}
}

export default Modal;
