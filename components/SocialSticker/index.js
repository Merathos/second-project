import Vk from 'public/icons/vk.svg';
import Twitter from 'public/icons/twitter.svg';
import Facebook from 'public/icons/facebook.svg';
import styled from 'styled-components';

const List = styled.ul`
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), #201f2a;
`;

const Link = styled.a`
  width: 47px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #53b443;
    background-color: #53b443;
    color: #ffffff;
  }

  &:active {
    border-color: #339722;
    background-color: #339722;
  }
`;

const SocialSticker = ({ data, className }) => (
  <List className={className}>
    {data.map((el, i) => (
      <li key={i}>
        <Link href={el.link}>
          {
            {
              twitter: <Twitter />,
              facebook: <Facebook />,
              vk: <Vk />,
            }[el.title]
          }
        </Link>
      </li>
    ))}
  </List>
);

export default SocialSticker;
