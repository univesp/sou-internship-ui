import React, { Component, Fragment } from 'react';
import StepSummary from '../../../StepSummary';
import { Formik, Form } from 'formik';
import Alert from 'react-s-alert';

import {
  Container,
  Title,
  Subtitle,
  Area,
  Text,
  MyField as Field,
  GroupButton,
  Button,
  Label,
  Textarea
} from './styles';

class Summary extends Component {
  state = {
    overrule: false,
    process: {
      files: {
        work: {},
        explotation: {},
        activities: {}
      }
    }
  };

  overrule = e => {
    e.preventDefault();
    this.setState({ overrule: true });
  };

  submit = values => {
    console.log('Values: ', values);
    const { history } = this.props;
    Alert.success('Resposta de aproveitamento reencaminhada!', {
      position: 'bottom-right',
      effect: 'slide'
    });
    history.push('/internship/moderator/explotation');
  }

  renderJustification() {
    return (
      <Fragment>
        <Label>
          Justificativa para indeferimento<span>*</span>
          <Textarea component="textarea" placeholder="Digite aqui..." name="justification" />
        </Label>
        <GroupButton>
          <Button primary type="submit">
            Salvar
          </Button>
        </GroupButton>
      </Fragment>
    );
  }

  render() {
    const { process, overrule } = this.state;
    return (
      <Container>
        <Title>Nome da Disciplina deEstágio</Title>
        <Subtitle>Semestre e ano de oferta</Subtitle>
        <StepSummary values={process} />
        <Formik
          onSubmit={this.submit}
          initialValues={{
            hours: 0,
            justification: ''
          }}
        >
          <Form>
            <Area>
              <Text>
                Neste processo de aproveitamento de estágio são conferidos ao
                aluno
                <Field name="hours" type="number" min="0" /> horas comprovadas.
              </Text>
            </Area>
            <GroupButton>
              <Button secondary onClick={this.overrule}>
                Indeferir
              </Button>
              <Button primary type="submit" onClick={this.handleSubmit}>
                Deferir
              </Button>
            </GroupButton>
            {overrule ? this.renderJustification() : null}
          </Form>
        </Formik>
      </Container>
    );
  }
}

export default Summary;
