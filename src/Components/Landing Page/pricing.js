import React, { useState } from 'react'
import User from '../../Assets/User.png'
import Organisation from '../../Assets/organization.png'
import Rocket from '../../Assets/rocket.png'
import {ReactComponent as LightningIcon} from '../../Assets/icons/lightning.svg'
import {ReactComponent as CheckIcon} from '../../Assets/icons/check.svg'

import { ReactComponent as BasketIcon } from '../../Assets/icons/basket.svg'
import ButtonPrimary from '../UI/Button'
import clsx from 'clsx'

const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const currencyOptions = [
    { symbol: '£', value: 'GBP', border: true },
    { symbol: '$', value: 'USD', border: true },
    { symbol: '€', value: 'EUR', border: false },
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
      popular: false,
    },
    {
      title: 'Plus',
      logo: Rocket,
      plan: 'For Start ups',
      prices: [
        { currency: 'USD', monthly: 60.00, yearly: 149.99 },
        { currency: 'GBP', monthly: 12.99, yearly: 29.99 },
        { currency: 'EUR', monthly: 14.99, yearly: 39.99 },
      ],
      features: [
        '10 Roles a Year', '1500 Candidates a Year', 'Unlimited User Access', 'Standard Question Library', 'Architecture Interviews', 'Coding Interviews', 'Anti Cheat Engine', 'Advanced Analytics', 'Custom Reports', 'Insight Dashboard Access'],
      popular: true,
    },
    {
      title: 'Pro',
      logo: Organisation,
      plan: 'For Enterprise',
      prices: [
        { currency: 'USD', monthly: 80.00, yearly: 199.99 },
        { currency: 'GBP', monthly: 19.99, yearly: 49.99 },
        { currency: 'EUR', monthly: 24.99, yearly: 59.99 },
      ],
      features: ['10 Roles a Year', '12500 Candidates a Year', 'Unlimited User Access', 'Premium Question Library', 'Architecture Interviews', 'Coding Interviews', 'Anti Cheat Engine', 'Advanced Analytics', 'Custom Reports', 'Insight Dashboard Access', 'Custom Questions', 'Industry Benchmarking', 'ATS Integrations'],
      popular: false,
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
    <section>
      <div className="bg-[#0A265F] pt-[8.2rem]">
        <div className='container items-center flex flex-col'>

          <h2 className="text-[10.9565rem] leading-[11.7rem] text-center font-semibold mb-8 text-white -tracking-[.373913rem]">
            <span>Choose the plan</span>
            <br />
            <span className='flex items-center -tracking-[.273913rem]'>that works <BasketIcon className='mx-[3.4rem] translate-y-[.8rem]' /> for you.</span>
          </h2>

          <p className="text-[2.78261rem] mb-[6.265rem] -tracking-[-0.0178261rem] text-center text-white">You are one step away from a hassle-free hiring cycle.</p>

          <div className="flex flex-col items-center space-y-4 mb-[6.7rem]">
            <div className="flex items-center justify-between mb-[5rem] bg-[#F7F9FC] h-[8.396rem] p-[.699rem] rounded-[4.19648rem]">
              <span
                className={`whitespace-nowrap flex py-[1.4rem] px-[3.5rem] items-center justify-center cursor-pointer text-[2.44795rem] font-medium -tracking-[0.048959rem] ${isMonthly ? 'bg-white h-full px-4 rounded-[4.19648rem] text-[#1463FF]' : 'text-[#6C6F93]'}`}
                style={{ boxShadow: isMonthly && '0 3.14736rem 5.42046rem rgba(113, 116, 152, 0.1), 0 1.39883rem 2.83689rem rgba(113, 116, 152, 0.067), 0 1.39883rem 1.48035rem rgba(113, 116, 152, 0.05)' }}
                onClick={handleToggle}
              >
                Monthly
              </span>
              <span
                className={`whitespace-nowrap py-[1.4rem] px-[3.5rem] flex items-center justify-center cursor-pointer text-[2.44795rem] font-medium -tracking-[0.048959rem] ${!isMonthly ? 'bg-white h-full px-4 rounded-[4.19648rem] text-[#1463FF]' : 'text-[#6C6F93]'}`}
                onClick={handleToggle}
                style={{ boxShadow: !isMonthly && '0 3.14736rem 5.42046rem rgba(113, 116, 152, 0.1), 0 1.39883rem 2.83689rem rgba(113, 116, 152, 0.067), 0 1.39883rem 1.48035rem rgba(113, 116, 152, 0.05)' }}
              >
                Yearly (save 20%)
              </span>
            </div>

            <div className="flex gap-[1.8rem]">
              {currencyOptions.map((currency) => (
                <div className='flex gap-[1.8rem] items-center justify-between' key={currency.value}>
                  <div
                    className={`relative cursor-pointer text-[3.2rem] font-semibold leading-[1] text-white/[0.51] ${selectedCurrency === currency.value ? `text-white/[1] pb-1 before:border-b-[.3rem] before:border-[#FFF] before:content-[''] before:absolute before:bottom-[-0.1rem] before:w-full before:h-[.3rem]` : ''
                      }`}
                    onClick={() => handleCurrencyChange(currency.value)}
                  >
                    {currency.value}
                  </div>
                  {currency.border && <div className='h-[70%] w-[.3rem] bg-white' />}
                </div>

              ))}
            </div>
          </div>

          <div className="w-full z-10">
            <div
              className="grid gap-[2.1rem] items-end md:grid-cols-3 "
              >
              {pricingBoxes.map((box, index) => (
                <div key={index} className="rounded-2xl">
                  <div className={clsx('bg-[#1D9EEB] pt-[3.368rem] pb-[1.985rem] px-[4.8rem] rounded-t-[2.8rem] text-center', {
                    ['!pt-[1.885rem] bg-[#FCFCFC]']: box.popular
                  })}>
                    {box.popular && <span className='text-[#0A265F] text-[3.2rem] font-bold mb-[4.959rem] inline-block'>Most Popular</span>}

                    <div className='flex items-center lg:items-start flex-row gap-[2.9rem]'>
                      <div className={clsx('flex items-center justify-center bg-[#78D9FB] rounded-[1.2rem] h-[7.205rem] lg:h-[10.205rem] w-[7.9rem] lg:w-[10.9rem]', {
                        ['!bg-[#55B6F0]']: !box.popular
                      })}>
                        <img src={box.logo} className='scale-50 lg:scale-100' width={57} height={57} />
                      </div>
                      {
                        box.popular
                          ? (<div className='flex flex-col'>
                            <div className='text-[#0A265F] text-start font-bold text-[5.05714rem]'>{box.title}</div>
                            <div className='text-[#0A265F] font-semibold border-[.1rem] border-[#D4D4D421] rounded-[.5rem] text-[2.2rem] bg-[#78D9FBBA] px-[1.6rem]'>{box.plan}</div>
                          </div>)
                          : (<div className='flex flex-col'>
                            <div className='text-white text-start font-bold text-[5.05714rem]'>{box.title}</div>
                            <div className='text-white font-semibold border-[.1rem] border-[#D4D4D421] rounded-[.5rem] text-[2.2rem] bg-[#3AB4F0]/[0.25] px-[1.6rem]'>{box.plan}</div>
                          </div>)
                      }
                    </div>
                    {
                      box.popular
                        ? (
                          <div className="text-[6.01259rem] lg:text-[8.01259rem] mt-[1.571rem] lg:mt-[3.571rem] leading-[11.6rem] text-center font-bold text-[#0A3D62]">
                            {currencyOptions.find((currency) => currency.value === selectedCurrency)?.symbol}
                            {getPrice(selectedCurrency, box.title)}<span className='text-[4.05129rem] text-[#0A3D62]'>/month</span>
                          </div>
                        )
                        : (
                          <div className="text-[6.01259rem] lg:text-[8.01259rem] mt-[1.571rem] lg:mt-[3.571rem] leading-[11.6rem] text-center font-bold text-[#F1F1F1]">
                            {currencyOptions.find((currency) => currency.value === selectedCurrency)?.symbol}
                            {getPrice(selectedCurrency, box.title)}<span className='text-[4.05129rem] text-[#F1F1F1]'>/month</span>
                          </div>
                        )
                    }

                    <ButtonPrimary classNameButton={clsx('mt-[1.1rem] lg:mt-[4.1rem] !bg-[#0A3D62] hover:!bg-white mx-auto pl-[8rem] !pr-[3.086rem] !w-max', {
                      ['hover:!bg-[#1D9EEB] hover:!text-white']: box.popular
                    })}>
                      Buy now
                    </ButtonPrimary>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className='container items-center flex flex-col'>
          <div className="w-full">
            <div
              className="grid md:grid-cols-3 gap-[2.1rem] "
              >
              {pricingBoxes.map((box, index) => (
                <div className='bg-white px-[4.8rem] pb-[4.9rem] rounded-b-[2.8rem]' style={{ boxShadow: '0 1.1rem 2rem rgba(0, 0, 0, 0.25)'}}>
                <p className='text-[#0A265FA1] font-semibold text-[2.6rem] mb-[1.827rem] pt-[3.7rem]'>Key Features</p>
                <div className='rounded-md bg-white'>
                  <ul className="text-[#0E0B3D]">
                    {box.features.map((feature, index) => (
                      <li className='text-[3.3rem] mb-[2rem] flex items-center' key={index}>
                        {
                          index !== 1
                            ? <CheckIcon className='mr-[2.058rem]' width={'1.773rem'} height={'1.33rem'} />
                            : <LightningIcon className='mr-[1.965rem]' width={'2.09rem'} height={'2.874rem'} />
                        }
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PricingComponent;
