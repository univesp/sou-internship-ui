import React, { Fragment } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import Reset from './assets/styles/Reset';
import Base from './assets/styles/Base';
import Colors from './assets/styles/Colors';
import Fonts from './assets/styles/Fonts';

const App = () => (
  <Fragment>
    <Reset />
    <Colors />
    <Fonts />
    <Base />
    <Header />
    <Sidebar />
    <Content />
  </Fragment>
);

export default App;
