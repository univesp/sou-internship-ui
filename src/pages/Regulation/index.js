import React from 'react';

import {
  Container,
  SplitLeft,
  SplitRight,
  Title,
  OrderedList,
  UnorderedList,
  Item,
  Pdf,
  TextPdf
} from './styles';

import PdfIcon from '../../assets/imgs/pdf.svg';

const Regulation = () => (
  <Container>
    <SplitLeft>
      <OrderedList>
        <Item active>Regulamento de estágio das licenciaturas</Item>
        <Item>O estágio curricular obrigatório</Item>
        <OrderedList>
          <Item>Das caracteristicas gerais do estágio obrigatório</Item>
          <OrderedList>
            <Item>
              Curso de Licenciatura em Matemática, Física, Biologia e Quimica;
            </Item>
            <Item>Curso de Pedagogia:</Item>
            <OrderedList>
              <Item>Da formalização do Estágio Obrigatório</Item>
              <Item>Do Sistema de Supervisão do Estágio Obrigatório</Item>
              <Item>
                Do Sistema de Avaliação do Desempenho do Estágio Obrigatório
              </Item>
              <Item>
                Dos Procedimentos para Interrupção do Estágio Obrigatório
              </Item>
              <Item>
                Das Responsabilidades dos Envolvidos no Estágio Obrigatório
              </Item>
              <Item>
                Das Possibilidades de Redução da Carga Horária de Estágio
              </Item>
            </OrderedList>
          </OrderedList>
        </OrderedList>
        <Item>O Estágio não obrigatório</Item>
        <UnorderedList>
          <Item>Anexo I A</Item>
          <Item>Anexo I B</Item>
          <Item>Anexo II</Item>
          <Item>Anexo III</Item>
        </UnorderedList>
      </OrderedList>
      <TextPdf href="algumpdfaidavida">
        <Pdf src={PdfIcon} alt="Baixar como PDF" />
        <span>Versão em PDF</span>
      </TextPdf>
    </SplitLeft>
    <SplitRight>
      <Title>Regulamento de estágio das licenciaturas</Title>
    </SplitRight>
  </Container>
);

export default Regulation;
