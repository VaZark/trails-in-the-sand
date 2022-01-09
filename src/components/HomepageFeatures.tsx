import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">


          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} alt='On the Frontend' src='/img/react.svg' />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>On the Frontend</h3>
              <p>Created and managed React-based websites and widgets for REST backends with i18n and redux support</p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className={styles.imageRow}>
              <img
                className={styles.pythonSvg}
                alt='backend_python'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
              />

              <img
                className={styles.pythonSvg}
                alt='backend-java'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>On the Backend</h3>
              <p>Used Java and Python (Django) to create REST APIs redis caching and DB integration</p>
            </div>
          </div>

          <div className={clsx('col col--4')}>

            <div className="text--center">
              <img className={styles.featureSvg} alt='On the Frontend' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' />
            </div>

            <div className="text--center padding-horiz--md">
              <h3>In DevOps</h3>
              <p>Deployed high availability services using Lambdas, Elastic Beanstalk and RDS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
