import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div>
          <h3>
            <a href={postData.link.val}>{postData.link.title}</a>
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <h4>
          <a href={postData.linkTwo.val}>{postData.linkTwo.title}</a>
        </h4>
      </article>
    </Layout>
  );
}
