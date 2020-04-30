import React from 'react';
import ReactDOM from 'react-dom';
import './css/site.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { configureFakeBackend } from './FackBackend/fake-backend';

// configureFakeBackend();

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
