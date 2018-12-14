import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Jumbotron from '../Jumbotron';
import Internship from '../../pages/Internship';
import Regulation from '../../pages/Student/Regulation';
import StudentForm from '../../pages/Student/Form';
import Summary from '../../pages/Moderator/Explotation/Summary';
import Table from '../../pages/Moderator/Explotation/Table';

import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';

const links = [
  {
    name: 'Auditoria',
    active: false,
    url: '/auditor'
  },
  {
    name: 'Colação de Grau',
    active: false,
    url: '/collation'
  },
  {
    name: 'Diplomas',
    active: false,
    url: '/diplomas'
  },
  {
    name: 'Estágios',
    active: true,
    url: '/internship'
  },
  {
    name: 'Ingresso',
    active: false,
    url: '/admission'
  },
  {
    name: 'Vida Acadêmica',
    active: false,
    url: '/academic'
  },
  {
    name: 'Prontuário',
    active: false,
    url: '/report'
  }
];

const Content = () => (
  <Fragment>
    <Jumbotron title="Apoio ao aluno" icon={Avaliations} links={links} />
    <Main>
      <BrowserRouter>
        <Switch>
          <Route
            path="/internship"
            render={({ match: { url } }) => (
              <Fragment>
                <Route exact path={`${url}`} component={Internship} />
                <Route
                  path={`${url}/student/explotation`}
                  component={Regulation}
                />
                <Route path={`${url}/student/form`} component={StudentForm} />
                <Route
                  path={`${url}/moderator/explotation`}
                  component={Table}
                />
                <Route path={`${url}/moderator/form/:id`} component={Summary} />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
      <Alert stack={{ limit: 3 }} />
    </Main>
  </Fragment>
);

export default Content;
