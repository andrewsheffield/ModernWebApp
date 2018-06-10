/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { App2 } from './App2';

import './index.html';

const appId = '🤓';
const appElement = document.getElementById(appId);

if (appElement) {

  ReactDOM.render(
    <App2 />,
    appElement
  )

} else {
  console.error(`App root element at id ${appId} does not exist in index.html`)
}

