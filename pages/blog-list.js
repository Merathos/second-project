import { Layout, Blogs } from 'containers';
import mock from 'mock/index';

const BlogList = () => {
  return (
    <Layout isVisible={false}>
      <Blogs data={mock.blogList} />
    </Layout>
  );
};

export default BlogList;
