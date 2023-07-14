import React, { useState, useEffect } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Alex from '../../Assets/review-alakbar.png'
import Peter from '../../Assets/review-peter.png'
import AWS from '../../Assets/aws.svg'
import Mateusz from '../../Assets/review-mateusz.png'
import Aurora from '../../Assets/auroralogo.png'
import Palantir from '../../Assets/company.png'
import BackgroundImageMobile from '../../Assets/mobileLines.png'
import BackgroundImageDesktop from '../../Assets/desktopLines.png'
import clsx from 'clsx'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'

const reviews = [
  {
    id: 1,
    imageUrl: Peter,
    review:
      '“Arkiter transformed my software engineering interview experience with its comprehensive evaluation, system design focus, and real-world scenarios. The user-friendly platform allowed me to showcase my skills beyond traditional interviews, and the high-quality questions and detailed feedback reports have been invaluable for growth.”',
    companyName: 'Peter Si , Software Engineer',
    companyLogo: AWS,
  },
  {
    id: 2,
    imageUrl: Mateusz,
    review:
      '“I have found Arkiter to be the most comprehensive and easy to use tech hiring solution out there. It really streamlines the recruitment process”',
    companyName: 'Mateusz Wronski, Software Solutions Director',
    companyLogo: Aurora,
  },
  {
    id: 3,
    imageUrl: Alex,
    review: '“The biggest and the most awaited change in the boring interview process!”',
    companyName: 'Alakbar Ayyubov, Data Specialist',
    companyLogo: Palantir,
  }
  // Add more reviews as needed
]

const reviewsMobile = [
  {
    id: 1,
    imageUrl: Peter,
    review: '“Arkiter transformed my software engineering interview experience with its comprehensive evaluation, system design focus, and real-world scenarios. The user-friendly platform allowed me to showcase my skills beyond traditional interviews, and the high-quality questions and detailed feedback reports have been invaluable for growth.”',
    companyName: 'Peter Si',
    companyProfession: 'Software Engineer',
    companyLogo: AWS,
  },
  {
    id: 2,
    imageUrl: Mateusz,
    review: '“I have found Arkiter to be the most comprehensive and easy to use tech hiring solution out there. It really streamlines the recruitment process”',
    companyName: 'Mateusz Wronski',
    companyProfession: 'Software Solutions Director',
    companyLogo: Aurora,
  },
  {
    id: 3,
    imageUrl: Alex,
    review: '“The biggest and the most awaited change in the boring interview process!”',
    companyName: 'Alakbar Ayyubov',
    companyProfession: 'Data Specialist',
    companyLogo: Palantir,
  },
  // Add more reviews as needed
]

