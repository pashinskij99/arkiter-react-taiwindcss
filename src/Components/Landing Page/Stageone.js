import React, { Fragment } from 'react';
import Image from '../../Assets/Steps.png';
import arrowImage from '../../Assets/train.png';
import styles from '../../styles/Stageone.module.scss'
import { TypographyH2, TypographyH3 } from '../UI/Typography';

const data = [
  {
    number: 1,
    title: 'Build your test',
    description: 'Unleash the power of our comprehensive system design and architecture assessment.',
  },
  {
    number: 2,
    title: 'Invite your candidate',
    description: 'Here your candidates undertake your tailored interview on our fully automated and engaging platform',
  },
  {
    number: 3,
    title: 'Hire the best',
    description: 'Build your dream team by hiring the best candidates with our unbiased, data-driven insights.',
  },
];

const classNameWrapper = 'relative flex items-center justify-center p-4 h-[200px]'
const classNameInner = 'flex flex-col items-center absolute w-[409px] top-0'
const classNameH2 = 'text-4xl text-white font-semibold mt-4 mb-6 text-center'
const classNameP = 'text-white text-center text-[20px] leading-6'

const stepContent = [
  {
    id: 1,
    contentH2: 'Build your test',
    contentP: 'Unleash the power of our comprehensive system design and architecture assessment.',
    last: false
  },
  {
    id: 2,
    contentH2: 'Invite your candidate',
    contentP: 'Here your candidates undertake your tailored interview on our fully automated and engaging platform',
    last: false
  },
  {
    id: 3,
    contentH2: 'Hire the best',
    contentP: 'Build your dream team by hiring the best candidates with our unbiased, data-driven insights.',
    last: true
  },
]

const Component = () => {
  return (
    <div className="bg-[#0A265F] py-20">
      <div className="container">
        <TypographyH2 className='text-white text-center mb-16'>
          Solve The Hiring Process In <span className='text-[#49CCF9]'>3 Steps</span>
        </TypographyH2>

        <div className={styles.stepContainer}>
          {data.map((item, index) => (
            <React.Fragment key={item.number}>
              {index !== 0 && (
                <div className={styles.stepWrapper}>
                  <div className={styles.stepLine}>
                    <img src={arrowImage} alt="Arrow Image" className="w-24 h-auto" />
                  </div>
                </div>
              )}
              <div className={styles.stepCircleWrapper}>
                <div className={styles.stepCircle}>
                  <p className={styles.stepNumber}>{item.number}</p>
                </div>
              </div>
            </React.Fragment>
          ))}

          {
            stepContent.map(({ id, contentH2, contentP, last }) => (
              <Fragment key={id}>
                <div className={classNameWrapper}>
                  <div className={classNameInner}>
                    <h2 className={classNameH2}>{contentH2}</h2>
                    <p className={classNameP}>{contentP}</p>
                  </div>
                </div>

                {!last && <div />}

              </Fragment>

            ))
          }

        </div>
        <TypographyH2 className='text-center mt-12 mb-16 text-white'>
          Complete <span className='text-[#49CCF9]'>Insight</span> Into Your Candidates
        </TypographyH2>
        <div className="flex justify-center m-auto">
          <img src={Image} alt="Additional Image" className="mt-8 w-full h-auto" />
        </div>

      </div>

    </div>
  );
};

export default Component;
