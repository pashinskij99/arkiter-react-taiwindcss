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
                <div className="max-w-[80.7rem] text-white mr-auto">
                    <TypographyH2 className='mb-10'>
                        Experience the next level of technology hiring
                    </TypographyH2>
                    {/* <h1 className="text-5xl text-[66px] font-bold mb-10">Experience the next level of technology hiring</h1> */}
                    <TypographyP className='mb-24' >
                        A brief summary of who this product is for, how they
                        can <br /> use it and the problem it solves for the target audience
                    </TypographyP>
                    {/* <p className="text-lg text-[400] leading-6 mb-20">A brief summary of who this product is for, how they
                        can <br /> use it and the problem it solves for the target audience</p> */}
                    <ButtonPrimary>Start Here</ButtonPrimary>
                </div>

                {/*  Section Code  */}
                <div className={styles.codeSectionWrapper}>
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
            </div>

        </div>
    );
};

export default Banner;
