import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'; // global styles

// import App from './App';
// import HelloDojo from './dojo/01-helloDojo'
// import CheckerBoard from './dojo/02-checkerboard'
import VotingApp from './dojo/03-votingApp'

// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<HelloDojo/>, document.getElementById('root'))
// ReactDOM.render(<CheckerBoard/>, document.getElementById('root'))
ReactDOM.render(<VotingApp/>, document.getElementById('root'))

registerServiceWorker();