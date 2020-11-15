import styled from 'styled-components';

export const Title = styled.button.attrs(props => ({
  transform: props.active
    ? 'rotate(-180deg) translateY(50%)'
    : 'translateY(-50%)',
}))`
  padding: 15px 0;
  position: relative;
  font-size: 20px;
  line-height: 134%;
  text-align: left;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 7px;
    top: 50%;
    right: 0;
    background-image: url('icons/dropdown.svg');
    background-repeat: no-repeat;
    transform: ${props => props.transform};
    transition: transform 0.2s ease;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Item = styled.li`
  margin-bottom: 10px;

  input:checked ~ label {
    color: #53b443;
    opacity: 1;

    &::after {
      display: block;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
    margin-bottom: 16px;
    padding-left: 12px;
  }
`;

export const List = styled.ul`
  height: 180px;
  overflow-y: scroll;
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #f7f8f9;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #53b443;
    border-radius: 6px;
    border: 3px solid #53b443;
  }

  scrollbar-width: thin;
  scrollbar-color: #53b443 #f7f8f9;
`;

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 20px;

  &::after {
    content: '';
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: -10px;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      360deg,
      #ffffff 49.12%,
      rgba(255, 255, 255, 0) 121.93%
    );
  }

  @media screen and (max-width: 768px) {
    &::after {
      background: ${props =>
        props.withBg
          ? 'linear-gradient(360deg, #f7f8f9 49.12%, rgba(247, 248, 249, 0) 121.93%)'
          : 'linear-gradient(360deg, #FFFFFF 49.12%, rgba(255, 255, 255, 0) 121.93%)'};
    }
  }
`;
