import React, { useEffect, useState } from 'react';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Hero.module.scss'
import { TypographyH1 } from '../UI/Typography';
import { HeroLineAnimation } from '../Animations/HeroLineAnimation/HeroLineAnimation';

const Hero = () => {
    const [wrapperShadowWidth, setWrapperShadowWidth] = useState(0)

    const handleResize = () => {
        if(window.innerWidth > 1200) {
            setWrapperShadowWidth(((window.innerWidth - 1200) / 2) - 60)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div id='home' className="relative overflow-hidden h-[446px] md:h-auto">
            <div className="w-full h-full md:h-auto pt-[10.4rem] pb-[17rem] bg-[#0A265F] relative">
                <div className={styles.backWrapper1} />
                <div className={styles.backWrapper2} style={{width: wrapperShadowWidth + 'px'}} />
                <div className={styles.backWrapper3} style={{width: wrapperShadowWidth + 'px'}} />
                <div className={styles.backWrapper4} />
                <div className={styles.backWrapperMobile} />

                <div className={styles.lineHorizontal} >
                    <div className={styles.lineHorizontal1} />
                    <div className={styles.lineHorizontal2} />
                    <div className={styles.lineHorizontal3} />
                    <div className={styles.lineHorizontal4} />
                </div>
                <div className={styles.lineVertical} />

                <HeroLineAnimation className={'hidden !overflow-visible md:block absolute top-0 bottom-0 left-0 right-0 m-auto w-[160rem] translate-y-[-4.0rem]'} />

                <div className='container'>
                    <div className="flex flex-col w-full md:max-w-[100rem] justify-center h-full z-[11] relative">
                        <TypographyH1 className='text-white mb-16 md:mb-8'>Hire Top Tech <br />Talent with Arkiter</TypographyH1>
                        {/* <h1 className="text-white text-5xl font-[500] leading-[60px] mb-4"></h1> */}
                        <p className="md:block text-white text-[2.8rem] mb-[4.3rem]">
                            Go beyond basic coding assessments and evaluate candidates across a full suite of technical skills, including AI Coding and System Design
                        </p>
                        <ButtonPrimary classNameButton={'w-full !justify-center md:justify-between md:!w-[32.2rem] pl-[6.5rem] pr-[3.614rem]'}>
                            Book Call
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
