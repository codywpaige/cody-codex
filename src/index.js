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
let randomColor = _.sample(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'], 1, false);
document.body.style.backgroundColor = randomColor;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);