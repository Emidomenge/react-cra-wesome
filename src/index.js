import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/animate.css/animate.min.css';
import './assets/tachyons/tachyons_static.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/prismjs/themes/prism-okaidia.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
