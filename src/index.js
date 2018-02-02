import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'; // global styles

import HelloDojo from './dojo/01-helloDojo'
ReactDOM.render(<HelloDojo />, document.getElementById('root'))



// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();