import { useSelector } from 'react-redux';
import { NoteLeft, NoteRight, Advert } from 'components';
import { Container, Block, H2, AdvertsWrapper } from './styles';

const Articles = props => {
  const english = useSelector(state => state.english);
  const { data, type } = props;
  return (
    <Container>
      {type === 'article' ? (
        <>
          <NoteLeft data={data[0]} />
          <NoteRight data={data[1]} />
        </>
      ) : (
        <Block>
          <H2>
            {english
              ? 'Vacancies in this category'
              : 'Вакансии в этой категории'}
          </H2>
          <AdvertsWrapper>
            <Advert data={data.catalog[0]} />
            <Advert data={data.catalog[1]} />
          </AdvertsWrapper>
        </Block>
      )}
    </Container>
  );
};

export default Articles;
