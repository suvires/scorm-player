import {ReactComponent as CloseIcon} from "../../../images/close.svg"

function Close(props) {
	return (		
        <button onClick={props.onClose}><i><CloseIcon /></i></button>                
	);
}

export default Close;