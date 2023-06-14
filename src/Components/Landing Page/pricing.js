import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import User from '../../../src/Assets/User.png'
const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const currencyOptions = [
    { symbol: '$', value: 'USD' },
    { symbol: '£', value: 'GBP' },
    { symbol: '€', value: 'EUR' },
  ];

  const pricingBoxes = [
    {
      title: 'One',
      logo: User,
      plan: 'For Individuals',
      prices: [
        { currency: 'USD', monthly: 40.00, yearly: 99.99 },
        { currency: 'GBP', monthly: 7.99, yearly: 19.99 },
        { currency: 'EUR', monthly: 8.99, yearly: 29.99 },
      ],
      features: ['2 Roles a Year', '100 Candidates a Year', 'Unlimited User Access', 'Basic Question Library', 'Architecture Interviews', 'Coding Interviews', 'Anti Cheat Engine'],
    },
    {
      title: 'Plus',
      logo: User,
      plan: 'For Start ups',
      prices: [
        { currency: 'USD', monthly: 60.00, yearly: 149.99 },
        { currency: 'GBP', monthly: 12.99, yearly: 29.99 },
        { currency: 'EUR', monthly: 14.99, yearly: 39.99 },
      ],
      features: ['10 Roles a Year', '1500 Candidates a Year', 'Unlimited User Access', 'Standard Question Library', 'Architecture Interviews', 'Coding Interviews', 'Anti Cheat Engine', 'Advanced Analytics', 'Custom Reports', 'Insight Dashboard Access'],
    },
    {
      title: 'Pro',
      logo: User,
      plan: 'For Enterprise',
      prices: [
        { currency: 'USD', monthly: 80.00, yearly: 199.99 },
        { currency: 'GBP', monthly: 19.99, yearly: 49.99 },
        { currency: 'EUR', monthly: 24.99, yearly: 59.99 },
      ],
      features: ['10 Roles a Year', '12500 Candidates a Year', 'Unlimited User Access', 'Premium Question Library', 'Architecture Interviews', 'Coding Interviews', 'Anti Cheat Engine', 'Advanced Analytics', 'Custom Reports', 'Insight Dashboard Access', 'Custom Questions', 'Industry Benchmarking', 'ATS Integrations'],
    },
  ];

  const getPrice = (currency, boxTitle) => {
    const box = pricingBoxes.find((item) => item.title === boxTitle);
    if (box) {
      const price = box.prices.find((item) => item.currency === currency);
      return isMonthly ? price.monthly : price.yearly;
    }
    return 0;
  };
  
  

  return (
    <div className="flex flex-col bg-[#0A265F] items-center py-8 px-4">
      <h2 className="text-6xl text-center font-bold mb-10 text-white">Choose the plan that works for you.</h2>
      <p className="text-lg mb-6 text-center text-white">You are one step away from a hassle-free hiring cycle.</p>

      <div className="flex flex-col items-center space-y-4 mb-6">
        <div className="flex items-center bg-[#F7F9FC] py-3 px-6 rounded-full">
          <span
            className={`cursor-pointer ${isMonthly ? 'bg-white py-2 px-4 rounded text-[#1463FF]' : 'text-[#6C6F93]'}`}
            onClick={handleToggle}
          >
            Monthly
          </span>
          <span
            className={`cursor-pointer ${!isMonthly ? 'bg-white py-2 px-4 rounded text-[#1463FF]' : 'text-[#6C6F93]'}`}
            onClick={handleToggle}
          >
            Yearly (save 20%)
          </span>
        </div>

        <div className="flex items-center pt-6 space-x-4">
          {currencyOptions.map((currency) => (
            <div
              key={currency.value}
              className={`cursor-pointer text-2xl text-white/[0.51] ${selectedCurrency === currency.value ? 'text-white/[1] underline font-semibold' : ''
                }`}
              onClick={() => handleCurrencyChange(currency.value)}
            >
              {currency.value}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-8 px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pricingBoxes.map((box, index) => (
            <div key={index} className="bg-[#ffffff] rounded-2xl shadow-md pb-6 ">
              <div className='bg-[#1D9EEB] p-6 rounded-t-2xl '>
              <div className='flex flex-row'>
                <div className='bg-[#55B6F0] h-12 w-12 rounded'>
                  <img src={User} className=''/>
                </div>
                <div className='flex flex-col pl-4'>
                  <div className='text-white font-bold text-3xl'>{box.title}</div>
                  <div className='text-white bg-[#3AB4F0]/[0.25] py-1 px-3'>{box.plan}</div>
                </div>
              </div>
              <div className="text-6xl py-6 text-center font-bold text-white">
              {currencyOptions.find((currency) => currency.value === selectedCurrency)?.symbol}
{getPrice(selectedCurrency, box.title)}<span className='text-lg'>/month</span>
              </div>
              <button className="bg-[#0A3D62] text-[10px] md:text-base lg:text-base text-white w-full px-4 py-2 rounded-md font-bold flex flex-row items-center justify-center">
                Buy Now <MdArrowOutward className="ml-2" />
              </button>
              </div>
            <div className='bg-white px-6'>
              <p className='text-[#0A265F]/[0.63] mb-4 mt-4'>Key Features</p>
              <div className='p-4  rounded-md bg-white'>
                <ul className="list-disc pl-4 text-[#0E0B3D]">
                  {box.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
