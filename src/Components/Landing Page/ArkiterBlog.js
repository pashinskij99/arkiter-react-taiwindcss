import image1 from '../../Assets/slide1.jpg'
import image2 from '../../Assets/slide2.jpg'
import image3 from '../../Assets/slide3.jpg'
import ButtonPrimary from '../UI/Button'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from "swiper";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ReactComponent as ArrowRightIcon } from '../../Assets/icons/arrow-right.svg'
import clsx from 'clsx';

import 'swiper/css';

const ArkiterBlog = () => {
  const currentIndex = 0

  return (
    <section className="bg-[#0A3D62] pt-[7.6rem] pb-[6rem] overflow-hidden">
      <div className="container relative">
        <h2 className="text-[7.40354rem] leading-[1] text-white text-center font-semibold">
          Arkiter
          <span className="text-[#49CCF9]">Blog</span>
        </h2>

        <p className="text-white text-center -tracking-[.0059121rem] text-[3.2rem] leading-[1.1] font-[400] mt-[4rem]">Keep up to date with the Arkiter team and our journey to help <br /> change the way developers get hired </p>

        <div className='relative overflow-x-clip px-1'>
          <Swiper
            className='mt-[7.8rem] !overflow-visible'
            spaceBetween={30}
            onSlideChange={() => console.log('slide change')}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              769: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide><Item /></SwiperSlide>
            <SwiperSlide><Item /></SwiperSlide>
            <SwiperSlide><Item /></SwiperSlide>
            <SwiperSlide><Item /></SwiperSlide>
            <SwiperSlide><Item /></SwiperSlide>
            <CustomSwiperNavigation />
          </Swiper>
        </div>

        <button className='mt-[18rem] md:mt-[4rem] mx-auto md:ml-[4rem] text-[4.239rem] font-[600] text-white flex items-center'>
          View All <ArrowRightIcon className='relative top-[.2rem] h-[3.533rem] w-[3.092rem] ml-[1.683rem]' />
        </button>
      </div>
    </section>
  )
}

const CustomSwiperNavigation = () => {
  const swiper = useSwiper()

  return (
    <div className='absolute translate-y-[50%] justify-center w-full md:w-auto md:justify-normal md:top-0 md:right-0 flex translate-x-[0%] md:translate-y-[-150%] lg:translate-y-[-230%] lg:translate-x-[-70%]'>
      <button
        onClick={() => swiper.slidePrev()}
        className={clsx("w-[43.56px] md:w-[5.358rem] h-[43.56px] md:h-[5.358rem] flex items-center justify-center rounded-full bg-transparent text-[#FFFFFF54]", {
          // ['!bg-transparent !border-white border-[.347991rem] ']: currentIndex === 0
        })}
      >
        <FiArrowLeft size={'2rem'} className={clsx('text-[#FFFFFF54] scale-[2] md:scale-100', {
          // ['!text-[#FFFFFF54]']: currentIndex === 0
        })} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={clsx("ml-[1.583rem] w-[43.56px] md:w-[5.358rem] h-[43.56px] md:h-[5.358rem] flex items-center justify-center rounded-full bg-white text-[#0A3D62]", {
          // ['!bg-[#1D9EEB] !border-white border-[.347991rem] ']: currentIndex
        })}
      >
        <FiArrowRight size={'2rem'} color="#0A3D62" className={clsx('text-[#0A3D62] scale-[2] md:scale-100', {
          // ['!text-[#0A3D62]']: currentIndex
        })} />
      </button>
    </div>
  )
}

const Item = () => {
  return (
    <div className="text-white rounded-[2.04592rem] overflow-hidden" style={{ border: '.240697rem solid rgba(255, 255, 255, 0.43)' }}>
      <div className="md:max-h-[29.846rem] overflow-hidden" style={{borderBottom: '.240697rem solid rgba(255, 255, 255, 0.43)'}}>
        <img src={image1} className='w-full h-full object-contain' alt="slide image" />
      </div>
      <div className='pt-[2.768rem] pb-[4.058rem] px-[4.698rem]'>
        <h4 className='text-[22.99px] md:text-[3.725rem] font-[600] leading-[4.5rem] text-white'>How Arkiter will change the game?</h4>
        <div className='flex items-center gap-[1.337rem] mt-[1.436rem]'>
          <div
            className='bg-[#313131] leading-[1] flex items-center justify-center text-[5.97px] md:text-[1.1rem] font-[600] w-[57.78px] md:w-[9.36rem] h-[14.86px] md:h-[2.407rem]'
            style={{ border: '0.067rem solid #FFFFFF4F' }}
          >
            Technology
          </div>
          <div
            className='bg-[#49CCF940] leading-[1] flex items-center justify-center text-[5.97px] md:text-[1.1rem] font-[600] w-[9.36rem] h-[2.407rem]'
            style={{ border: '0.067rem solid #49CCF982' }}
          >
            Interviews
          </div>
          <div
            className='bg-[#0A3D62] leading-[1] flex items-center justify-center text-[5.97px] md:text-[1.1rem] font-[600] w-[9.36rem] h-[2.407rem]'
            style={{ border: '0.067rem solid #0F5282' }}
          >
            May, 2023
          </div>
        </div>

        <p className='font-[400] text-[11.04px] md:text-[1.788rem] mt-[1.444rem] leading-[2.3rem]'>
          At Arkiter, we uncovered a variety of interesting challenges and oft-overlooked choices when building our product....
        </p>
        <button className='text-[11.89px] md:text-[1.926rem] font-[600] mt-[2.123rem] flex items-center gap-[.888rem]'>
          Read More <ArrowRightIcon width={'1.605rem'} className='relative top-[.2rem]' />
        </button>
      </div>
    </div>
  )
}

export default ArkiterBlog