import * as S from './styles';
import { SmartText } from 'elements';

const Schedule = ({ description, schedule }) => {
  return (
    <S.Section>
      <S.Container>
        <S.Description>{description}</S.Description>
        <S.MainTitle>{schedule.title}</S.MainTitle>
        <S.List>
          {schedule.list.map((el, i) => (
            <S.Item key={i}>
              <S.Time>{el.time}</S.Time>
              <S.Content>
                <S.Title>{el.name}</S.Title>
                {el.description && <SmartText text={el.description} />}
              </S.Content>
            </S.Item>
          ))}
        </S.List>
        <S.StyledButton type="accent">Зарегистрироваться</S.StyledButton>
      </S.Container>
    </S.Section>
  );
};

export default Schedule;
