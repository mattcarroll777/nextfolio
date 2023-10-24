import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllUniversityIds, getUniversityData } from '../../lib/university';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const universityData = await getUniversityData(params.id);

  return {
    props: {
      universityData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllUniversityIds();
  return {
    paths,
    fallback: false,
  };
}

export default function University({ universityData }) {
  return (
    <Layout>
      <Head>
        <title>{universityData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{universityData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={universityData.date} />
        </div>
        <div>
          <h3>
            <a href={universityData.link.val}>{universityData.link.title}</a>
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: universityData.contentHtml }} />
        {/* <h4>
          <a href={universityData.linkTwo.val}>
            {universityData.linkTwo.title}
          </a>
        </h4> */}
      </article>
    </Layout>
  );
}
