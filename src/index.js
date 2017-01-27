
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root.js';
import configureStore from './store/configureStore';

const store = configureStore(window.__data);

render(
  <Root store={store} />,
  document.getElementById('root')
)
