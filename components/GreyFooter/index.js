import ArrowRight from 'public/icons/arrow-right.svg';
import * as S from './styles';

const GreyFooter = ({ data }) => {
  return (
    <S.Section>
      <S.List>
        {data.map((el, i) => (
          <li key={i}>
            <S.Title>{el.title}</S.Title>
            <S.Text>{el.text}</S.Text>
            <ArrowRight />
          </li>
        ))}
      </S.List>
    </S.Section>
  );
};

export default GreyFooter;