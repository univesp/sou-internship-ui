import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
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

const LoadingContext = React.createContext({
  loading: false,
  toggleLoading: () => {}
})

class Content extends Component {
  state = {
    loading: false
  }

  toggleLoading = () => {
    const { loading } = this.state;

    this.setState({ loading: !loading });
  }

  render() {
    const { toggleLoading } = this;

    const value = {
      ...this.state,
      toggleLoading
    }

    return (
      <LoadingContext.Provider value={value}>
        <LoadingContext.Consumer>
          {
            ({ toggleLoading, loading }) => (
              <Fragment>
                <Jumbotron title="Apoio ao aluno" icon={Avaliations} links={links} />
                <Main>
                  <LoadingScreen
                    loading={loading}
                    bgColor='#FFF'
                    spinnerColor='#ED3B48'
                  >
                    <BrowserRouter>
                      <Switch>
                        <Route
                          path="/internship"
                          render={({ match: { url } }) => (
                            <Fragment>
                              <Route exact path={`${url}`} component={props => <Internship { ...props } { ...{toggleLoading} } />} />
                              <Route
                                path={`${url}/student/regulation`}
                                component={Regulation}
                              />
                              <Route path={`${url}/student/explotation`} component={props => <StudentForm { ...props } { ...{toggleLoading} } />} />
                              <Route
                                exact
                                path={`${url}/moderator/explotation`}
                                component={props => <Table { ...props } { ...{toggleLoading} } />}
                              />
                              <Route path={`${url}/moderator/explotation/:id`} component={props => <Summary { ...props } { ...{toggleLoading} } />} />
                            </Fragment>
                          )}
                        />
                      </Switch>
                    </BrowserRouter>
                  </LoadingScreen>
                  <Alert stack={{ limit: 3 }} />
                </Main>
              </Fragment>
            )
          }
        </LoadingContext.Consumer>
      </LoadingContext.Provider>
    );
  }
}

export default Content;
