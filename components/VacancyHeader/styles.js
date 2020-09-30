import styled from 'styled-components';
import { TitleH1, Button, Text } from 'elements';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 50px;
  margin-bottom: 160px;

  @media screen and (max-width: 420px) {
    padding: 110px 30px 64px;
    max-width: 375px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 340px) {
    padding: 110px 20px 64px;
    max-width: 320px;
  }
`;

export const TextBlock = styled.div`
  max-width: 627px;
  margin-bottom: 20px;
`;

export const Bold = styled.b`
  font-weight: 800;
  margin-right: 5px;
`;

export const Wrapper = styled.div`
  margin-top: 60px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
`;

export const H1 = styled(TitleH1)`
  max-width: 870px;
`;

export const StyledText = styled(Text)`
  display: inline;
`;