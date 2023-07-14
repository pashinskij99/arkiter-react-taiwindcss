import React, { useEffect, useRef } from "react";
import IBM from "../../Assets/IBM.png";
import Goldman from "../../Assets/Goldman.png";
import MS from "../../Assets/MS.png";
import Imperial from "../../Assets/Imperial.png";
import styles from "../../styles/Companys.module.scss";
import { ReactComponent as GoldmanIcon } from "../../Assets/icons/goldmansachs.svg";
import { ReactComponent as IBMIcon } from "../../Assets/icons/ibm.svg";
import { ReactComponent as JPIcon } from "../../Assets/icons/ms.svg";
import { ReactComponent as ImperialIcon } from "../../Assets/icons/imperialcollege.svg";
import { ReactComponent as BrowserHeader } from "../../Assets/browser-header.svg";

const company = [
  { key: 0, src: Goldman, alt: "Image 1", component: GoldmanIcon },
  { key: 1, src: IBM, alt: "Image 2", component: IBMIcon },
  { key: 2, src: MS, alt: "Image 3", component: JPIcon },
  { key: 3, src: Imperial, alt: "Image 4", component: ImperialIcon },
];

const ImageGrid = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div id="demo" className="z-10 pb-[36px] md:pb-[3.2rem] relative">
      <div className="container bg-white flex flex-col items-center justify-end">
        <div className="relative z-[1]">
          {/* <img className='z-[1] relative translate-y-[0%] md:translate-y-[-5%]' src={dashboardSrc} height={'855.18rem'} width={'1299rem'} alt="dashboard" /> */}
          <div className="translate-y-[0%] md:translate-y-[-10%]">
            <BrowserHeader className="w-full h-full" />
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full rounded-b-[1.8rem] translate-y-[-2px] relative z-10"
              id="myVideo"
              style={{
                boxShadow: "0px 4px 43px 8px rgba(0, 0, 0, 0.15)",
              }}
            >
              <source src="/video.mp4" type="video/mp4" />
              <source src="/video.mov" type="video/mov" />
            </video>
          </div>

          {/* <img className='hidden md:block absolute top-0 right-0 z-[0] translate-y-[-50%] md:translate-y-[-50%] md:translate-x-[-0%] xl:translate-x-[-15%] xl:translate-y-[-48%] px-[30px] md:px-[0px] md:scale-[0.6] lg:scale-[0.8] xl:scale-100' src={cartSrc} width={'397.7rem'} height={'496rem'} alt="cart" /> */}
        </div>

        <h1 className="text-[3.3rem] mt-[30px] md:mt-[0rem] mb-[48px] md:text-[2.3rem] text-arkiterTextDark uppercase font-normal md:mb-[4.462rem] relative md:translate-y-[-20px] text-center">
          Developed by experts from top tier organizations
        </h1>
        <ul className={styles.companyList}>
          {company.map((props) => (
            <li key={props.key} className="flex items-center justify-center">
              <img {...props} className="h-28 md:h-20 lg:h-24" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageGrid;
