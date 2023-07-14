import React, { useEffect, useRef, useState } from 'react';
import Image1 from '../../Assets/slideImageCarAnimateSection1.png';
import Image2 from '../../Assets/slideImageCarAnimateSection2.png';
import Image3 from '../../Assets/slideImageCarAnimateSection3.png';
import { TypographyH2 } from '../UI/Typography';


const classNameH2 = 'text-[4rem] whitespace-nowrap text-white font-semibold mb-[2.3rem]'
const classNameP = 'text-white text-[2rem] leading-[2.5rem]'

const StageoneNew = () => {
  const [active, setActive] = useState(0)
  const [percent, setPercent] = useState(0)
  const [isInterval, setIsInterval] = useState(true)
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setPercent(prevState => {
        if(prevState === 100) return 0
        return prevState += 1
      })
    }, 100)

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  useEffect(() => {
    if(percent === 100) {
      setActive(prevState => {
        const nextState = prevState + 1

        if(prevState === 2) {
          return 0
        }

        return nextState
      })
      setPercent(0)
    }

  }, [percent])

  const getImage = () => {
    switch (active) {
      case 0:
        return Image1
      case 1:
        return Image3
      case 2:
        return Image2
      default:
        break;
    }
  }

const stepContent = [
  {
    id: 0,
    contentH2: 'Build your test',
    contentP: 'Unleash the power of our advanced System Architecture, AI Coding, and Knowledge Assessments in a few easy clicks',
    last: false,
    width: isInterval
      ? (active === 0 ? percent + '%' : '100%')
      : active === 0 ? '100%' : '0%'
  },
  {
    id: 1,
    contentH2: 'Interview your candidates',
    contentP: 'Here your candidates undertake your tailored interview on our user-centric platform with proctored assessments and anti-cheat technology',
    last: false,
    width: isInterval
      ? (active === 1 ? percent + '%' : active < 1 ? '0%' : '100%')
      : active === 1 ? '100%' : '0%'
  },
  {
    id: 2,
    contentH2: 'Hire the best',
    contentP: `Build your dream team by hiring the perfect candidate for your role with our comprehensive reports, unbiased benchmarking and data-driven insights`,
    last: true,
    width: isInterval
      ? (active === 2 ? percent + '%' : '0%')
      : active === 2 ? '100%' : '0%'
  },
]

  const handleClick = (index) => {
    setActive(index)
    clearInterval(interval.current)
    setIsInterval(false)
  }

  return (
    <div id='steps' className="bg-[#0A265F] pt-[8rem] relative pb-[8rem] h-[100vh]">
        <div className="container h-full flex flex-col">
          <TypographyH2 className='text-white text-center mb-[7rem]'>
            Streamline your hiring process in <span className='text-[#49CCF9]'>3 simple steps</span>
          </TypographyH2>

          <div className="relative flex-1 rounded-[1.5rem]">
            <img src={getImage()} className='absolute mx-auto top-0 left-0 right-0 rounded-[1.5rem] w-auto h-full object-contain' alt=""/>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 mt-[10rem] gap-[7.3rem] md:gap-[17.3rem] items-start'>
          {
              stepContent.map(({ id, contentH2, contentP, last, width }, index) => (
                <div key={id} className='flex flex-col h-full cursor-pointer' onClick={() => handleClick(index)}>
                  <div className='w-full h-[4px] relative'>

                    <div className='w-full h-full absolute top-0 left-0' style={{
                      background: '#6C6C6C9E'
                    }} />
                    <div className='h-full absolute top-0 left-0 z-10' style={{
                      background: 'linear-gradient(90deg, #49CCF9 100.99%, #475167 99.15%)',
                      width,
                      transition: 'all 0.3s'
                    }} />
                    <div className='h-full absolute top-0 left-0' style={{
                      width,
                      '-webkit-box-shadow': '0px 0px 7px 0px #49CCF9',
                      '-moz-box-shadow': '0px 0px 7px 0px #49CCF9',
                      'box-shadow': '0px 0px 7px 0px #49CCF9',
                      background: 'linear-gradient(90deg, #49CCF9 100.99%, #475167 99.15%)',
                      transition: 'all 0.3s'
                    }} />
                  </div>
                  <div className={'mt-[1rem]'}>
                    <h2 className={classNameH2}>{contentH2}</h2>
                    {
                      last
                        ? <p className={classNameP}>Build your dream team by hiring the best <br className='hidden xl:block' /> candidates with our unbiased, data-driven <br className='hidden xl:block' /> insights.</p>
                        : <p className={classNameP}>{contentP}</p>
                    }

                  </div>
                </div>
              ))
            }

          </div>
        </div>
    </div>
  )
}

export default StageoneNew;
