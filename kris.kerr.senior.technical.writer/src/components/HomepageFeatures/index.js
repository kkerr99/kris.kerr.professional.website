import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programming Technical Writer',
    Svg: require('@site/static/img/programmer-thought-svgrepo-com.svg').default,
    description: (
      <>
        I'm a technical writer and a programmer. I can write code samples and read source code.
      </>
    ),
  },
  {
    title: 'Earned a Bachelor’s Degree in Computer Science',
    Svg: require('@site/static/img/student-person-3-svgrepo-com.svg').default,
    description: (
      <>
        I have a solid education in computer science and programming concepts.
      </>
    ),
  },
  {
    title: 'Former Developer',
    Svg: require('@site/static/img/computer-programmer-software-engineer-coder-software-developer-svgrepo-com.svg').default,
    description: (
      <>
        I use my development experience to identify and solve developers' problems.
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
