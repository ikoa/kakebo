import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './states/store';
import { App } from './App';

const container = document.getElementById('contents');

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
