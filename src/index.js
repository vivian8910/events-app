import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

// hot module replacement
const appEl = document.getElementById('app');

let render = () => {
    ReactDOM.render(<App />, appEl)
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();

// ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
