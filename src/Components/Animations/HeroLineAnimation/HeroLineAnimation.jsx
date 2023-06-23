import clsx from 'clsx'
import styles from './HeroLineAnimation.module.scss'
import { useState } from 'react'

// export const HeroLineAnimation = ({className}) => {
//   const [animateElement, setAnimateElement] = useState(false)

//   const startAnimation = () => {
//     setInterval(() => {
//       setAnimateElement(prevState => !prevState)
//     }, 3000)


//   }

//   return (
//     <svg className={clsx(styles.heroLineAnimationWrapper, className)} width="1920" height="715" viewBox="0 0 1920 715" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <line x1="-31" y1="103" x2="1934" y2="103" stroke="#2F4777" strokeWidth="2" />
//       <line x1="-31" y1="210" x2="1934" y2="210" stroke="#2F4777" strokeWidth="2" />
//       <line x1="-31" y1="317" x2="1934" y2="317" stroke="#2F4777" strokeWidth="2" />
//       <g className={styles.animateLine} filter="url(#filter0_f_143_16875)">
//         <line x1="-29" y1="317" x2="1936" y2="317" stroke="url(#paint0_linear_143_16875)" strokeWidth="2" />
//       </g>
//       <g className={styles.animateLine} filter="url(#filter1_f_143_16875)">
//         <line x1="-29" y1="317" x2="1936" y2="317" stroke="url(#paint1_linear_143_16875)" strokeWidth="2" />
//       </g>
//       <g className={styles.animateLine} filter="url(#filter2_f_143_16875)">
//         <line x1="-29" y1="317" x2="1936" y2="317" stroke="url(#paint2_linear_143_16875)" strokeWidth="2" />
//       </g>
//       <line className={styles.animateLine} x1="-29" y1="317" x2="1936" y2="317" stroke="url(#paint3_linear_143_16875)" strokeWidth="2" />
//       <line x1="-29" y1="426" x2="1936" y2="426" stroke="#2F4777" strokeWidth="2" />
//       <line x1="-29" y1="535" x2="1936" y2="535" stroke="#2F4777" strokeWidth="2" />
//       <line x1="-29" y1="644" x2="1936" y2="644" stroke="#2F4777" strokeWidth="2" />
//       <line x1="100" y1="0.00140056" x2="99" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="214" y1="0.00140819" x2="213" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="328" y1="0.00140819" x2="327" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="442" y1="0.00140819" x2="441" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="556" y1="0.00140819" x2="555" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="670" y1="0.00140819" x2="669" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="784" y1="0.00140819" x2="783" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="898" y1="0.00140819" x2="897" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="1012" y1="0.00140819" x2="1011" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="1126" y1="0.00140819" x2="1125" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="1240" y1="0.00140819" x2="1239" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="1354" y1="0.00140819" x2="1353" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       {/* Important */}
//       <g className={styles.animateVertical} filter="url(#filter0_f_143_168751)">
//         <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint0_linear_143_168751)"  strokeWidth="2" />
//       </g>
//       <g className={styles.animateVertical} filter="url(#filter1_f_143_168751)">
//         <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint1_linear_143_168751)" strokeWidth="2" />
//       </g>
//       <g className={styles.animateVertical} filter="url(#filter2_f_143_168751)">
//         <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint2_linear_143_168751)" strokeWidth="2" />
//       </g>
//       <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line className={styles.animateVertical} x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint3_linear_143_168751)" strokeWidth="3" />

//       <g filter="url(#filter3_f_143_16875)">
//         <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint4_linear_143_16875)" strokeWidth="2" />
//       </g>
//       <g filter="url(#filter4_f_143_16875)">
//         <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint5_linear_143_16875)" strokeWidth="2" />
//       </g>
//       <g filter="url(#filter5_f_143_16875)">
//         <line x1="1468" y1="0.00140819" x2="1467" y2="714.001" stroke="url(#paint6_linear_143_16875)" strokeWidth="2" />
//       </g>

