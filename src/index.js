/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './index.html';

const appId = '🤓';
const appElement = document.getElementById(appId);

if (appElement) {

  ReactDOM.render(
    <App />,
    appElement
  )

} else {
  console.error(`App root element at id ${appId} does not exist in index.html`)
}

