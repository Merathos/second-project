import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.div`
  width: 57px;
  height: 57px;
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLink = ({ href, content, className }) => (
  <Styled className={className}>
    <Link href={href}>{content}</Link>
  </Styled>
);

export default CustomLink;