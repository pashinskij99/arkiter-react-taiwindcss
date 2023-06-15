import React from 'react';
import logo from '../../Assets/logo.png';
import { MdArrowOutward } from 'react-icons/md';
import clsx from 'clsx';
import {ReactComponent as ExitIcon} from '../../Assets/icons/exit.svg'
import {ReactComponent as CheckIcon} from '../../Assets/icons/check-table.svg'
import {ReactComponent as CheckDarkIcon} from '../../Assets/icons/check-table-darker.svg'
import ButtonPrimary from '../UI/Button';

const ProductComparison = () => {
  const comparisonData = [
    {
      feature: 'Architecture Interviews',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Own analytics dashboard',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'AI Coding Interviews',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Product Development Simulation',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Smart Comparison Metrics',
      Others: true,
      Arkiter: true,
    },
    // Add more features here
  ];

  return (
    <div className="w-full pt-[168px] pb-[101.49px]">
      <div className="container">
        <h2 className="text-[66px] leading-[1] text-[#0A265F] text-center font-bold pb-12">Why Choose Arkiter?</h2>
        <div className="overflow-x-auto mt-[45px]">
          <table className="w-full table-fixed">
            <thead>
              <tr className=''>
                <th className="w-min"></th>
                <th className=" text-[#0A265F] text-[34.4982px] font-[700] relative">
                  <span className='absolute mx-auto w-full left-0 bottom-[50.16px] '>Others</span>
                </th>
                <th className="w-[527px] rounded-tl-[28.7485px] rounded-tr-[28.7485px]  pt-[47px] bg-[#0A265F] justify-center text-white">
                  <img src={logo} alt="Competitor B Logo" width={'145px'} height={'107.65px'} className="mx-auto" />
                  <hr className='border-none h-[1px] bg-[#FCFCFC] mt-[46.12px]' />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className={clsx(index % 2 === 0 ? '!py-[35.73px]' : '!py-[56.38px]', "pl-[31px] text-[#0A265F] font-semibold text-xs md:text-lg lg:text-[39.1594px] relative")}>
                    <div className={clsx(index % 2 === 0 ? 'bg-[#D9D9D9]/[0.44]' : 'bg-white', 'absolute top-0 left-0 w-full h-full z-0 rounded-tl-[11px] rounded-bl-[11px]')}></div>
                    <span className='z-10 relative whitespace-nowrap text-[39.1594px] font-semibold'>
                      {item.feature}
                    </span>
                  </td>
                  <td className="relative p-2 text-center text-2xl">
                    <div className={clsx(index % 2 === 0 ? 'bg-[#D9D9D9]/[0.44]' : 'bg-white', 'absolute top-0 left-0 w-full h-full z-0 rounded-tr-[11px] rounded-br-[11px]')}></div>
                    {item.Others ? <CheckDarkIcon width={'40.82px'} className='z-10 relative mx-auto' height={'31.75px'} /> : <ExitIcon width={'31.75px'} className='z-10 relative mx-auto' height={'31.75px'} />}
                  </td>
                  <td className={`p-2 w-[477px] text-center text-2xl bg-[#0A265F]`}>{item.Arkiter ? <CheckIcon width={'40.82px'} className='mx-auto' height={'31.75px'} /> : <span className="text-[#D40D00]"></span>}</td>
                </tr>
              ))}
              <tr className="bg-white">
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2 py-8 text-center bg-[#0A265F] rounded-bl-lg rounded-br-lg flex justify-center items-center">
                  <ButtonPrimary classNameButton='!bg-white !text-arkiterBlueLight-700 hover:!text-white hover:!bg-arkiterBlueLight-700'>
                    Sign up
                  </ButtonPrimary>
                  {/* <button className="bg-white text-[10px] md:text-base lg:text-base text-[#0A265F] w-full md:w-1/2 px-4 py-2 rounded-md font-bold flex flex-row items-center justify-center">
                    Sign up <MdArrowOutward className="ml-2" />
                  </button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ProductComparison;
