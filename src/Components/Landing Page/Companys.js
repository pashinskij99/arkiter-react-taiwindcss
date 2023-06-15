import React from 'react';
import IBM from '../../Assets/IBM.png';
import Goldman from '../../Assets/Goldman.png';
import JP from '../../Assets/JP.png';
import Imperial from '../../Assets/Imperial.png';
import SlidingToggle from '../toggle';
import imageSrc from '../../Assets/home.png';
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
        <div className="z-10 pb-8 relative">
            <div className='container max-h-[937px] bg-white flex flex-col items-center justify-end'>
                <div className='relative z-[1] max-h-[1056.18px]'>
                    <img className='w-full relative h-full object-contain' src={imageSrc} alt=""/>
                </div>

                <h1 className="text-[23px] text-arkiterTextDark uppercase font-normal mb-8 relative">BUILT by global leaders From</h1>
                <ul className={styles.companyList}>
                    {company.map((props) => (
                        <li key={props.key} className='w-full flex items-center justify-center'>
                            <img {...props} className="w-auto h-8 md:h-10 lg:h-16 mx-2 mb-2"/>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ImageGrid;
