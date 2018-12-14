import React from 'react';

import {
  Container,
  SplitContainer,
  SplitLeft,
  SplitRight,
  Title,
  Text,
  OrderedList,
  UnorderedList,
  Item,
  Pdf,
  TextPdf,
  Agreement
} from './styles';

import PdfIcon from '../../../assets/imgs/pdf.svg';

const Regulation = () => (
  <Container>
    <SplitContainer>
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
        <Text>
          O presente regulamento normatiza as dinâmicas e processos envolvidos
          no estágio supervisionado obrigatório e não obrigatório, para os
          seguintes cursos: Licenciatura em Matemática; Licenciatura em Química;
          Licenciatura em Física; Licenciatura em Biologia; Licenciatura em
          Pedagogia. Estágio é o ato educativo escolar supervisionado,
          desenvolvido em ambiente de trabalho, que visa preparar o estudante
          para a sua futura atividade profissional. A especificidade de cada
          estágio en-contra-se no Projeto Pedagógico de cada curso. O estágio
          visa ao aprendizado de competências próprias da profissão e ã
          contextualização curricular, objetivando o desenvolvimento do educando
          para a vida cidadã e para o trabalho (8 r do ao. r da Lei
          11.788/2008). O estágio supervisionado obrigatório deve ser realizado,
          preferencialmente, em ambientes públi-cos, e caracteriza-se por
          atividades educacionais que articulem intrinsecamente a prática e os
          con-teúdos da formação acadêmica, conforme preconiza o Parecer
          28/2001.0 estágio tem a carga ho-rária mínima de 400 horas, conforme a
          Resolução CNE/CP 1/2002, que estão distribuídas na matriz curricular
          dos cursos de Licenciatura, em disciplinas obrigatórias, orientadas
          por um supervisor.
        </Text>
      </SplitRight>
    </SplitContainer>
    <Agreement to="form">Eu concordo</Agreement>
  </Container>
);

export default Regulation;
