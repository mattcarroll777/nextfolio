import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllFullstackIds, getFullstackData } from '../../lib/fullstacks';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps({ params }) {
  const fullstackData = await getFullstackData(params.id);
  return {
    props: {
      fullstackData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllFullstackIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Fullstack({ fullstackData }) {
  return (
    <Layout>
      <Head>
        <title>{fullstackData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{fullstackData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={fullstackData.date} />
        </div>
        <div>
          <h3>
            <a href={fullstackData.link.val}>{fullstackData.link.title}</a>
          </h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: fullstackData.contentHtml }} />
        <h1 className={utilStyles.screenShotHd}>ScreenShots</h1>
        <div className={utilStyles.imgList}>
          <div className={utilStyles.projCard}>
            <Image src={fullstackData.img1.val} height={400} width={500} />
            <h4>{fullstackData.img1.title}</h4>
          </div>
          <div className={utilStyles.projCard}>
            <Image src={fullstackData.img2.val} height={400} width={500} />
            <h4>{fullstackData.img2.title}</h4>
          </div>
          <div className={utilStyles.projCard}>
            <Image src={fullstackData.img3.val} height={400} width={500} />
            <h4>{fullstackData.img3.title}</h4>
          </div>
        </div>
        <div className={utilStyles.imgListTwo}>
          <div className={utilStyles.projCard}>
            <Image src={fullstackData.img4.val} height={400} width={500} />
            <h4>{fullstackData.img4.title}</h4>
          </div>
          <div className={utilStyles.projCard}>
            <Image src={fullstackData.img5.val} height={400} width={500} />
            <h4>{fullstackData.img5.title}</h4>
          </div>
        </div>
      </article>
    </Layout>
  );
}
