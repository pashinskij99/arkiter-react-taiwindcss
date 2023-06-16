import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Review from '../../Assets/Review.png';
import Company from '../../Assets/company.png';
import BackgroundImageMobile from '../../Assets/mobileLines.png';
import BackgroundImageDesktop from '../../Assets/desktopLines.png';
import clsx from 'clsx';

const reviews = [
  {
    id: 1,
    imageUrl: Review,
    review: '“The biggest and the most awaited change in the boring interview process!”',
    companyName: 'Alakbar Ayyubov, Data Specialist',
    companyLogo: Company,
  },
  {
    id: 2,
    imageUrl: Review,
    review: '“Hello”',
    companyName: 'Artik Devlopment',
    companyLogo: Company,
  },
  // Add more reviews as needed
];

const reviewsMobile = [
  {
    id: 1,
    imageUrl: Review,
    review: '“The biggest and the most awaited change in the boring interview process!”',
    companyName: 'Alakbar Ayyubov, Data Specialist',
    companyLogo: Company,
  },
  {
    id: 2,
    imageUrl: Review,
    review: '“Hello”',
    companyName: 'Artik Devlopment',
    companyLogo: Company,
  },
  // Add more reviews as needed
];


const ReviewComponent = () => {
  const [currentReview, setCurrentReview] = useState(reviews[0]);
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
    }
  };

  const goToNextReview = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < reviews.length) {
      setCurrentReview(reviews[nextIndex]);
    }
  };

  return (
    <div
      className="flex justify-center py-[9.5rem] md:py-[11.5rem] bg-[#1D9EEB]"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container md:max-h-[54.1rem]">
        <div className="md:overflow-hidden h-full">
          <div className="flex flex-col h-full md:flex-row">
            <div className="w-[389.83px] mx-auto md:mx-0 h-[259.63px] md:w-1/3 mb-4 md:mb-0 md:mr-10 flex justify-center items-center">
              <img
                src={currentReview.imageUrl}
                alt="Review Image"
                className="object-contain h-full rounded-[4rem]"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-end">

              <p className="flex md:hidden text-white flex-col justify-center text-[3.21783rem] mb-[4.7rem] text-center md:text-start items-center">
                {reviewsMobile.companyName}
              </p>

              <p className="hidden md:flex text-white font-semibold text-[4.94383rem] h-full items-center leading-[5rem]">{currentReview.review}</p>
              <p className="hidden md:flex text-white text-[3.21783rem] mb-[4.7rem] text-center md:text-start items-center">
                <hr className='border-none w-[2.697rem] h-[.2rem] bg-white mr-[1.135rem]' />
                {currentReview.companyName}
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">

              <img src={currentReview.companyLogo} alt="Company Logo" className="hidden md:block w-1/4 mr-2" />

                <div className="flex items-center translate-x-[-50%]">
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
