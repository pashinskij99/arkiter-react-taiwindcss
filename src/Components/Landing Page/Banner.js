import React from 'react';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Banner.module.scss'
import { Typewriter, Cursor } from "react-simple-typewriter";
import { ReactComponent as CodeImage } from "../../Assets/icons/code.svg";
import { TypographyH2, TypographyP } from '../UI/Typography';

const Banner = () => {
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.sectionContainer}>

                {/* Section Title */}
                <div className="w-full md:max-w-[80.7rem] text-white mr-auto">
                    <TypographyH2 className='mb-16 md:mb-[4.3rem] text-center md:text-left'>
                        Experience the next <br className='md:hidden' /> level of technology hiring
                    </TypographyH2>
                    <TypographyP className='mb-[10.2rem] text-center md:text-left leading-[18.56px] md:leading-[3.017rem]' >
                        A brief summary of who this product is for,<br className='md:hidden' /> how they
                        can <br className='hidden md:block' /> use it and the problem it solves for the <br className='md:hidden' /> target audience
                    </TypographyP>
                    <ButtonPrimary
                        classNameButton={'hidden md:flex'}
                        // classNameIcon={'!right-[10px]'}
                    >Start Here</ButtonPrimary>
                </div>

                {/*  Section Code  */}
                <div className={styles.codeSectionWrapper}>
                    <div className='relative'>
                        <div className={styles.codeWrapper}>
                            <div className={styles.codeHeader}>
                                <div className={styles.tab1}>Question #1</div>
                                <div className={styles.tab2}></div>
                            </div>

                            <div className={styles.codeBody}>
                                <p className={styles.codeDescription}>
                                    <span className={styles.codeTitle}>Task #1<span>:</span></span>
                                    <Typewriter
                                        words={['Design a system to allow users to communicate via a text system.']}
                                        typeSpeed={50}
                                        loop={true}
                                        deleteSpeed={0}
                                    />
                                    <Cursor />
                                </p>
                            </div>

                        </div>
                        <CodeImage className={styles.codeImageWrapper} />
                    </div>


                    <ButtonPrimary
                        classNameButton={'block md:hidden mt-[56.91px]'}
                        classNameIcon={'!right-[30px]'}
                    >
                        Start Here
                    </ButtonPrimary>
                </div>
            </div>

        </div>
    );
};

export default Banner;
