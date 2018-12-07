import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const SplitLeft = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 1rem;
`;

const SplitRight = styled.div`
  width: calc(70% - 1rem);
  height: 100%;
  border-left: 1px dotted #000;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
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
  text-decoration: none;
  align-items: center;
  span {
    display: inline-block;
    font-size: 0.8rem;
    color: #d4343f;
  }
`;

export {
  Container,
  SplitLeft,
  SplitRight,
  Title,
  OrderedList,
  UnorderedList,
  Item,
  Pdf,
  TextPdf
};
