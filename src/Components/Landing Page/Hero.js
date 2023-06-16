import React from 'react';
import backgroundImage from '../../Assets/hex.png';
import imageSrc from '../../Assets/home.png';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Hero.module.scss'
import { TypographyH1 } from '../UI/Typography';

const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="w-full h-auto pt-[10.4rem] pb-[17rem] bg-[#0A265F] relative">
                <div className={styles.backWrapper1} />
                <div className={styles.backWrapper2} />
                <div className={styles.backWrapper3} />
                <div className={styles.backWrapper4} />
                <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-repeat translate-y-[-1rem]">
                    <img src={backgroundImage} alt="Background Grid" className="w-full h-full opacity-50"/>
                </div>
                <div className='container'>
                    <div className="flex flex-col max-w-[100rem] justify-center h-full z-[11] relative">
                        <TypographyH1 className='text-white mb-8'>Hire Top Developer Talent <br /> With Arkiter</TypographyH1>
                        {/* <h1 className="text-white text-5xl font-[500] leading-[60px] mb-4"></h1> */}
                        <p className="text-white max-w-[75.9rem] text-[2.8rem] mb-[4.3rem]">A brief summary of who this product is for, how they can use
                            it and the problem it solves for the target audience
                        </p>
                        <ButtonPrimary classNameButton={'!w-[32.2rem]'}>
                            Start Here
                        </ButtonPrimary>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
