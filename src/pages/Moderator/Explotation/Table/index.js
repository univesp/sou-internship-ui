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
  Search,
  Nav,
  Actions,
  Action
} from './styles';
import SendIcon from '../../../../assets/imgs/enviar.svg';
import SearchIcon from '../../../../assets/imgs/pesquisar.svg';

class TableComponent extends Component {
  state = {
    tab: 0,
    search: '',
    process: [
      {
        id: 3331,
        avatar: '',
        name: 'Marco Antônio Barão Neves',
        course: 'Ciência da computação',
        semStart: '2019.1',
        semEnd: '2023.2',
        status: 0
      }
    ]
  };
  render() {
    const { process, tab, search } = this.state;
    return (
      <Container>
        <Title>Pedidos de Aproveitamento de Horas</Title>
        <Section>
          <Nav>
            <Actions>
              <Action
                active={tab === 0}
                onClick={() => this.setState({ tab: 0 })}
              >
                Pedidos abertos
              </Action>
              <Action
                active={tab === 1}
                onClick={() => this.setState({ tab: 1 })}
              >
                Deferidos
              </Action>
              <Action
                active={tab === 2}
                onClick={() => this.setState({ tab: 2 })}
              >
                Indeferidos
              </Action>
              <Action
                active={tab === 3}
                onClick={() => this.setState({ tab: 3 })}
              >
                Pendentes
              </Action>
            </Actions>
          </Nav>
          <Search>
            <SearchInput
              placeholder="Pesquise nome ou curso"
              onChange={({ target }) => this.setState({ search: target.value })}
            />
            <Icon icon={SearchIcon} absolute={true} />
          </Search>
          <Table>
            <Head>
              <Row>
                <Th />
                <Th align="left">Nome</Th>
                <Th align="left">RA</Th>
                <Th align="left">Curso</Th>
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
              {process
                .filter(item => item.status === tab)
                .filter(
                  item =>
                    RegExp(search).test(item.name) ||
                    RegExp(search).test(item.course)
                )
                .map(item => (
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
                      <Link to={`explotation/${item.id}`}>
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