const ReviewComponent = () => {
  const [backgroundImage, setBackgroundImage] = useState('')
  const [isEnd, setIsEnd] = useState(false)
  const [isStart, setIsStart] = useState(true)

  const onChangeSlide = (start, end) => {
    setIsEnd(end)
    setIsStart(start)
  }

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window
      if (innerWidth < 768) {
        setBackgroundImage(BackgroundImageMobile)
      } else {
        setBackgroundImage(BackgroundImageDesktop)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
        id='reviews'
      className='flex justify-center pb-[15rem] py-[9.5rem] md:py-[11.9rem] bg-[#1D9EEB]'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className='container md:min-h-[54.1rem]'>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
          }}
          onSlideChange={({ isBeginning, isEnd }) => onChangeSlide(isBeginning, isEnd)}
          spaceBetween={55.36}
          loop
          className='!overflow-visible !overflow-x-clip relative h-full'>
          {reviews.map((currentReview, index) => (
            <SwiperSlide key={currentReview.id}>
              <div className='flex flex-col md:flex-row md:gap-[10.9rem]'>
                <div className='max-w-[389.83px] mx-auto md:mx-0 h-[259.63px] md:h-[54.1rem] mb-[12.23px] md:mb-0 md:mr-10 flex justify-center items-center'>
                  <img
                    src={currentReview.imageUrl}
                    alt='Review Image'
                    className='object-contain h-full rounded-[4rem]'
                  />
                </div>
                <div className='w-full md:w-2/3 flex flex-col justify-end gap-[2.4rem] md:gap-0'>
                  <p className='flex md:hidden text-white flex-col mb-[12px] justify-center text-[3.21783rem] text-center md:text-start items-center'>
                    {reviewsMobile[index].companyName}

                    <span className='text-[#FFFFFFB5]'>
                      {reviewsMobile[index].companyProfession}
                    </span>
                  </p>

                  <img
                    src={currentReview.companyLogo}
                    alt='Company Logo'
                    className='md:hidden mx-auto h-[40px]'
                  />

                  <p className='flex text-center md:hidden text-white font-semibold text-[3.615rem] items-center leading-[5rem]'>
                    {currentReview.review}
                  </p>

                  <p className='hidden md:flex text-white font-semibold pb-[5rem] text-[3.615rem] h-full items-center leading-[5rem]'>
                    {currentReview.review}
                  </p>
                  <p className='hidden md:flex text-white text-[3.21783rem] mb-[4.7rem] text-center md:text-start items-center'>
                    <hr className='border-none w-[2.697rem] h-[.2rem] bg-white mr-[1.135rem]' />
                    {currentReview.companyName}
                  </p>
                  <div className='flex flex-col md:flex-row h-[5.8rem] lg:flex-row items-center justify-between'>
                    <img
                      src={currentReview.companyLogo}
                      alt='Company Logo'
                      className='hidden md:block object-contain h-full mr-2'
                    />

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <CustomSwiperNavigation isStart={isStart} isEnd={isEnd} />

        </Swiper>
      </div>
    </div>
  )
}

export default ReviewComponent

const CustomSwiperNavigation = ({ isStart, isEnd }) => {
  const swiper = useSwiper()

  return (
    <>
      <div className='flex absolute bottom-0 z-10 w-full justify-center mx-auto md:hidden mt-6 items-center translate-x-[0%] translate-y-[100%] md:translate-x-[-50%]'>
        <button
          onClick={() => swiper.slidePrev()}
          className={clsx(
            'w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700',
            {
              '!bg-[#1D9EEB] !border-white border-[.347991rem] ': isStart,
            },
          )}
          disabled={isStart}>
          <FiArrowLeft
            size={15}
            className={clsx('text-[#1D9EEB]', {
              '!text-white/[0.33]': isStart,
            })}
          />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={clsx(
            'ml-[2.262rem] w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700',
            {
              '!bg-[#1D9EEB] !border-white border-[.347991rem] ': isEnd,
            },
          )}
          disabled={isEnd}>
          <FiArrowRight
            size={15}
            color='#1D9EEB'
            className={clsx('text-[#1D9EEB]', {
              '!text-white/[0.33]': isEnd,
            })}
          />
        </button>
      </div>

      <div className='hidden md:flex absolute bottom-0 right-0 z-10 items-center translate-x-[0%] md:translate-x-[-50%]'>
        <button
          onClick={() => swiper.slidePrev()}
          className={clsx(
            'w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700',
            {
              '!bg-[#1D9EEB] !border-white border-[.347991rem] ': isStart,
            },
          )}
          disabled={isStart}>
          <FiArrowLeft
            size={30}
            className={clsx('text-[#1D9EEB]', {
              '!text-white/[0.33]': isStart,
            })}
          />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={clsx(
            'ml-[2.262rem] w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700',
            {
              '!bg-[#1D9EEB] !border-white border-[.347991rem] ': isEnd,
            },
          )}
          disabled={isEnd}>
          <FiArrowRight
            size={30}
            color='#1D9EEB'
            className={clsx('text-[#1D9EEB]', {
              '!text-white/[0.33]': isEnd,
            })}
          />
        </button>
      </div>
    </>
  )
}
