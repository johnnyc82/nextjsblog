import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm John, I'm a senior web developer.</p>
        <p>
          (This is a sample website to practice using Next.js)
        </p>
      </section>
      <Link href="posts/first-post">Test page link</Link>
    </Layout>
  );
}