import styled, { css } from 'styled-components';
import { Subtitle } from 'elements';

export const Section = styled.section`
  padding-top: 160px;
  background-color: ${props => props.background || '#F7F8F9'};

  @media screen and (max-width: 420px) {
    padding-top: 80px;
  }
`;

export const ListContainer = styled.div`
  @media (min-width: 769px) {
    min-height: 300px;
    background-image: url('backgrounds/about-footer.svg');
    background-repeat: no-repeat;
    background-position: right top;

    ${props =>
      props.background === 'transparent' &&
      css`
        background-image: url('backgrounds/i-footer.svg');
      `};
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 10px;
  transition: color 200ms ease;

  &:hover {
    color: #53b443;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 134%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 1145px) {
    justify-content: flex-start;
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    flex-direction: column;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const ListBlog = styled.ul`
  display: flex;
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    flex-direction: column;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Card = styled.li`
  margin-right: 80px;

  @media screen and (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const Text = styled(Subtitle)`
  margin-bottom: 25px;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 152%;
  }
`;

export const Element = styled.li`
  margin-bottom: 45px;
  max-width: 325px;
  flex-shrink: 0;

  &:not(:last-child) {
    margin-right: 40px;
  }

  @media screen and (max-width: 420px) {
    max-width: auto;
    margin-bottom: 45px;
  }
`;
