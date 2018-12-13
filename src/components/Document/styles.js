import styled, {css} from 'styled-components';

const Image = styled.img`
  width: 250px;
  height: 193px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: 311px; 
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem
  margin-bottom: 1rem;
`;

const Name = styled.h4`
  font-size: 1rem;
  letter-spacing: 0;
  text-transform: uppercase;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.i`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  ${props => props.action && css`cursor: pointer;`}
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const ContentCard = styled.div`
  display: inline;
  margin-top: 1rem;
  .react-pdf__Document {
    display: inline;
  }
  .react-pdf__Page {
    display: inline;
  }
  .react-pdf__Page__canvas {
    display: inline !important;
  }
`;

const FooterCard = styled.div`
  display: flex;
  margin-top: 1rem;
  padding-left: 25px;
  align-items: center;
  border-top: 1px solid #DFE6E8;
`;

const FileName = styled.p`
  margin-left: 12px;
  line-height: 32px;
  font-weight: bold;
`;

export {
  Image,
  Card,
  HeaderCard,
  Name,
  Icons,
  Icon,
  ContentCard,
  FooterCard,
  FileName
};
