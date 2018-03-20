import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
/* eslint-disable */
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';


ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
