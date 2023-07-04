import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image1 from '../../Assets/slideImageCarAnimateSection1.jpg';
import Image2 from '../../Assets/slideImageCarAnimateSection2.jpg';
import Image3 from '../../Assets/slideImageCarAnimateSection3.jpg';
import arrowImage from '../../Assets/train.png';
import styles from '../../styles/Stageone.module.scss'
import { TypographyH2, TypographyH3 } from '../UI/Typography';
import clsx from 'clsx';
import useIntersection from '../../hooks/useIntersection';
import { useInView } from 'react-intersection-observer';

const data = [
  {
    number: 1,
    title: 'Build your test',
    description: 'Unleash the power of our comprehensive architecture and ai coding assessments.',
  },
  {
    number: 2,
    title: 'Candidate interviews',
    description: 'Here your candidates undertake your tailored interview on our fully automated and engaging platform.',
  },
  {
    number: 3,
    title: 'Hire the best',
    description: 'Build your dream team by hiring the best candidates with our unbiased, data-driven insights.',
  },
];

const classNameWrapper = 'relative flex items-center justify-center p-4 h-[20rem]'
const classNameInner = 'flex flex-col items-center absolute w-full xl:w-[46.9rem] top-0'
const classNameH2 = 'text-[4rem] whitespace-nowrap text-white font-semibold mb-[2.3rem] text-center'
const classNameP = 'text-white text-center text-[2rem] leading-[2.5rem]'

const stepContent = [
  {
    id: 1,
    contentH2: 'Build your test',
    contentP: 'Unleash the power of our advanced System Architecture, AI Coding, and Knowledge Assessments in a few easy clicks',
    last: false
  },
  {
    id: 2,
    contentH2: 'Interview your candidates',
    contentP: 'Here your candidates undertake your tailored interview on our user-centric platform with proctored assessments and anti-cheat technology',
    last: false,
  },
  {
    id: 3,
    contentH2: 'Hire the best',
    contentP: `Build your dream team by hiring the perfect candidate for your role with our comprehensive reports, unbiased benchmarking and data-driven insights`,
    last: true,
  },
]

const Component = () => {
  const [active, setActive] = useState(0)
  const [elemLeft1, setElemLeft1] = useState(0)
  const [elemLeft2, setElemLeft2] = useState(0)
  const [elemLeft3, setElemLeft3] = useState(0)
  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();

  const { ref: containerRef1, inView: inView1, } = useInView({
    threshold: 1,
    triggerOnce: true
  });
  const { ref: containerRef2, inView: inView2,  } = useInView({
    threshold: 1,
    triggerOnce: true
  });
  const { ref: containerRef3, inView: inView3,} = useInView({
    threshold: 1,
    triggerOnce: true
  });

  useEffect(() => {
    setElemLeft1(myRef1.current.getBoundingClientRect().left + 'px')
    setElemLeft2(myRef2.current.getBoundingClientRect().left + 'px')
    setElemLeft3(myRef3.current.getBoundingClientRect().left + 'px')
  }, [])

  const getLeftPosition = () => {
    switch (active) {
      case 0:
        return elemLeft1
      case 1:
        return elemLeft2
      case 2:
        return elemLeft3
      default:
        return '23%'
    }
  }

  const getImage = () => {
    switch (active) {
      case 0:
        return <img src={Image1} alt="Additional Image" className="w-full" />
      case 1:
        return <img src={Image2} alt="Additional Image" className="w-full" />
      case 2:
        return <img src={Image3} alt="Additional Image" className="w-full" />

      default:
        break;
    }
  }

  useEffect(() => {
    if(inView1) setActive(0)
    if(inView2) setActive(1)
    if(inView3) setActive(2)
  }, [inView3, inView2, inView1])

  return (
    <div className="bg-[#0A265F] pt-[14rem] relative pb-[12.5rem]">
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-start'>
        <div ref={containerRef1} className='h-[40vh]' />
        <div ref={containerRef2} className='h-[40vh]' />
        <div ref={containerRef3} className='h-[40vh]' />
      </div>

      <div className='container !static'>
        <TypographyH2 className='text-white text-center mb-[12rem]'>
          Streamline your hiring process in <span className='text-[#49CCF9]'>3 simple steps</span>
        </TypographyH2>
      </div>

      <div className='relative'>
        <div className="container !static">
          <div className={styles.stepContainer}>

            {/* IMPORTANT-START */}
            <div className='absolute top-[4rem] left-0 translate-x-[-40%] z-[0]' style={{
              left: getLeftPosition(),
              transition: 'all 1s ease',
              opacity: active === 2 ? '0' : '1'
            }}>
              <img src={arrowImage} alt="Arrow Image" className="w-[13.446rem] h-auto" />
            </div>
            <div className='absolute top-[5rem] left-0 w-full h-[3px] bg-transparent z-0' />

                <div onClick={() => setActive(0)} className={clsx(styles.stepCircleWrapper)}>
                  <div className={clsx(styles.stepCircle, styles.active, {
                    // [styles.active]:
                  })}>
                    <p className={styles.stepNumber}>1</p>
                  </div>
                </div>

                <div  className={clsx(styles.stepWrapper, 'relative')}>
                    <div className={styles.stepLine}>
                      <div ref={myRef1} className='w-1 h-1 mx-auto' />
                      {/* <img src={arrowImage} alt="Arrow Image" className="w-[13.446rem] h-auto" /> */}
                    </div>
                  </div>

                <div onClick={() => setActive(1)} className={clsx(styles.stepCircleWrapper)}>
                  <div className={clsx(styles.stepCircle, {
                    [styles.active]: active > 0
                  })}>
                    <p className={styles.stepNumber}>2</p>
                  </div>
                </div>

                <div className={clsx(styles.stepWrapper, 'relative')}>
                    <div className={styles.stepLine}>
                      <div ref={myRef2} className='w-1 h-1 mx-auto ' />
                      {/* <img src={arrowImage} alt="Arrow Image" className="w-[13.446rem] h-auto" /> */}
                    </div>
                  </div>

                <div onClick={() => setActive(2)} className={clsx(styles.stepCircleWrapper)}>
                  <div className={clsx(styles.stepCircle, {
                    [styles.active]: active === 2
                  })}>
                    <p ref={myRef3} className={styles.stepNumber}>3</p>
                  </div>
                </div>
            {/* IMPORTANT-END */}

            {
              stepContent.map(({ id, contentH2, contentP, last }) => (
                <Fragment key={id}>
                  <div className={classNameWrapper}>
                    <div className={classNameInner}>
                      <h2 className={classNameH2}>{contentH2}</h2>
                      {
                        last
                          ? <p className={classNameP}>Build your dream team by hiring the best <br className='hidden xl:block' /> candidates with our unbiased, data-driven <br className='hidden xl:block' /> insights.</p>
                          : <p className={classNameP}>{contentP}</p>
                      }

                    </div>
                  </div>

                  {!last && <div />}

                </Fragment>

              ))
            }

          </div>

          <StepMobile />

          <TypographyH2 className='text-center mb-[11.8rem] text-white'>
            Complete <span className='text-[#49CCF9]'>Insight</span> Into Your Candidates
          </TypographyH2>
          <div className="flex justify-center m-auto max-w-[1000px] ">
            {getImage()}
          </div>

        </div>
      </div>


    </div >
  );
};

