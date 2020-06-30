import styled from 'styled-components';

const Styled = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 134%;
  color: #201f2a;
  opacity: 0.5;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 134%;
  }
`;

const Subtitle = ({ content, className }) => (
  <Styled className={className}>{content}</Styled>
);

export default Subtitle;
