import { Layout, Article } from 'containers';

import mock from 'mock/index';

const articlePage = () => {
  return (
    <Layout backButton subscription>
      <Article data={mock.article} />
    </Layout>
  );
}

export default articlePage;
