import React, { useEffect, useRef, useState } from 'react';
// import backgroundImage from '../../Assets/hex.png';
import backgroundCleanImage from '../../Assets/HEXUP-clean2x.png';
import imageSrc from '../../Assets/home.png';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Hero.module.scss'
import { TypographyH1 } from '../UI/Typography';
import cartSrc from '../../Assets/section2cart.png';
import { HeroLineAnimation } from '../Animations/HeroLineAnimation/HeroLineAnimation';

const Hero = () => {
    const [wrapperShadowWidth, setWrapperShadowWidth] = useState(0)

    const handleResize = () => {
        if(window.innerWidth > 1200) {
            setWrapperShadowWidth((window.innerWidth - 1200) / 2)
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
        <div className="relative overflow-hidden h-[446px] md:h-auto">
            <div className="w-full h-full md:h-auto pt-[10.4rem] pb-[17rem] bg-[#0A265F] relative">
                <div className={styles.backWrapper1} />
                <div className={styles.backWrapper2} style={{width: wrapperShadowWidth + 'px'}} />
                <div className={styles.backWrapper3} style={{width: wrapperShadowWidth + 'px'}} />
                <div className={styles.backWrapper4} />
                <div className={styles.backWrapperMobile} />
                <HeroLineAnimation className={'hidden md:block absolute top-0 bottom-0 left-0 right-0 m-auto w-[180rem] translate-y-[-1.1rem]'} />
                {/* <div className="hidden md:block absolute top-0 bottom-0 left-0 w-full h-full bg-repeat translate-y-[-1.5rem]"> */}
                    {/* <img src={backgroundImage} alt="Background Grid" className="w-full h-full opacity-50 object-contain"/> */}
                    {/* <img src={backgroundCleanImage} alt="Background Grid" className="w-full h-full object-contain"/> */}
                {/* </div> */}
                <div className='container'>
                    <div className="flex flex-col w-full md:max-w-[100rem] justify-center h-full z-[11] relative">
                        <TypographyH1 className='text-white mb-16 md:mb-8'>Hire Top Developer <br className='md:hidden' /> Talent <br /> With Arkiter</TypographyH1>
                        {/* <h1 className="text-white text-5xl font-[500] leading-[60px] mb-4"></h1> */}
                        <p className="hidden md:block text-white text-[2.8rem] mb-[4.3rem]">
                            A brief summary of who this product is for, how they can use
                            it <br /> and the problem it solves for the target audience
                        </p>
                        <ButtonPrimary classNameButton={'w-full md:!w-[32.2rem]'}>
                            Start Here
                        </ButtonPrimary>
                    </div>
                </div>

                <img className='md:hidden absolute bottom-0 left-0 right-0 translate-y-[40%] h-[245.91px] w-[236.49px] mx-auto md:px-[0px]' src={cartSrc} alt="cart" />
            </div>
        </div>
    );
};

export default Hero;
