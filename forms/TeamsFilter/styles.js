import styled from 'styled-components';

export const Title = styled.h3`
  padding: 15px 0;
  position: relative;
  font-size: 20px;
  line-height: 134%;
  text-align: left;
  width: 100%;
  font-weight: 500;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Sup = styled.sup`
  margin-left: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: #53b443;
  vertical-align: top;
`;

export const Item = styled.li`
  opacity: 0.5;
  margin-bottom: 10px;

  input:checked ~ label {
    color: #53b443;

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
  height: 450px;
  min-width: 250px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    /* Chrome */
    opacity: 0;
  }

  &::-webkit-scrollbar {
    opacity: 0;
  }

  @media screen and (max-width: 420px) {
    max-height: 200px;
  }
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
`;

export const Label = styled.label`
  position: relative;
  padding-left: 20px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 0;
    background-color: #53b443;
    transform: translateY(-50%);
    border-radius: 50%;
    display: none;
  }
`;
