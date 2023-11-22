import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedFullstacksData } from '../lib/fullstacks';
import { getSortedPostsData } from '../lib/posts';
import { getSortedUniversityData } from '../lib/university';
import { getSortedNextsData } from '../lib/next';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({
  allPostsData,
  allUniversityData,
  allNextsData,
  allFullstacksData,
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section> */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Next JS</h2>
        <div>
          Diving deep into modern web development, I've honed my engineering
          skills using Next.js, a leading React framework. These projects stand
          as a testament to my proficiency in creating high-performance,
          scalable web applications. Through hands-on experience, I've navigated
          the complexities of server-side rendering, static site generation, and
          the nuances of the Next.js ecosystem.
        </div>
        <ul className={utilStyles.list}>
          {allNextsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/next/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <h2 className={utilStyles.headingLg}>Google UX</h2>
        <div>
          In April 2023, I completed the Google UX Design program offered
          through Coursera, a course I engaged in through the Hiring Our Heroes
          initiative. This program, developed by Google, provided me with a
          thorough grounding in the fundamentals of User Experience (UX) design.
          It covered a wide array of topics, from understanding user needs and
          conducting research to designing interfaces and testing user
          experiences through tools like Adobe XD and Figma. The curriculum was
          hands-on, enabling me to work on practical projects that mimic
          real-world UX design scenarios, thereby enhancing my portfolio with
          tangible, applicable work. This training has not only equipped me with
          the skills necessary to create intuitive and user-friendly designs but
          also complements my software development expertise, allowing me to
          approach technology projects with a holistic view of both
          functionality and user experience.
        </div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <h2 className={utilStyles.headingLg}>Fullstack Academy</h2>
        <div>
          On April 8, 2022, I began the comprehensive and immersive Web
          Development program at Fullstack Academy, a coding bootcamp designed
          to transform students into skilled full-stack software developers over
          a four-month period. The program, running Monday through Saturday from
          9 am to 5 pm, centers its curriculum around JavaScript and other key
          web technologies. It covers a broad range of topics crucial for modern
          web development, including HTML, CSS, Node.js, SQL, React, and more.
          The course structure is meticulously crafted to ensure a deep
          understanding of both front-end and back-end development, equipping
          students with the skills necessary to build sophisticated and
          responsive web applications. Emphasizing hands-on learning, Fullstack
          Academy engages students in a series of intensive, real-world
          projects, both individually and in teams, providing practical
          experience and a robust portfolio of work upon graduation. Upon
          completing the program, I received my Certificate of Completion.
        </div>
        <ul className={utilStyles.list}>
          {allFullstacksData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/fullstack/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <h2 className={utilStyles.headingLg}>University</h2>
        <div>
          In May 2023, I graduated from SUNY Albany with a Bachelor's degree,
          majoring in Political Science and minoring in Cybersecurity, Homeland
          Security, and Emergency Management. This multidisciplinary program
          equipped me with a comprehensive understanding of complex political
          systems and the intricacies of national and international security.
          The curriculum extensively covered topics like cybersecurity
          principles, threat assessment, crisis management, and emergency
          response strategies, blending theoretical knowledge with practical
          applications. My education in these fields has honed my analytical
          skills, attention to detail, and ability to respond effectively to
          dynamic situations. This background, combined with my subsequent
          training in software development, uniquely positions me to contribute
          to technology projects, especially those requiring a deep
          understanding of security and data privacy concerns in the digital
          landscape.
        </div>
        <ul className={utilStyles.list}>
          {allUniversityData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/university/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allUniversityData = getSortedUniversityData();
  const allNextsData = getSortedNextsData();
  const allFullstacksData = getSortedFullstacksData();
  return {
    props: {
      allFullstacksData,
      allPostsData,
      allUniversityData,
      allNextsData,
    },
  };
}
