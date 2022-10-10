// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './components/ButtonAppBar';
import { yellow } from '@mui/material/colors';
import { color } from '@mui/system';
import * as _ from 'lodash';
const root = ReactDOM.createRoot(document.getElementById('root'));
// create a variable of an array storing 1000 color codes long
let colorCodes = [];
for (let i = 0; i < 1000; i++) {
  colorCodes.push('#' + Math.floor(Math.random() * 16777215).toString(16));
}
let randomColor = _.sample(colorCodes, 1, false);
document.body.style.backgroundColor = randomColor;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);