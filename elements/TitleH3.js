import styled from 'styled-components';

const Styled = styled.h3`
  font-size: 34px;
  line-height: 120%;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

const TitleH3 = ({ content, className }) => (
  <Styled className={className}>{content}</Styled>
);

export default TitleH3;