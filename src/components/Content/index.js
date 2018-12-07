import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Probation from '../../pages/Probation';
import Regulation from '../../pages/Regulation';

import Main from './styles';

const Content = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Probation} />
        <Route path="/aproveitamento" component={Regulation} />
      </Switch>
    </BrowserRouter>
  </Main>
);

export default Content;
