import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-left: 74px;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 40%;
  margin-bottom: 26px;

  &:not(:nth-child(even)) {
    margin-right: 20px;
  }

  @media screen and (max-width: 1200px) {
    width: 45%;
  }

  @media screen and (max-width: 720px) {
    width: 95%;
    margin-bottom: 30px;

    &:nth-child(odd) {
      order: 0;
    }

    &:nth-child(even) {
      order: 1;
    }
  }
`;

export const Title = styled.a`
  padding-right: 10px;
  font-size: 32px;
  font-weight: 700;
  line-height: 170%;
  transition: color 0.3s ease;

  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 720px) {
    font-size: 22px;
    line-height: 26.4px;
  }
`;

export const SpecialMark = styled.img`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 720px) {
    width: 18px;
    height: 18px;
  }
`;