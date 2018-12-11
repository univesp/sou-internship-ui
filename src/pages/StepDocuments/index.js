import React, { Fragment } from 'react';
import Dropzone from 'react-dropzone';

import {
  Title,
  Row,
  Col,
  DragDrop,
  Text,
  Document,
  Accepted,
  Icon,
  Field,
  Button
} from './styles';
import Upload from '../../assets/imgs/upload.svg';
import Success from '../../assets/imgs/successo.svg';

const StepDocuments = ({ values, setFieldValue }) => (
  <Fragment>
    <Title>Documentação</Title>
    <Row>
      <Col>
        <Dropzone
          onDrop={acceptedFiles => {
            setFieldValue('files.work', acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <DragDrop {...getRootProps()}>
              <Document>Carteira de trabalho</Document>
              <Text>Arraste para cá ou</Text>
              <Icon
                src={
                  JSON.stringify(values.files.work) !== '{}' ? Success : Upload
                }
              />
              <Field name="files.work" {...getInputProps()} />
              <Button>Procure no computador</Button>
              <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
            </DragDrop>
          )}
        </Dropzone>
      </Col>
      <Col>
        <Dropzone
          onDrop={acceptedFiles => {
            setFieldValue('files.explotation', acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <DragDrop {...getRootProps()}>
              <Document>Declaração de aproveitamento</Document>
              <Text>Arraste para cá ou</Text>
              <Icon
                src={
                  JSON.stringify(values.files.explotation) !== '{}'
                    ? Success
                    : Upload
                }
              />
              <Field name="files.explotation" {...getInputProps()} />
              <Button>Procure no computador</Button>
              <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
            </DragDrop>
          )}
        </Dropzone>
      </Col>
      <Col>
        <Dropzone
          onDrop={acceptedFiles => {
            setFieldValue('files.activities', acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <DragDrop {...getRootProps()}>
              <Document>Relatório de atividade</Document>
              <Text>Arraste para cá ou</Text>
              <Icon
                src={
                  JSON.stringify(values.files.activities) !== '{}'
                    ? Success
                    : Upload
                }
              />
              <Field name="files.activities" {...getInputProps()} />
              <Button>Procure no computador</Button>
              <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
            </DragDrop>
          )}
        </Dropzone>
      </Col>
    </Row>
  </Fragment>
);

export default StepDocuments;
