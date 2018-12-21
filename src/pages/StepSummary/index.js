import React from 'react';
import { Formik, Form } from 'formik';

import Document from '../../components/Document';
import { Title, Subtitle, Row, Col, Data, Item, Datum } from './styles';

const dict = {
  work: 'Carteira de trabalho',
  explotation: 'Declaração',
  activities: 'Relatório de atividades'
};

const bloodType = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
const race = ['Negro(a)', 'Pardo(a)', 'Amarelo(a)', 'Indígena', 'Branco(a)'];
const marital = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'];

const StepSummary = ({ handleSubmit, buttons, values }) => (
  <Formik onSubmit={handleSubmit}>
    <Form>
      <Title>Resumo</Title>
      <Subtitle>Dados Pessoais</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              Nome <Datum>{values.personal.firstName}</Datum>
            </Item>
            <Item>
              Sobrenome <Datum>{values.personal.lastName}</Datum>
            </Item>
            <Item>
              Nome Social
              <Datum>{values.personal.assumedName || 'Não possui'}</Datum>
            </Item>
            <Item>
              Data de nascimento{' '}
              <Datum>
                {values.personal.birthDate.replace(
                  /^(\d{4})-(\d{2})-(\d{2}).*/,
                  '$3/$2/$1'
                )}
              </Datum>
            </Item>
            <Item>
              Sexo{' '}
              <Datum>
                {values.personal.gender === 'F' ? 'Feminino' : 'Masculino'}
              </Datum>
            </Item>
            <Item>
              Naturalidade <Datum>{values.personal.countryBirth}</Datum>
            </Item>
            <Item>
              Nacionalidade <Datum>{values.personal.nationality}</Datum>
            </Item>
            <Item>
              CPF{' '}
              <Datum>
                {values.personal.documents.cpf.replace(
                  /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
                  '$1.$2.$3-$4'
                )}
              </Datum>
            </Item>
            <Item>
              Raça <Datum>{race[values.personal.race]}</Datum>
            </Item>
            <Item>
              Estado Civil <Datum>{marital[values.personal.marital]}</Datum>
            </Item>
            <Item>
              Tipo de Sanguíneo{' '}
              <Datum>{bloodType[values.personal.bloodType]}</Datum>
            </Item>
            <Item>
              Doador de órgãos?{' '}
              <Datum>{values.personal.organDonor ? 'Sim' : 'Não'}</Datum>
            </Item>
          </Data>
        </Col>
        <Col>
          <Data>
            <Item>
              Logradouro <Datum>{values.personal.address.street}</Datum>
            </Item>
            <Item>
              Número <Datum>{values.personal.address.number}</Datum>
            </Item>
            <Item>
              CEP{' '}
              <Datum>
                {values.personal.address.zip.replace(
                  /^(\d{5})(\d{3}).*/,
                  '$1-$2'
                )}
              </Datum>
            </Item>
            <Item>
              Bairro <Datum>{values.personal.address.district}</Datum>
            </Item>
            <Item>
              Cidade <Datum>{values.personal.address.city}</Datum>
            </Item>
            <Item>
              Estado <Datum>{values.personal.address.state}</Datum>
            </Item>
            <Item>
              Complemento{' '}
              <Datum>
                {values.personal.address.complement || 'Não possui'}
              </Datum>
            </Item>
            <Item>
              Celular{' '}
              <Datum>
                {values.personal.cellphone.replace(
                  /^(\d{2})(\d{5})(\d{4}).*/,
                  '($1) $2-$3'
                )}
              </Datum>
            </Item>
            <Item>
              E-mail pessoal <Datum>{values.personal.personalEmail}</Datum>
            </Item>
            <Item>
              E-mail profissional
              <Datum>{values.personal.professionalEmail}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Dados da Concedente</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              CNPJ{' '}
              <Datum>
                {values.grantor.cnpj.replace(
                  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
                  '$1.$2.$3/$4-$5'
                )}
              </Datum>
            </Item>
            <Item>
              Nome <Datum>{values.grantor.name}</Datum>
            </Item>
            <Item>
              Telefone 1{' '}
              <Datum>
                {values.grantor.phone[0].replace(
                  /^(\d{2})(\d{4,5})(\d{4}).*/,
                  '($1) $2-$3'
                )}
              </Datum>
            </Item>
            <Item>
              Telefone 2
              <Datum>
                {values.grantor.phone[1] && values.grantor.phone[1]
                  ? values.grantor.phone[1].replace(
                      /^(\d{2})(\d{4,5})(\d{4}).*/,
                      '($1) $2-$3'
                    )
                  : 'Não informado'}
              </Datum>
            </Item>
            <Item>
              Fax{' '}
              <Datum>
                {values.grantor.fax.replace(
                  /^(\d{2})(\d{4,5})(\d{4}).*/,
                  '($1) $2-$3'
                ) || 'Não informado'}
              </Datum>
            </Item>
            <Item>
              Logradouro <Datum>{values.grantor.street}</Datum>
            </Item>
            <Item>
              Número <Datum>{values.grantor.number}</Datum>
            </Item>
            <Item>
              CEP{' '}
              <Datum>
                {values.grantor.zip.replace(/^(\d{5})(\d{3}).*/, '$1-$2')}
              </Datum>
            </Item>
            <Item>
              Cidade <Datum>{values.grantor.city}</Datum>
            </Item>
            <Item>
              Estado <Datum>{values.grantor.federatedState}</Datum>
            </Item>
            <Item>
              Complemento
              <Datum>{values.grantor.complement || 'Não possui'}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Dados do Professor coordenador</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              Nome <Datum>{values.professor.name}</Datum>
            </Item>
            <Item>
              Telefone 1{' '}
              <Datum>
                {values.professor.phone[0].replace(
                  /^(\d{2})(\d{4,5})(\d{4}).*/,
                  '($1) $2-$3'
                )}
              </Datum>
            </Item>
            <Item>
              Telefone 2
              <Datum>
                {values.professor.phone[1] && values.professor.phone[1]
                  ? values.professor.phone[1].replace(
                      /^(\d{2})(\d{4,5})(\d{4}).*/,
                      '($1) $2-$3'
                    )
                  : 'Não informado'}
              </Datum>
            </Item>
            <Item>
              E-mail institucional
              <Datum>{values.professor.email}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Dados do Diretor/Coordenador responsável</Subtitle>
      <Row>
        <Col>
          <Data>
            <Item>
              Nome <Datum>{values.responsible.name}</Datum>
            </Item>
            <Item>
              Telefone 1{' '}
              <Datum>
                {values.responsible.phone[0].replace(
                  /^(\d{2})(\d{4,5})(\d{4}).*/,
                  '($1) $2-$3'
                )}
              </Datum>
            </Item>
            <Item>
              Telefone 2
              <Datum>
                {values.responsible.phone[1] && values.responsible.phone[1]
                  ? values.responsible.phone[1].replace(
                      /^(\d{2})(\d{4,5})(\d{4}).*/,
                      '($1) $2-$3'
                    )
                  : 'Não informado'}
              </Datum>
            </Item>
            <Item>
              E-mail institucional
              <Datum>{values.responsible.email}</Datum>
            </Item>
          </Data>
        </Col>
      </Row>
      <Subtitle>Documentos</Subtitle>
      <Row width="100%">
        {Object.keys(values.files).map(file => (
          <Col key={file}>
            <Document
              name={dict[file]}
              document={file}
              file={values.files[file]}
            />
          </Col>
        ))}
      </Row>
      {buttons}
    </Form>
  </Formik>
);

export default StepSummary;
