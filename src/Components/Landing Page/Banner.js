import React, {useEffect, useState} from 'react';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Banner.module.scss'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { TypographyH2, TypographyP } from '../UI/Typography';
import {ReactComponent as GraphSvg} from "../../Assets/14.svg";
import clsx from 'clsx';
import {useInView} from "react-intersection-observer";

const Banner = () => {
    const [isDone, setIsDone] = useState(false)

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
    });

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
                        can <br className='hidden md:block' /> use it and the problem it solves for the target audience
                    </TypographyP>
                    <ButtonPrimary
                        classNameButton={'hidden md:flex'}
                    >Book Call</ButtonPrimary>
                </div>

                {/*  Section Code  */}
                <div ref={ref} className={styles.codeSectionWrapper}>
                    <div className={clsx('relative')}>
                        <div className={clsx(styles.codeWrapper, {
                            [styles.animateCode]: isDone,
                            // ['hidden']: !inView
                        })}>
                            <div className={styles.codeHeader}>
                                <div className={styles.tab1}>Question #1</div>
                                <div className={styles.tab2}></div>
                            </div>

                            <div className={styles.codeBody}>
                                {inView && <TypeTextComponent setIsDone={setIsDone} />}
                            </div>

                        </div>

                        <GraphSvg className={clsx('hidden md:block absolute top-0 left-0 h-full md:static w-full', {
                            [styles.animateGif]: isDone,
                            // ['hidden']: !inView
                        })}  alt="" />

                        <div>
                            <img
                                src="/ArrowAnimation1.gif"
                                className={clsx('md:absolute h-full w-full top-0 left-0 scale-[1.3] opacity-0 md:translate-x-[-20%]', {
                                    [styles.animateRealGif]: isDone,
                                    // ['hidden']: !inView
                                })}

                                alt="animate"
                            />
                        </div>

                    </div>

                    <ButtonPrimary
                        classNameButton={'block md:hidden mt-[56.91px]'}
                        classNameIcon={'!right-[30px]'}
                    >
                        Book Call
                    </ButtonPrimary>
                </div>
            </div>

        </div>
    );
};

const TypeTextComponent = ({setIsDone}) => {
    const [text, helper] = useTypewriter({
        words: ['Design a system to allow users to communicate via a text system.'],
        loop: 1,
        deleteSpeed: 0
    })

    useEffect(() => {
        if(helper.isDone) {
            setIsDone(helper.isDone)
        }
    }, [helper])

      return (
          <p className={styles.codeDescription}>
              <span className={styles.codeTitle}>Task #1<span>:</span></span>
              {text}
              <Cursor />
          </p>
      )
}

export default Banner;
