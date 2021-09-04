import { Fragment } from 'react';
import { render } from 'react-dom';

import 'normalize.css';

import App from './App';
import { GlobalStyles } from './GlobalStyles';

render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root')
);
