import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <a className={styles.linkIS} href="https://isbs.nsi.bg" target='_blank'>през Информационна система "Бизнес статистика" - isbs.nsi.bg</a>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://nsiassistant.bg">
            Към НСИ Асистента
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Здравейте от ${siteConfig.title}`}
      description="Помощник за подаване на годишни отчети към Националния статистически институт">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
