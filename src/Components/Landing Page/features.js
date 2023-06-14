import React, { useState } from 'react';
import ImageTwo from '../../Assets/Insight.png';
import ButtonPrimary from "../UI/Button";
import styles from '../../styles/Features.module.scss'
import CartLogo from '../../Assets/cartLogo.png'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import clsx from "clsx";
import { ReactComponent as Graphic } from "../../Assets/graphic_unlock_powerful.svg";
import { TypographyH2, TypographyH3, TypographyP } from '../UI/Typography';

const MyComponent = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const defaultProps = {
        percent: 60, // is require
        colorSlice: "#34B53A",
        colorCircle: "#E2FBD7",
        fontColor: "#000",
        fontSize: "1rem",
        fontWeight: 600,
        size: 65,
        stroke: 7,
        strokeBottom: 3,
        speed: 60,
        cut: 0,
        rotation: -90,
        fill: "#E2FBD7",
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        round: true,
        styles: {
            borderRadius: "50%",
        }
    };

    const circleArray = [
        { id: 0, props: { ...defaultProps}, name: 'Performance' },
        { id: 1, props: { ...defaultProps, colorCircle: '#DAD7FE', fill: "#DAD7FE", colorSlice: '#4339F2' }, name: 'Accuracy' },
        { id: 2, props: { ...defaultProps }, name: 'Speed' },
        { id: 3, props: { ...defaultProps }, name: 'Overall' },
    ]

    return (
        <div className="flex flex-col items-center py-14 text-white">
            <div className="container">

                <div className={clsx('p-14', styles.sectionInner) }>

                    <div className="w-full my-auto">
                        <TypographyH2 className='mb-6'>
                            Predict real-world <br /> performance with our AI tests
                        </TypographyH2>
                        <TypographyP className='mb-8'>
                            Unleash the power of our comprehensive system
                            design and architecture assessment. Our cutting-edge.
                        </TypographyP>
                        <ButtonPrimary
                            classNameButton='!bg-[#ffffff] hover:!bg-transparent hover:!text-[#FFFFFF] !text-arkiterBlueLight-600'>Start
                            Here
                        </ButtonPrimary>
                    </div>

                    {/*Cart*/}
                    <div className={styles.cartContainer}>
                        <div className={styles.cartWrapper}>

                            <CartBackground />

                            <div className={styles.cart}>
                                <div className={styles.cartHeader}>
                                    <div className={styles.logo}>
                                        <img
                                            src={CartLogo}
                                            width={65}
                                            height={65}
                                            alt="cart logo"
                                        />
                                    </div>

                                    <div className='w-[260px]'>
                                        <h4>Katherine Donalds</h4>
                                        <p>Full-Stack Developer</p>
                                        <div className={styles.progress}>
                                            <progress id="file" max="100" value="70" />
                                            <span>64%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cartBody}>
                                    <ul className='flex items-center justify-between w-full'>
                                        {circleArray.map(({ id, props, name }) => (
                                            <li key={id}>
                                                <span>{name}</span>
                                                <CircularProgressBar {...props} />
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Unlock and Discover section */}

                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-5 w-full ">

                    {/* Unlock section */}
                    <div className="bg-[#0A3D62] rounded-lg flex flex-col items-center p-16">
                        <TypographyH3 className={'mb-14 text-center'}>
                            Unlock powerful <br />
                            insights and analysis
                        </TypographyH3>
                        <TypographyP className='text-center mb-14'>
                            Arkiter allows you in-depth insights into the
                            skills of your potential candidates, making sure you hire the right people.
                        </TypographyP>
                        {/* <p className="text-center text-lg max-w-s mb-10"></p> */}
                        {/*<div className='bg-'>*/}
                        {/*    <Graphic />*/}
                        {/*</div>*/}
                        <img src={ImageTwo} alt="Image 2" className="object-contain w-full rounded-lg" />
                    </div>

                    {/* Discover section */}
                    <div className="bg-[#313131] rounded-lg flex flex-col items-center p-16">
                        <TypographyH3 className='text-center mb-16'>
                            Discover your
                            potential savings
                        </TypographyH3>
                        <TypographyP className='text-center mb-14 inline-block'>
                            See how much your business could save with the
                            calculator below or see how we’ve helped others <span className='underline'>here.</span>
                        </TypographyP>
                        <div className='border border-[#FFFFFF]/[0.33] w-[90%] px-12 py-6 rounded-lg'>
                            <div className='grid grid-cols-2 gap-6'>
                                {inputsNumber.map(({ id, type, label }) => (
                                    <div key={id} className="flex flex-col">
                                        <label className="text-[#FFFFFFBD] leading-5 h-10 flex items-center font-medium text-[20px]">{label}</label>
                                        <input type={type} className="w-full border-b-2 border-[#FFFFFF75] px-2 py-2 bg-transparent focus-within:outline-none font-medium text-[30px]" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col mt-6">
                                <label className="text-[#FFFFFFBD] leading-4 h-10 flex items-center font-medium text-[20px] mb-3">
                                    Applicants Per Role: <strong className='ml-4 font-medium text-[30px] text-white'>{sliderValue}</strong>
                                </label>
                                <div className={styles.rangeInputWrapper}>
                                    <input
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={sliderValue}
                                        onChange={handleSliderChange}
                                        className={styles.rangeInput}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 items-center justify-between mt-16">
                                <div className=" border-[#FCFCFC6B] border-2 bg-[#FFFFFF4A] rounded-lg p-4">
                                    <p className="text-white font-bold text-center text-[32px]">$133,400</p>
                                </div>
                                <div className=" border-[#FCFCFC6B] border-2 bg-[#FFFFFF4A] rounded-lg p-4">
                                    <p className="text-white font-bold text-center text-[32px]">667 Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

const inputsNumber = [
    { id: 0, type: 'text', label: 'Annual Tech Roles:' },
    { id: 1, type: 'text', label: 'Pre-Screened Candidates Per Role:' },
    { id: 2, type: 'text', label: 'Onsite Invites Per Role:' },
    { id: 3, type: 'text', label: 'Onsite Interview Count:' },
]

const CartBackground = () => {
    const circleArray = [
        { id: 0, className: clsx(styles.circle) },
        { id: 1, className: clsx(styles.circle, styles.border) },
        { id: 2, className: clsx(styles.circle, styles.border) },
        { id: 3, className: clsx(styles.circle, styles.borderLight) },
        { id: 4, className: clsx(styles.circle, styles.light) },
        { id: 5, className: clsx(styles.circle, styles.borderLight) },
        { id: 6, className: clsx(styles.circle, styles.border) },
        { id: 7, className: clsx(styles.circle, styles.border) },
        { id: 8, className: clsx(styles.circle) },
    ]

    return (
        <div className={styles.cartBackgroundContainer}>
            <div className={styles.line} />
            <div className={styles.circleContainer}>
                {circleArray.map(({ id, className }, i) =>
                    <div key={id} className={className} />
                )}
            </div>
        </div>
    )
}

export default MyComponent;
