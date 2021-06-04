import React from 'react';
import ReactDOM from 'react-dom';

// Global 3rd Party Libs For The App
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Site Import
import './App.scss';
import Site from '../Components/Site/Site';

const documentAnchor = document.getElementById('root');

ReactDOM.render(
	<React.StrictMode>
		<Site />
	</React.StrictMode>,
	documentAnchor
);