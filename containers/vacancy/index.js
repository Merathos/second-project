import {
  VacancyHeader,
  Articles,
  Application,
  ArticleContent,
  OfficesMap,
  Conditions,
  SliderVacancy,
} from 'components';

import {
  Container,
  GreyContainer,
  SliderContainer,
  SliderSection,
  VacancySection,
  ConditionsSection,
} from './styles';

const Vacancy = ({ data, back }) => {
  const content = JSON.parse(back.content);

  return (
    <>
      <GreyContainer>
        <VacancyHeader data={back} />
      </GreyContainer>

      <Container>
        <ArticleContent content={content} isRelocation={back.is_relocation} />
      </Container>
      <ConditionsSection>
        <Container>
          <Conditions data={data.conditions} />
        </Container>
      </ConditionsSection>
      <SliderSection>
        <SliderContainer>
          <SliderVacancy data={data.steps} />
        </SliderContainer>
      </SliderSection>

      <Application data={data.application} decor vacancy />

      <OfficesMap data={data.map} />

      <VacancySection>
        <Container>
          <Articles type="vacancy" data={data.vacancies} />
        </Container>
      </VacancySection>
    </>
  );
};

export default Vacancy;
