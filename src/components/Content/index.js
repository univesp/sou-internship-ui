import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Probation from '../../pages/Probation';

import Main from './styles';

const Content = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Probation} />
      </Switch>
    </BrowserRouter>
  </Main>
);

export default Content;