//       {/* Important */}
//       <line x1="1582" y1="0.00140819" x2="1581" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="1696" y1="0.00140819" x2="1695" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <line x1="1810" y1="0.00140819" x2="1809" y2="714.001" stroke="#2F4777" strokeWidth="2" />
//       <defs>
//         <filter id="filter0_f_143_168751" x="-38" y="307" width="1983" height="1983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
//         </filter>
//         <filter id="filter1_f_143_168751" x="-38" y="307" width="1983" height="1983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
//         </filter>
//         <filter id="filter2_f_143_168751" x="-38" y="307" width="1983" height="1983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
//         </filter>
//         <linearGradient id="paint0_linear_143_168751" x1="4.5" y1="1318" x2="1.00006" y2="118" gradientUnits="userSpaceOnUse">
//           <stop offset="0.242904" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="0.722784" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="paint1_linear_143_168751" x1="4.5" y1="1318" x2="1.00006" y2="118" gradientUnits="userSpaceOnUse">
//           <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="paint2_linear_143_168751" x1="4.5" y1="1318" x2="1.00006" y2="118" gradientUnits="userSpaceOnUse">
//           <stop offset="0.270308" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="0.703196" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="paint3_linear_143_168751" x1="4.5" y1="1318" x2="1.00006" y2="118" gradientUnits="userSpaceOnUse">
//           <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>

//         <filter id="filter0_f_143_16875" x="-38" y="307" width="1983" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
//         </filter>
//         <filter id="filter1_f_143_16875" x="-38" y="307" width="1983" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
//         </filter>
//         <filter id="filter2_f_143_16875" x="-38" y="307" width="1983" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//           <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
//         </filter>
//         <linearGradient id="paint0_linear_143_16875" x1="1914.5" y1="318" x2="-1.00006" y2="318" gradientUnits="userSpaceOnUse">
//           <stop offset="0.242904" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="0.722784" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="paint1_linear_143_16875" x1="1914.5" y1="318" x2="-1.00006" y2="318" gradientUnits="userSpaceOnUse">
//           <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="paint2_linear_143_16875" x1="1914.5" y1="318" x2="-1.00006" y2="318" gradientUnits="userSpaceOnUse">
//           <stop offset="0.270308" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="0.703196" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="paint3_linear_143_16875" x1="1914.5" y1="318" x2="-1.00006" y2="318" gradientUnits="userSpaceOnUse">
//           <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
//           <stop offset="0.45966" stopColor="#49CCF9" />
//           <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </svg>
//   )
// }


