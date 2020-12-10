import TitleH5 from 'elements/TitleH5';
import { Block, Img, Text } from './styles';

const Userpic = props => {
  const {
    data: { imageUrl, title, describe },
  } = props;
  console.log(describe);

  return (
    <Block>
      <Img background={`https://api.develop.dins.d.nimax.ru/${imageUrl}`} />
      <div>
        <TitleH5>{title}</TitleH5>
        <Text dangerouslySetInnerHTML={{ __html: describe }} />
      </div>
    </Block>
  );
};

export default Userpic;
