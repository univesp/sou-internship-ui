import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
  flex-direction: column;
`;

const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SplitLeft = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 1rem;
`;

const SplitRight = styled.div`
  width: calc(70% - 1rem);
  height: 100%;
  padding: 0 2rem;
  border-left: 1px dotted #000;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 1rem;
`;

const OrderedList = styled.ol`
  list-style-type: upper-roman;
  line-height: 1.2rem;
  ol {
    width: 100%;
    padding-inline-start: 0.8rem;
    list-style-type: decimal;
    ol {
      list-style-type: upper-roman;
      ol {
        list-style-type: decimal;
      }
    }
  }
`;

const UnorderedList = styled.ul`
  padding-inline-start: 0.8rem;
  list-style-type: none;
`;

const Item = styled.li`
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`;

const Pdf = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 0.5rem;
`;

const TextPdf = styled.a`
  display: inline-flex;
  margin-top: 1rem;
  margin-left: 1rem;
  text-decoration: none;
  align-items: center;
  span {
    display: inline-block;
    font-size: 0.8rem;
    color: var(--red-lighten);
  }
`;

const Agreement = styled(Link)`
  align-self: flex-end;
  display: block;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  border: 1px solid var(--red);
  color: var(--red);
  text-transform: uppercase;
  text-decoration: none;
`;

export {
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
};
