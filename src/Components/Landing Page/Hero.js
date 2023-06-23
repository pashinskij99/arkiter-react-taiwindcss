import React, { useEffect, useState } from 'react';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Hero.module.scss'
import { TypographyH1 } from '../UI/Typography';
import cartSrc from '../../Assets/section2cart.png';
import { HeroLineAnimation } from '../Animations/HeroLineAnimation/HeroLineAnimation';

const Hero = () => {
    const [wrapperShadowWidth, setWrapperShadowWidth] = useState(0)

    const handleResize = () => {
        if(window.innerWidth > 1200) {
            setWrapperShadowWidth(((window.innerWidth - 1200) / 2) - 30)
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
                        <TypographyH1 className='text-white mb-16 md:mb-8'>Interview Top Tech <br />Talents With Arkiter</TypographyH1>
                        {/* <h1 className="text-white text-5xl font-[500] leading-[60px] mb-4"></h1> */}
                        <p className="hidden md:block text-white text-[2.8rem] mb-[4.3rem]">
                            Evaluate candidates across various technical skills (incl. system design
                            <br /> and AI coding), going beyond just coding and knowledge questions.
                        </p>
                        <ButtonPrimary classNameButton={'w-full md:!w-[32.2rem]'}>
                            Book Call
                        </ButtonPrimary>
                    </div>
                </div>

                <img className='md:hidden absolute bottom-0 left-0 right-0 translate-y-[40%] h-[245.91px] w-[236.49px] mx-auto md:px-[0px]' src={cartSrc} alt="cart" />
            </div>
        </div>
    );
};

export default Hero;
