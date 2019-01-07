import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
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
  Error as ErrorMessage,
  Button
} from './styles';
import Upload from '../../../assets/imgs/upload.svg';
import Success from '../../../assets/imgs/sucesso_upload.svg';

const SUPPORTED_FORMATS = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/bmp',
  'application/pdf'
];
const FILE_SIZE = 4194304;

class StepDocuments extends Component {
  getValidationSchema = () =>
    Yup.object().shape({
      files: Yup.object().shape({
        work: Yup.mixed()
          .test(
            'fileSize',
            'Tamanho do arquivo não suportado, máximo 4mb',
            value => value && value.size <= FILE_SIZE
          )
          .test(
            'fileFormat',
            'Formato não suportado',
            value => value && SUPPORTED_FORMATS.includes(value.type)
          )
          .required('Upload da carteira de trabalho é obrigatório'),
        explotation: Yup.mixed()
          .test(
            'fileSize',
            'Tamanho do arquivo não suportado, máximo 4mb',
            value => value && value.size <= FILE_SIZE
          )
          .test(
            'fileFormat',
            'Formato não suportado',
            value => value && SUPPORTED_FORMATS.includes(value.type)
          )
          .required('Upload da declaração de aproveitamento é obrigatório'),
        activities: Yup.mixed()
          .test(
            'fileSize',
            'Tamanho do arquivo não suportado, máximo 4mb',
            value => value && value.size <= FILE_SIZE
          )
          .test(
            'fileFormat',
            'Formato não suportado',
            value => value && SUPPORTED_FORMATS.includes(value.type)
          )
          .required('Upload do relatório de atividade é obrigatório')
      })
    });

  render() {
    const { handleSubmit, initialValues: files, buttons } = this.props;
    return (
      <Formik
        onSubmit={handleSubmit}
        validationSchema={this.getValidationSchema}
        initialValues={files}
      >
        {({ setFieldValue, errors, values }) => (
          <Form>
            <Title>Documentação</Title>
            <Row>
              <Col>
                <Dropzone
                  accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
                  onDrop={([file, ...rest]) => {
                    if (file) {
                      setFieldValue(
                        'files.work',
                        Object.assign(file, {
                          preview: URL.createObjectURL(file)
                        })
                      );
                    }
                  }}
                  multiple={false}
                >
                  {({ getRootProps, getInputProps, error }) => (
                    <DragDrop {...getRootProps()}>
                      <Document>Carteira de trabalho</Document>
                      <Text>Arraste para cá ou</Text>
                      <Icon src={values.files.work ? Success : Upload} />
                      {console.log(
                        errors.files && errors.files.work
                          ? errors.files.work
                          : null
                      )}
                      <Field {...getInputProps()} />
                      <Button>Procure no computador</Button>
                      <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
                      <Accepted>Máximo: 4MB</Accepted>
                    </DragDrop>
                  )}
                </Dropzone>
                <ErrorMessage name="files.work" component="span" />
              </Col>
              <Col>
                <Dropzone
                  accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
                  onDrop={([file, ...rest]) => {
                    if (file) {
                      setFieldValue(
                        'files.explotation',
                        Object.assign(file, {
                          preview: URL.createObjectURL(file)
                        })
                      );
                    }
                  }}
                  multiple={false}
                >
                  {({ getRootProps, getInputProps }) => (
                    <DragDrop {...getRootProps()}>
                      <Document>Declaração de aproveitamento</Document>
                      <Text>Arraste para cá ou</Text>
                      <Icon src={values.files.explotation ? Success : Upload} />
                      <Field {...getInputProps()} />
                      <Button>Procure no computador</Button>
                      <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
                      <Accepted>Máximo: 4MB</Accepted>
                    </DragDrop>
                  )}
                </Dropzone>
                <ErrorMessage name="files.explotation" component="span" />
              </Col>
              <Col>
                <Dropzone
                  accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
                  onDrop={([file, ...rest]) => {
                    if (file) {
                      setFieldValue(
                        'files.activities',
                        Object.assign(file, {
                          preview: URL.createObjectURL(file)
                        })
                      );
                    }
                  }}
                  multiple={false}
                >
                  {({ getRootProps, getInputProps }) => (
                    <DragDrop {...getRootProps()}>
                      <Document>Relatório de atividade</Document>
                      <Text>Arraste para cá ou</Text>
                      <Icon src={values.files.activities ? Success : Upload} />
                      <Field {...getInputProps()} />
                      <Button>Procure no computador</Button>
                      <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
                      <Accepted>Máximo: 4MB</Accepted>
                    </DragDrop>
                  )}
                </Dropzone>
                <ErrorMessage name="files.activities" component="span" />
              </Col>
            </Row>
            {buttons}
          </Form>
        )}
      </Formik>
    );
  }
}
export default StepDocuments;
