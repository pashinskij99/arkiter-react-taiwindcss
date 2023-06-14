import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Review from '../../Assets/Review.png';
import Company from '../../Assets/company.png';
import BackgroundImageMobile from '../../Assets/mobileLines.png';
import BackgroundImageDesktop from '../../Assets/desktopLines.png';

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
      className="flex justify-center py-12 bg-[#1D9EEB]"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-10 flex justify-center items-center">
              <img
                src={currentReview.imageUrl}
                alt="Review Image"
                className="object-cover w-3/4 md:w-full md:h-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-end">
              <p className="text-white font-semibold text-5xl mb-4 h-full flex items-center leading-[50px]">{currentReview.review}</p>
              <p className="text-white text-md mb-4 text-center md:text-start">{currentReview.companyName}</p>
              <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
                <img src={currentReview.companyLogo} alt="Company Logo" className="pb-10 w-1/4 mr-2" />
                <div className="">
                  <button
                    onClick={goToPreviousReview}
                    className="px-2 py-2 rounded-full bg-[#1D9EEB] border-white border-2 text-gray-700"
                    disabled={currentIndex === 0}
                  >
                    <FiArrowLeft size={20} className="text-white/[0.33]" />
                  </button>
                  <button
                    onClick={goToNextReview}
                    className="ml-4 px-2 py-2 rounded-full bg-white text-gray-700"
                    disabled={currentIndex === reviews.length - 1}
                  >
                    <FiArrowRight size={20} color="#1D9EEB" />
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