export const HeroLineAnimation = ({ className }) => {
  return (
    <svg className={clsx(styles.heroLineAnimationWrapper, className)} width="1920" height="912" viewBox="0 0 1920 912" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="-1131" y1="230" x2="11934" y2="230" stroke="#2F4777" strokeWidth="2" />
      <line x1="-1131" y1="337" x2="11934" y2="337" stroke="#2F4777" strokeWidth="2" />
      <g className={styles.animateLine} filter="url(#filter0_f_143_16875)">
        <line x1="-29" y1="444" x2="1936" y2="444" stroke="url(#paint0_linear_143_16875)" strokeWidth="2" />
      </g>
      <g className={styles.animateLine} filter="url(#filter1_f_143_16875)">
        <line x1="-29" y1="444" x2="1936" y2="444" stroke="url(#paint1_linear_143_16875)" strokeWidth="2" />
      </g>
      <g className={styles.animateLine} filter="url(#filter2_f_143_16875)">
        <line x1="-29" y1="444" x2="1936" y2="444" stroke="url(#paint2_linear_143_16875)" strokeWidth="2" />
      </g>
      <line x1="-1131" y1="444" x2="11936" y2="444" stroke="#2F4777" strokeWidth="2" />
      <line className={styles.animateLine} x1="-29" y1="444" x2="1936" y2="444" stroke="url(#paint3_linear_143_16875)" strokeWidth="2" />

      <line x1="-1131" y1="553" x2="11936" y2="553" stroke="#2F4777" strokeWidth="2" />
      <line x1="-1131" y1="662" x2="11936" y2="662" stroke="#2F4777" strokeWidth="2" />
      <line x1="-1131" y1="771" x2="11936" y2="771" stroke="#2F4777" strokeWidth="2" />
      <g className={styles.animateVertical} filter="url(#filter3_f_143_16875)">
        <line x1="1467" y1="-62.5086" x2="1467" y2="903" stroke="url(#paint4_linear_143_16875)" strokeWidth="2" />
      </g>
      <g className={styles.animateVertical} filter="url(#filter4_f_143_16875)">
        <line x1="1467" y1="-62.5086" x2="1467" y2="903" stroke="url(#paint5_linear_143_16875)" strokeWidth="2" />
      </g>
      <g className={styles.animateVertical} filter="url(#filter5_f_143_16875)">
        <line x1="1467" y1="-62.5086" x2="1467" y2="903" stroke="url(#paint6_linear_143_16875)" strokeWidth="2" />
      </g>
      <line x1="1467" y1="-63" x2="1467" y2="11685.822" stroke="#2F4777" strokeWidth="2" />
      <line className={styles.animateVertical} x1="1467" y1="-63" x2="1467" y2="685.822" stroke="url(#paint7_linear_143_16875)" strokeWidth="2" />

        <line x1="-10" y1="127.001" x2="-10" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
        <line x1="100" y1="127.001" x2="99" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="214" y1="127.001" x2="213" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="328" y1="127.001" x2="327" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="442" y1="127.001" x2="441" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="556" y1="127.001" x2="555" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="670" y1="127.001" x2="669" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="784" y1="127.001" x2="783" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="898" y1="127.001" x2="897" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="1012" y1="127.001" x2="1011" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="1126" y1="127.001" x2="1125" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="1240" y1="127.001" x2="1239" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="1354" y1="127.001" x2="1353" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      {/* <line x1="468" y1="127.001" x2="467" y2="841.001" stroke="#2F4777" strokeWidth="2" /> */}
      <line x1="1582" y1="127.001" x2="1581" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <line x1="1696" y1="127.001" x2="1695" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
        <line x1="1810" y1="127.001" x2="1809" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
        <line x1="1930" y1="127.001" x2="1930" y2="1841.001" stroke="#2F4777" strokeWidth="2" />
      <defs>
        <filter id="filter0_f_143_16875" x="-38" y="434" width="1983" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
        </filter>
        <filter id="filter1_f_143_16875" x="-38" y="434" width="1983" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
        </filter>
        <filter id="filter2_f_143_16875" x="-38" y="434" width="1983" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
        </filter>
        <filter id="filter3_f_143_16875" x="1457" y="-71.5086" width="20" height="983.509" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
        </filter>
        <filter id="filter4_f_143_16875" x="1457" y="-71.5086" width="20" height="983.509" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
        </filter>
        <filter id="filter5_f_143_16875" x="1457" y="-71.5086" width="20" height="983.509" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_143_16875" />
        </filter>
        <linearGradient id="paint0_linear_143_16875" x1="1914.5" y1="445" x2="-1.00006" y2="445" gradientUnits="userSpaceOnUse">
          <stop offset="0.242904" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="0.722784" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_143_16875" x1="1914.5" y1="445" x2="-1.00006" y2="445" gradientUnits="userSpaceOnUse">
          <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_143_16875" x1="1914.5" y1="445" x2="-1.00006" y2="445" gradientUnits="userSpaceOnUse">
          <stop offset="0.270308" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="0.703196" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_143_16875" x1="1914.5" y1="445" x2="-1.00006" y2="445" gradientUnits="userSpaceOnUse">
          <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_143_16875" x1="1466" y1="892.436" x2="1466" y2="-48.7508" gradientUnits="userSpaceOnUse">
          <stop offset="0.242904" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="0.722784" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear_143_16875" x1="1466" y1="892.436" x2="1466" y2="-48.7508" gradientUnits="userSpaceOnUse">
          <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint6_linear_143_16875" x1="1466" y1="892.436" x2="1466" y2="-48.7508" gradientUnits="userSpaceOnUse">
          <stop offset="0.270308" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="0.703196" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint7_linear_143_16875" x1="1466" y1="677.629" x2="1466" y2="-52.3298" gradientUnits="userSpaceOnUse">
          <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  )
}

