import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Experienced',
    Svg: require('@site/static/img/mountain-svgrepo-com.svg').default,
    description: (
      <>
        I have over 20 years of experience as a technical writer and developer. I know how to write clear, concise documentation that will make your software shine.
      </>
    ),
  },
  {
    title: 'Strong Technical Skills',
    Svg: require('@site/static/img/programmer-thought-svgrepo-com.svg').default,
    description: (
      <>
        I have up-to-date AI skills, experience as a software developer, and earned an undergraduate degree in computer science.
      </>
    ),
  },
  {
    title: 'Gets the Job Done',
    Svg: require('@site/static/img/worker-digging-a-hole-svgrepo-com.svg').default,
    description: (
      <>
        Just tell me what you need, and I will get it done. I don't need hand-holding.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
