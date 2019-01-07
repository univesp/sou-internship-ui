import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import Modal from 'react-modal';

import { Title, Row, Col, Datum } from './styles';

class StepPersonal extends Component {
  state = {
    modal: true
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { handleSubmit, buttons, values } = this.props;
    const { modal } = this.state;
    return (
      <>
        {/* <Modal
          isOpen={modal}
          onRequestClose={this.closeModal}
          contentLabel="Forneça os dados requiridos"
          style={{
            content: {
              width: 500,
              height: 300,
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          }}
        /> */}
        <Formik onSubmit={handleSubmit}>
          <Form>
            <Title>Dados Pessoais</Title>
            <Row>
              <Col>
                <Datum>
                  Nome Civil
                  <span>
                    {values.personal.firstName} {values.personal.lastName}
                  </span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  Nome Social
                  <span>{values.personal.assumedName || 'Não possui'}</span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  Documento de Identidade
                  <span>
                    {values.personal.documents.rg.number.replace(
                      /^(\d{2})(\d{3})(\d{3})(\d{1}).*/,
                      '$1.$2.$3-$4'
                    )}
                  </span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Emissor/Estado
                  <span>{values.personal.documents.rg.issuer}</span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Nacionalidade
                  <span>{values.personal.nationality}</span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  CPF
                  <span>
                    {values.personal.documents.cpf.replace(
                      /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
                      '$1.$2.$3-$4'
                    )}
                  </span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Titulo de Eleitor
                  <span>
                    {values.personal.documents.electoralCard.replace(
                      /^(\d{4})(\d{4})(\d{4})(\d{2}).*/,
                      '$1 $2 $3 $4'
                    ) || 'Não Possui'}
                  </span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Certificado de Reservista
                  <span>
                    {values.personal.documents.certificateReservist ||
                      'Não Possui'}
                  </span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  Cidade de Nascimento
                  <span>{values.personal.address.city}</span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Naturalidade
                  <span>{values.personal.countryBirth}</span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Data de Nascimento
                  <span>
                    {values.personal.birthDate.replace(
                      /^(\d{4})-(\d{2})-(\d{2}).*/,
                      '$3/$2/$1'
                    )}
                  </span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  Nome da Mãe
                  <span>{values.personal.parents.motherName}</span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  Nome do Pai
                  <span>{values.personal.parents.fatherName}</span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  Endereço Residencial (com complementos)
                  <span>
                    {`${values.personal.address.street}, ${
                      values.personal.address.number
                    } ${values.personal.address.complement || ''}`}
                  </span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  CEP
                  <span>
                    {values.personal.address.zip.replace(
                      /^(\d{5})(\d{3}).*/,
                      '$1-$2'
                    )}
                  </span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Bairro
                  <span>{values.personal.address.district}</span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Cidade
                  <span>{values.personal.address.city}</span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Estado
                  <span>{values.personal.address.state}</span>
                </Datum>
              </Col>
            </Row>
            <Row>
              <Col>
                <Datum>
                  E-mail Pessoal
                  <span>{values.personal.personalEmail}</span>
                </Datum>
              </Col>
              <Col>
                <Datum>
                  Telefone
                  <span>
                    {values.personal.cellphone.replace(
                      /^(\d{2})(\d{5})(\d{4}).*/,
                      '($1) $2-$3'
                    )}
                  </span>
                </Datum>
              </Col>
            </Row>
            {buttons}
          </Form>
        </Formik>
      </>
    );
  }
}

export default StepPersonal;
