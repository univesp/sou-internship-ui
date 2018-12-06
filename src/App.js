import React, { Fragment } from 'react';

import Header from './components/Header';

import Reset from './assets/styles/Reset';
import Base from './assets/styles/Base';

const App = () => (
  <Fragment>
    <Reset />
    <Base />
    <Header />
  </Fragment>
);

export default App;
