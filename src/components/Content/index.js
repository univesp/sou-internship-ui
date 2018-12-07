import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './styles';

const Content = () => (
  <Main>
    <BrowserRouter>
      <Switch />
    </BrowserRouter>
  </Main>
);

export default Content;
