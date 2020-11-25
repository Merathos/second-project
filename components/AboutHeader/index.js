import * as S from './styles';

const AboutHeader = ({ title, text, list, sidebar, logo }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Paragraph>{text}</S.Paragraph>
        {list && (
          <S.Features>
            {list.map((el, i) => (
              <S.Element key={i}>
                <S.ListTitle>{el.title}</S.ListTitle>
                <S.StyledSmallText>{el.text}</S.StyledSmallText>
              </S.Element>
            ))}
          </S.Features>
        )}
      </S.Wrapper>
      {sidebar && (
        <S.Aside>
          <S.Logo src={logo} width="154" height="25" />
          <S.AsideText>{sidebar.subtitle}</S.AsideText>
        </S.Aside>
      )}
    </S.Grid>
  );
};

export default AboutHeader;
