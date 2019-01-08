import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document as Pdf, Page } from 'react-pdf';

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
  Agreement
} from './styles';

import Degrees from '../../../assets/pdf/regulamento_de_estagios_e_licenciaturas_08_11_18.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;
class Regulation extends Component {
  state = {
    page: 1
  };
  render() {
    const { page } = this.state;
    return (
      <Container>
        <SplitContainer>
          <SplitLeft>
            <OrderedList>
              <Item
                active={page <= 3}
                onClick={() => this.setState({ page: 3 })}
              >
                Regulamento de estágio das licenciaturas
              </Item>
              <Item
                active={page > 3 && page < 10}
                onClick={() => this.setState({ page: 4 })}
              >
                O estágio curricular obrigatório
              </Item>
              <OrderedList>
                <Item
                  active={page > 3 && page < 10}
                  onClick={() => this.setState({ page: 4 })}
                >
                  Das caracteristicas gerais do estágio obrigatório
                </Item>
                <OrderedList>
                  <Item>
                    Curso de Licenciatura em Matemática, Física, Biologia e
                    Quimica;
                  </Item>
                  <Item>Curso de Pedagogia:</Item>
                  <OrderedList>
                    <Item>Da formalização do Estágio Obrigatório</Item>
                    <Item>Do Sistema de Supervisão do Estágio Obrigatório</Item>
                    <Item>
                      Do Sistema de Avaliação do Desempenho do Estágio
                      Obrigatório
                    </Item>
                    <Item>
                      Dos Procedimentos para Interrupção do Estágio Obrigatório
                    </Item>
                    <Item>
                      Das Responsabilidades dos Envolvidos no Estágio
                      Obrigatório
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
          </SplitLeft>
          <SplitRight>
            <div style={{ width: '800px' }}>
              <Pdf file={Degrees}>
                <Page width={800} pageNumber={page} />
              </Pdf>
            </div>
          </SplitRight>
        </SplitContainer>
        <Agreement to="explotation">Eu concordo</Agreement>
      </Container>
    );
  }
}

export default Regulation;