export const HeroLineAnimationMobile = ({className}) => {
  return (
    <svg className={className} width="360" height="495" viewBox="0 0 360 495" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="-284.891" y1="76.1002" x2="403.813" y2="76.1002" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.891" y1="39.1002" x2="403.813" y2="39.1002" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.891" y1="113.602" x2="403.813" y2="113.602" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="189.307" x2="404.512" y2="189.307" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="227.51" x2="404.512" y2="227.51" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="265.713" x2="404.512" y2="265.712" stroke="#2F4777" strokeWidth="0.700971" />
      <g filter="url(#filter0_f_456_288)">
        <line x1="-284.188" y1="303.104" x2="404.516" y2="303.104" stroke="url(#paint0_linear_456_288)" strokeWidth="0.700971" />
      </g>
      <g filter="url(#filter1_f_456_288)">
        <line x1="-284.188" y1="303.104" x2="404.516" y2="303.104" stroke="url(#paint1_linear_456_288)" strokeWidth="0.700971" />
      </g>
      <g filter="url(#filter2_f_456_288)">
        <line x1="-284.188" y1="303.104" x2="404.516" y2="303.104" stroke="url(#paint2_linear_456_288)" strokeWidth="0.700971" />
      </g>
      <line x1="-284.188" y1="303.104" x2="404.516" y2="303.104" stroke="url(#paint3_linear_456_288)" strokeWidth="0.700971" />
      <line x1="0.752829" y1="40.0005" x2="0.402344" y2="290.247" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="40.7099" y1="0.000490875" x2="40.0012" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="80.663" y1="0.000490875" x2="79.9543" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="120.62" y1="0.000490875" x2="119.911" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="160.573" y1="0.000490875" x2="159.864" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="200.53" y1="0.000490875" x2="199.821" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="240.483" y1="0.000490875" x2="239.775" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="280.44" y1="0.000490875" x2="279.732" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="320.397" y1="0.000490875" x2="319.689" y2="506" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="360.35" y1="40.0005" x2="360" y2="290.247" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="304.65" x2="404.512" y2="304.65" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="344.65" x2="404.512" y2="344.65" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="384.65" x2="404.512" y2="384.65" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="424.65" x2="404.512" y2="424.65" stroke="#2F4777" strokeWidth="0.700971" />
      <line x1="-284.191" y1="464.65" x2="404.512" y2="464.65" stroke="#2F4777" strokeWidth="0.700971" />
      <defs>
        <filter id="filter0_f_456_288" x="-287.342" y="299.599" width="695.012" height="7.00969" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.57718" result="effect1_foregroundBlur_456_288" />
        </filter>
        <filter id="filter1_f_456_288" x="-287.342" y="299.599" width="695.012" height="7.00969" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.57718" result="effect1_foregroundBlur_456_288" />
        </filter>
        <filter id="filter2_f_456_288" x="-287.342" y="299.599" width="695.012" height="7.00969" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.57718" result="effect1_foregroundBlur_456_288" />
        </filter>
        <linearGradient id="paint0_linear_456_288" x1="396.981" y1="303.455" x2="-274.374" y2="303.455" gradientUnits="userSpaceOnUse">
          <stop offset="0.242904" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="0.722784" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_456_288" x1="396.981" y1="303.455" x2="-274.374" y2="303.455" gradientUnits="userSpaceOnUse">
          <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_456_288" x1="396.981" y1="303.455" x2="-274.374" y2="303.455" gradientUnits="userSpaceOnUse">
          <stop offset="0.270308" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="0.703196" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_456_288" x1="396.981" y1="303.455" x2="-274.374" y2="303.455" gradientUnits="userSpaceOnUse">
          <stop offset="0.0272892" stopColor="#49CCF9" stopOpacity="0" />
          <stop offset="0.45966" stopColor="#49CCF9" />
          <stop offset="1" stopColor="#49CCF9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  )
}

