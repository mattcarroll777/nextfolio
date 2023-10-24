import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllNextIds, getNextData } from '../../lib/next';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const nextData = await getNextData(params.id);

  return {
    props: {
      nextData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllNextIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Next({ nextData }) {
  return (
    <Layout>
      <Head>
        <title>{nextData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{nextData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={nextData.date} />
        </div>
        <div>
          <h3>
            <a href={nextData.link.val}>{nextData.link.title}</a>
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: nextData.contentHtml }} />
      </article>
    </Layout>
  );
}
