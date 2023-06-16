import React from 'react';
import IBM from '../../Assets/IBM.png';
import Goldman from '../../Assets/Goldman.png';
import JP from '../../Assets/JP.png';
import Imperial from '../../Assets/Imperial.png';
import SlidingToggle from '../toggle';
import imageSrc from '../../Assets/home.png';
import dashboardSrc from '../../Assets/section2dashboard.png';
import cartSrc from '../../Assets/section2cart.png';
import styles from '../../styles/Companys.module.scss'
import {ReactComponent as GoldmanIcon} from "../../Assets/icons/goldmansachs.svg";
import {ReactComponent as IBMIcon} from "../../Assets/icons/ibm.svg";
import {ReactComponent as JPIcon} from "../../Assets/icons/jp-morgan.svg";
import {ReactComponent as ImperialIcon} from "../../Assets/icons/imperialcollege.svg";

const company = [
    {key: 0, src: Goldman, alt: 'Image 1', component: GoldmanIcon},
    {key: 1, src: IBM, alt: 'Image 2', component: IBMIcon },
    {key: 2, src: JP, alt: 'Image 3', component: JPIcon},
    {key: 3, src: Imperial, alt: 'Image 4', component: ImperialIcon},
]

const ImageGrid = () => {
    return (
        <div className="z-10 pb-[36px] md:pb-8 relative">
            <div className='container bg-white flex flex-col items-center justify-end'>
                <div className='relative z-[1]'>
                    <img className='z-[1] relative translate-y-[0%] md:translate-y-[-5%]' src={dashboardSrc} height={'855.18rem'} width={'1299rem'} alt="dashboard" />
                    <img className='hidden md:block absolute top-0 right-0 z-[0] translate-y-[-50%] md:translate-y-[-50%] md:translate-x-[-0%] xl:translate-x-[-15%] xl:translate-y-[-45%] px-[30px] md:px-[0px] md:scale-[0.6] xl:scale-100' src={cartSrc} width={'477rem'} height={'496rem'} alt="cart" />
                    {/* <img className='w-full relative h-full object-contain' src={imageSrc} alt=""/> */}
                </div>

                <h1 className="text-[3.3rem] mt-[30px] mb-[48px] md:text-[2.3rem] text-arkiterTextDark uppercase font-normal md:mb-[3.462rem] relative">BUILT by global leaders From</h1>
                <ul className={styles.companyList}>
                    {company.map((props) => (
                        <li key={props.key} className='w-full flex items-center justify-center'>
                            <img {...props} className="w-auto h-28 md:h-20 lg:h-24 mx-2 mb-2"/>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ImageGrid;
