import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Avatar,
  Icon,
  Table,
  Head,
  Row,
  Th,
  Body,
  Td,
  Section,
  Title,
  SearchInput,
  Search
} from './styles';
import SendIcon from '../../../../assets/imgs/enviar.svg';
import SearchIcon from '../../../../assets/imgs/pesquisar.svg';

class TableComponent extends Component {
  state = {
    process: [
      {
        id: 3331,
        avatar: '',
        name: 'Marco Antônio Barão Neves',
        course: 'Ciência da computação',
        semStart: '20/01/2019',
        semEnd: '19/12/2023'
      }
    ]
  };
  render() {
    const { process } = this.state;
    return (
      <Container>
        <Title>Pedidos de Aproveitamento de Horas</Title>
        <Section>
          <Search>
            <SearchInput placeholder="Pesquise nome ou curso" />
            <Icon icon={SearchIcon} />
          </Search>
          <Table>
            <Head>
              <Row>
                <Th />
                <Th align="left">Nome</Th>
                <Th align="left">RA</Th>
                <Th align="left">Polo</Th>
                <Th align="left">
                  Semestre/
                  <br />
                  Ano de Ingresso
                </Th>
                <Th align="left">
                  Semestre/
                  <br />
                  Ano de Conclusão
                </Th>
                <Th />
              </Row>
            </Head>
            <Body>
              {process.map(item => (
                <Row>
                  <Td>
                    <Avatar avatar={item.avatar} />
                  </Td>
                  <Td align="left">{item.name}</Td>
                  <Td align="left">{item.id}</Td>
                  <Td align="left">{item.course}</Td>
                  <Td align="left">{item.semStart}</Td>
                  <Td align="left">{item.semEnd}</Td>
                  <Td>
                    <Link to={`moderator/form/${item.id}`}>
                      <Icon icon={SendIcon} />
                    </Link>
                  </Td>
                </Row>
              ))}
            </Body>
          </Table>
        </Section>
      </Container>
    );
  }
}

export default TableComponent;
