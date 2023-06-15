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
      <div className="bg-[#0A265F] pt-[82px]">
        <div className='container items-center flex flex-col'>

          <h2 className="text-[109.565px] leading-[117px] text-center font-semibold mb-8 text-white -tracking-[3.73913px]">
            <span>Choose the plan</span>
            <br />
            <span className='flex items-center -tracking-[2.73913px]'>that works <BasketIcon className='mx-[34px] translate-y-[8px]' /> for you.</span>
          </h2>

          <p className="text-[27.8261px] mb-[62.65px] -tracking-[-0.178261px] text-center text-white">You are one step away from a hassle-free hiring cycle.</p>

          <div className="flex flex-col items-center space-y-4 mb-[67px]">
            <div className="flex items-center justify-between mb-[50px] bg-[#F7F9FC] h-[83.96px] w-[415.09px] p-[6.99px] rounded-[41.9648px]">
              <span
                className={`whitespace-nowrap flex py-[14px] px-[35px] items-center justify-center cursor-pointer text-[24.4795px] font-medium -tracking-[0.48959px] ${isMonthly ? 'bg-white h-full px-4 rounded-[41.9648px] text-[#1463FF]' : 'text-[#6C6F93]'}`}
                style={{ boxShadow: isMonthly && '0px 31.4736px 54.2046px rgba(113, 116, 152, 0.1), 0px 13.9883px 28.3689px rgba(113, 116, 152, 0.067), 0px 13.9883px 14.8035px rgba(113, 116, 152, 0.05)' }}
                onClick={handleToggle}
              >
                Monthly
              </span>
              <span
                className={`whitespace-nowrap py-[14px] px-[35px] flex items-center justify-center cursor-pointer text-[24.4795px] font-medium -tracking-[0.48959px] ${!isMonthly ? 'bg-white h-full px-4 rounded-[41.9648px] text-[#1463FF]' : 'text-[#6C6F93]'}`}
                onClick={handleToggle}
                style={{ boxShadow: !isMonthly && '0px 31.4736px 54.2046px rgba(113, 116, 152, 0.1), 0px 13.9883px 28.3689px rgba(113, 116, 152, 0.067), 0px 13.9883px 14.8035px rgba(113, 116, 152, 0.05)' }}
              >
                Yearly (save 20%)
              </span>
            </div>

            <div className="flex gap-[18px]">
              {currencyOptions.map((currency) => (
                <div className='flex gap-[18px] items-center justify-between' key={currency.value}>
                  <div
                    className={`relative cursor-pointer text-[32px] font-semibold leading-[1] text-white/[0.51] ${selectedCurrency === currency.value ? `text-white/[1] pb-1 before:border-b-[3px] before:border-[#FFF] before:content-[''] before:absolute before:bottom-[-1px] before:w-full before:h-[3px]` : ''
                      }`}
                    onClick={() => handleCurrencyChange(currency.value)}
                  >
                    {currency.value}
                  </div>
                  {currency.border && <div className='h-[70%] w-[3px] bg-white' />}
                </div>

              ))}
            </div>
          </div>

          <div className="w-full">
            <div
              className="grid gap-[21px] items-end md:grid-cols-3 "
              >
              {pricingBoxes.map((box, index) => (
                <div key={index} className={clsx("rounded-2xl shadow-md")}>
                  <div className={clsx('bg-[#1D9EEB] pt-[33.68px] pb-[19.85px] px-[48px] rounded-t-[28px] text-center', {
                    ['!pt-[18.85px] bg-[#FCFCFC]']: box.popular
                  })}>
                    {box.popular && <span className='text-[#0A265F] text-[32px] font-bold mb-[49.59px] inline-block'>Most Popular</span>}

                    <div className='flex flex-row gap-[29px]'>
                      <div className={clsx(' flex items-center justify-center bg-[#78D9FB] h-[102.05px] rounded-[12px] w-[109px]', {
                        ['!bg-[#55B6F0]']: !box.popular
                      })}>
                        <img src={box.logo} width={57} height={57} />
                      </div>
                      {
                        box.popular
                          ? (<div className='flex flex-col'>
                            <div className='text-[#0A265F] text-start font-bold text-[50.5714px]'>{box.title}</div>
                            <div className='text-[#0A265F] font-semibold border-[1px] border-[#D4D4D421] rounded-[5px] text-[22px] bg-[#78D9FBBA] px-[16px]'>{box.plan}</div>
                          </div>)
                          : (<div className='flex flex-col'>
                            <div className='text-white text-start font-bold text-[50.5714px]'>{box.title}</div>
                            <div className='text-white font-semibold border-[1px] border-[#D4D4D421] rounded-[5px] text-[22px] bg-[#3AB4F0]/[0.25] px-[16px]'>{box.plan}</div>
                          </div>)
                      }

                    </div>
                    {
                      box.popular
                        ? (
                          <div className="text-[97.1259px] mt-[35.71px] leading-[116px] text-center font-bold text-[#0A3D62]">
                            {currencyOptions.find((currency) => currency.value === selectedCurrency)?.symbol}
                            {getPrice(selectedCurrency, box.title)}<span className='text-[40.5129px] text-[#0A3D62]'>/month</span>
                          </div>
                        )
                        : (
                          <div className="text-[97.1259px] mt-[35.71px] leading-[116px] text-center font-bold text-[#F1F1F1]">
                            {currencyOptions.find((currency) => currency.value === selectedCurrency)?.symbol}
                            {getPrice(selectedCurrency, box.title)}<span className='text-[40.5129px] text-[#F1F1F1]'>/month</span>
                          </div>
                        )
                    }

                    <ButtonPrimary classNameButton='mt-[41px] !bg-[#0A3D62] hover:!bg-white mx-auto pl-[80px] !pr-[30.86px] !w-max'>
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
              className="grid md:grid-cols-3 gap-[21px] "
              >
              {pricingBoxes.map((box, index) => (
                <div className='bg-white px-[48px] pb-[49px] rounded-b-[28px]' style={{ boxShadow: '0px 11px 20px rgba(0, 0, 0, 0.25)'}}>
                <p className='text-[#0A265FA1] font-semibold text-[26px] mb-[18.27px] pt-[37px]'>Key Features</p>
                <div className='rounded-md bg-white'>
                  <ul className="text-[#0E0B3D]">
                    {box.features.map((feature, index) => (
                      <li className='text-[33px] mb-[20px] flex items-center' key={index}>
                        {
                          index !== 1
                            ? <CheckIcon className='mr-[20.58px]' width={'17.73px'} height={'13.3px'} />
                            : <LightningIcon className='mr-[19.65px]' width={'20.9px'} height={'28.74px'} />
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
