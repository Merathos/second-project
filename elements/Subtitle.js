import styled from 'styled-components';

const Styled = styled.p`
  font-size: 18px;
  line-height: 134%;
  opacity: 0.5;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 134%;
  }
`;

const Subtitle = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default Subtitle;
