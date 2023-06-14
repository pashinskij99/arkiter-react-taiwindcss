import React, { useState } from 'react';

const PricingToggle = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex rounded-full bg-gray-300 w-24 cursor-pointer ${
          isMonthly ? 'justify-start' : 'justify-end'
        }`}
        onClick={handleToggle}
      >
        <div className="relative">
          <div
            className={`absolute left-0 top-0 bottom-0 w-12 rounded-full bg-white transition-transform ${
              isMonthly ? 'transform translate-x-0' : 'transform translate-x-12'
            }`}
          ></div>
          <div
            className={`flex items-center justify-center font-medium py-1 px-3 rounded-full cursor-pointer ${
              isMonthly ? 'bg-white text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </div>
          <div
            className={`flex items-center justify-center font-medium py-1 px-3 rounded-full cursor-pointer ${
              isMonthly ? 'text-white' : 'bg-white text-gray-700'
            }`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingToggle;
