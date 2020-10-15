import styled from 'styled-components';

export const List = styled.ul`
  display: flex;

  @media (max-width: 420px) {
    margin: 0;
  }
`;

export const Element = styled.li`
  &:not(:last-child) {
    margin-right: 14px;
  }
`;

export const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.grey ? '#FFFFFF' : '#F7F8F9')};
  border-radius: 50%;
  transition: background-color 200ms ease;

  @media (max-width: 420px) {
    margin-bottom: 30px;
  }

  &:hover {
    background-color: #FB5235;

    path {
      fill: #fff;
    }
  }
`;