const StepMobile = () => {
  return (
    <div className='grid md:hidden gap-[20px] justify-items-center grid-cols-1 mb-[73px]'>
      <div className={styles.stepCircleWrapper}>
        <div className={styles.stepCircle}>
          <p className={styles.stepNumber}>1</p>
        </div>
        <div className={'mt-[5px]'}>
          <div className='text-center text-white'>
            <h2 className='text-[24px] font-[600] leading-[1]'>Build your test</h2>
            <p className='text-[12px] font-[400] mt-[10px] leading-[14.22px]'>Unleash the power of our comprehensive <br /> system design and architecture assessment.</p>
          </div>
        </div>
      </div>

      <div className='h-[100px] w-[0.3rem]' style={{ background: 'linear-gradient(133deg, rgba(255, 255, 255, 0) 0.87%, rgba(255, 255, 255, 0.195139) 51.4%, rgba(255, 255, 255, 0) 102.01%)' }} />

      <div className={styles.stepCircleWrapper}>
        <div className={styles.stepCircle}>
          <p className={styles.stepNumber}>2</p>
        </div>
        <div className={'mt-[5px]'}>
          <div className='text-center text-white'>
            <h2 className='text-[24px] font-[600] leading-[1]'>Invite your candidate</h2>
            <p className='text-[12px] font-[400] mt-[10px] leading-[14.22px]'>Here your candidates undertake your tailored <br /> interview on our fully automated and engaging platform</p>
          </div>
        </div>
      </div>

      <div className='h-[100px] w-[0.3rem]' style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0.87%, rgba(255, 255, 255, 0.195139) 51.4%, rgba(255, 255, 255, 0) 102.01%)' }} />

      <div className={styles.stepCircleWrapper}>
        <div className={styles.stepCircle}>
          <p className={styles.stepNumber}>3</p>
        </div>
        <div className={'mt-[5px]'}>
          <div className='text-center text-white'>
            <h2 className='text-[24px] font-[600] leading-[1]'>Hire the best</h2>
            <p className='text-[12px] font-[400] mt-[10px] leading-[14.22px]'>Build your dream team by hiring the best <br /> candidates with our unbiased, data-driven <br /> insights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component;
