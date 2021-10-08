import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store/Store';
import { initialState, storeReducer } from './store/storeReducer';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css'
import './stylesheets/main.scss';
import {SCORM} from 'pipwerks-scorm-api-wrapper';

SCORM.init();

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider initialState={initialState} reducer={storeReducer}>
			<App />
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
