import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllFigmatosIds, getFigmatoData } from '../../lib/figmatos';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps({ params }) {
  const figmatoData = await getFigmatoData(params.id);
  return {
    props: {
      figmatoData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllFigmatosIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Figmato({ figmatoData }) {
  return (
    <Layout>
      <Head>
        <title>{figmatoData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{figmatoData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={figmatoData.date} />
        </div>
        <div>
          <h3>
            <a href={figmatoData.link.val}>{figmatoData.link.title}</a>
          </h3>
        </div>
        <div>
          <h3>
            <a href={figmatoData.link2.val}>{figmatoData.link2.title}</a>
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: figmatoData.contentHtml }} />
      </article>
    </Layout>
  );
}
