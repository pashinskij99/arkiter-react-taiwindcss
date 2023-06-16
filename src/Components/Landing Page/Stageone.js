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

const classNameWrapper = 'relative flex items-center justify-center p-4 h-[20rem]'
const classNameInner = 'flex flex-col items-center absolute w-[40.9rem] top-0'
const classNameH2 = 'text-[4rem] text-white font-semibold mb-[2.3rem] text-center'
const classNameP = 'text-white text-center text-[2rem] leading-6'

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
    <div className="bg-[#0A265F] pt-[14rem] pb-[11.5rem]">
      <div className="container">
        <TypographyH2 className='text-white text-center mb-[12rem]'>
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

        <TypographyH2 className='text-center mb-[11.8rem] text-white'>
          Complete <span className='text-[#49CCF9]'>Insight</span> Into Your Candidates
        </TypographyH2>
        <div className="flex justify-center m-auto">
          <img src={Image} alt="Additional Image" className="w-full max-h-[101.9rem]" />
        </div>

      </div>

    </div>
  );
};

export default Component;
