import styled from 'styled-components';
import TitleH2 from 'elements/TitleH2';
import Button from 'elements/Button';

export const Section = styled.section`
  background-color: #F7F8F9;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'a b'
    'c b'
    'd b'
    '. b';
  grid-column-gap: 170px;
  background-image: ${props => props.decor ? "url('backgrounds/application.png')" : 'none'};
  background-repeat: no-repeat;
  background-position: 105% center;
  padding: 160px 50px 180px;

  @media screen and (max-width: 420px) {
    max-width: 315px;
    background-size: 50%;
    background-position: 150% center;
    padding: 80px 30px 80px;
    grid-template-areas:
    'a'
    'b'
    'c'
    'd';
    grid-column-gap: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  padding-top: 40px;
  grid-area: d;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
    padding: 0;
  }
`;

export const StyledButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 20px;

    @media screen and (max-width: 420px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export const H2 = styled(TitleH2)`
  max-width: 520px;
  margin-bottom: 40px;
  grid-area: a;
`;

export const Picture = styled.img`
  width: 344px;
  grid-area: b;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const Text = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 158%;
  grid-area: c;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 158%;
    margin-bottom: 60px;
  }
`;