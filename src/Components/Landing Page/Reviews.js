import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Alex from '../../Assets/Alex.jpeg';
import Peter from '../../Assets/Peter2.jpeg';
import AWS from '../../Assets/aws.svg';
import Mateusz from '../../Assets/mateusz.webp';
import Aurora from '../../Assets/auroralogo.png';
import Palantir from '../../Assets/company.png';
import BackgroundImageMobile from '../../Assets/mobileLines.png';
import BackgroundImageDesktop from '../../Assets/desktopLines.png';
import {ReactComponent as SliderLogo} from '../../Assets/icons/sliderLogo.svg'
import {ReactComponent as SliderLogoMobile} from '../../Assets/icons/sliderLogoMobile.svg'
import clsx from 'clsx';

const reviews = [
  {
    id: 1,
    imageUrl: Alex,
    review: '“The biggest and the most awaited change in the boring interview process!”',
    companyName: 'Alakbar Ayyubov, Data Specialist',
    companyLogo: Palantir,
  },
  {
    id: 2,
    imageUrl: Peter,
    review: '“Arkiter transformed my software engineering interview experience with its comprehensive evaluation, system design focus, and real-world scenarios. The user-friendly platform allowed me to showcase my skills beyond traditional interviews, and the high-quality questions and detailed feedback reports have been invaluable for growth.”',
    companyName: 'Peter Si , Software Engineer',
    companyLogo: AWS,
  },
  {
    id: 3,
    imageUrl: Mateusz,
    review: '“I have found Arkiter to be the most comprehensive and easy to use tech hiring solution out there. It really streamlines the recruitment process”',
    companyName: 'Mateusz Wronski, Software Solutions Director',
    companyLogo: Aurora,
  }
  // Add more reviews as needed
];

const reviewsMobile = [
  {
    id: 1,
    imageUrl: Alex,
    review: '“The biggest and the most awaited change in the boring interview process!”',
    companyName: 'Alakbar Ayyubov',
    companyProfession: 'Data Specialist',
    companyLogo: Palantir,
  },
  {
    id: 2,
    imageUrl: Peter,
    review: '“Peter test”',
    companyName: 'Amazon Web Services',
    companyProfession: 'Software Engineer',
    companyLogo: AWS,
  },
  {
    id: 3,
    imageUrl: Mateusz,
    review: '“I have found Arkiter to be the most comprehensive and easy to use tech hiring solution out there. It really streamlines the recruitment process”',
    companyName: 'Aurora',
    companyProfession: 'Software Solutions Director',
    companyLogo: Aurora,
  }
  // Add more reviews as needed
];


const ReviewComponent = () => {
  const [currentReview, setCurrentReview] = useState(reviews[0]);
  const [currentReviewMobile, setCurrentReviewMobile] = useState(reviewsMobile[0]);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth < 768) {
        setBackgroundImage(BackgroundImageMobile);
      } else {
        setBackgroundImage(BackgroundImageDesktop);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const switchReview = (review) => {
    setCurrentReview(review);
  };

  const currentIndex = reviews.findIndex((review) => review.id === currentReview.id);

  const goToPreviousReview = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentReview(reviews[previousIndex]);
      setCurrentReviewMobile(reviewsMobile[previousIndex])
    }
  };

  const goToNextReview = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < reviews.length) {
      setCurrentReview(reviews[nextIndex]);
      setCurrentReviewMobile(reviewsMobile[nextIndex]);
    }
  };

  return (
    <div
      className="flex justify-center py-[9.5rem] md:py-[11.9rem] bg-[#1D9EEB]"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container md:min-h-[54.1rem]">
        <div className="md:overflow-hidden h-full">
          <div className="flex flex-col h-full md:flex-row md:gap-[10.9rem]">
            <div className="max-w-[389.83px] mx-auto md:mx-0 h-[259.63px] md:h-[54.1rem] mb-[12.23px] md:mb-0 md:mr-10 flex justify-center items-center">
              <img
                src={currentReview.imageUrl}
                alt="Review Image"
                className="object-contain h-full rounded-[4rem]"
              />
            </div>
            <div className="w-full md:w-2/3 h-full flex flex-col justify-end">

              <p className="flex md:hidden text-white flex-col mb-[12px] justify-center text-[3.21783rem] text-center md:text-start items-center">
                {currentReviewMobile.companyName}

                <span className='text-[#FFFFFFB5]'>
                  {currentReviewMobile.companyProfession}
                </span>
              </p>

              <SliderLogoMobile className='md:hidden mx-auto h-[85px]' />

              <p className="flex text-center md:hidden text-white font-semibold text-[4.94383rem] h-full items-center leading-[5rem]">{currentReviewMobile.review}</p>

              <p className="hidden md:flex text-white font-semibold text-[4.94383rem] h-full items-center leading-[5rem]">{currentReview.review}</p>
              <p className="hidden md:flex text-white text-[3.21783rem] mb-[4.7rem] text-center md:text-start items-center">
                <hr className='border-none w-[2.697rem] h-[.2rem] bg-white mr-[1.135rem]' />
                {currentReview.companyName}
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">

              <img src={currentReview.companyLogo} alt="Company Logo" className="hidden md:block w-1/4 mr-2" />

                <div className="flex md:hidden items-center translate-x-[0%] md:translate-x-[-50%]">
                  <button
                    onClick={goToPreviousReview}
                    className={clsx("w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700", {
                      ['!bg-[#1D9EEB] !border-white border-[.347991rem] ']: currentIndex === 0
                    })}
                    disabled={currentIndex === 0}
                  >
                    <FiArrowLeft size={15} className={clsx('text-[#1D9EEB]', {
                      ['!text-white/[0.33]']: currentIndex === 0
                    })}/>
                  </button>
                  <button
                    onClick={goToNextReview}
                    className={clsx("ml-[2.262rem] w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700", {
                      ['!bg-[#1D9EEB] !border-white border-[.347991rem] ']: currentIndex === reviews.length - 1
                    })}
                    disabled={currentIndex === reviews.length - 1}
                  >
                    <FiArrowRight size={15} color="#1D9EEB" className={clsx('text-[#1D9EEB]', {
                      ['!text-white/[0.33]']: currentIndex === reviews.length - 1
                    })} />
                  </button>
                </div>

                <div className="hidden md:flex items-center translate-x-[0%] md:translate-x-[-50%]">
                  <button
                    onClick={goToPreviousReview}
                    className={clsx("w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700", {
                      ['!bg-[#1D9EEB] !border-white border-[.347991rem] ']: currentIndex === 0
                    })}
                    disabled={currentIndex === 0}
                  >
                    <FiArrowLeft size={30} className={clsx('text-[#1D9EEB]', {
                      ['!text-white/[0.33]']: currentIndex === 0
                    })}/>
                  </button>
                  <button
                    onClick={goToNextReview}
                    className={clsx("ml-[2.262rem] w-[7.656rem] h-[7.656rem] flex items-center justify-center rounded-full bg-white text-gray-700", {
                      ['!bg-[#1D9EEB] !border-white border-[.347991rem] ']: currentIndex === reviews.length - 1
                    })}
                    disabled={currentIndex === reviews.length - 1}
                  >
                    <FiArrowRight size={30} color="#1D9EEB" className={clsx('text-[#1D9EEB]', {
                      ['!text-white/[0.33]']: currentIndex === reviews.length - 1
                    })} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewComponent;
