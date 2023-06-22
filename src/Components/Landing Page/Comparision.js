import React from 'react'
import logo from '../../Assets/logo.png'
import clsx from 'clsx'
import { ReactComponent as ExitIcon } from '../../Assets/icons/exit.svg'
import { ReactComponent as CheckIcon } from '../../Assets/icons/check-table.svg'
import { ReactComponent as CheckDarkIcon } from '../../Assets/icons/check-table-darker.svg'
import { ReactComponent as TableIcon } from '../../Assets/table.svg'
import ButtonPrimary from '../UI/Button'

const ProductComparison = () => {
  const comparisonData = [
    {
      feature: 'Architecture Interviews',
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
      feature: 'Standardized Comparison Metrics',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Customizable Insight Dashboard',
      Others: false,
      Arkiter: true,
    },
    {
      feature: 'Coding Interviews (Algo/DS)',
      Others: true,
      Arkiter: true,
    },
    {
      feature: 'Front-end Interviews',
      Others: true,
      Arkiter: true,
    },
    {
      feature: 'Knowledge Interviews',
      Others: true,
      Arkiter: true,
    },
    {
      feature: 'Unlimited User Access',
      Others: true,
      Arkiter: true,
    },
    {
      feature: 'All standard interview features: anti-cheat, replay, etc.',
      Others: true,
      Arkiter: true,
    },
    // Add more features here
  ]

  return (
    <div id='why-us' className='w-full pt-[16.8rem] pb-[10.149rem]'>
      <div className='container'>
        <h2 className='text-[6.6rem] leading-[1] text-[#0A265F] text-center font-bold pb-12'>
          Why Choose Arkiter?
        </h2>
        <div className='overflow-x-auto mt-[4.5rem]'>
          <table className='w-full table-fixed'>
            <thead>
              <tr className=''>
                <th className='w-min'></th>
                <th className=' text-[#0A265F] text-[2.7rem] sm:text-[3.44982rem] font-[700] relative w-[15rem] sm:w-[23rem] lg:w-[auto]'>
                  <span className='absolute mx-auto w-full left-0 bottom-[5.016rem]'>Others</span>
                </th>
                <th className='w-[15rem] sm:w-[30.7rem] lg:w-[47.7rem] rounded-tl-[2.87485rem] rounded-tr-[2.87485rem] pt-[2.7rem] lg:pt-[4.7rem] bg-[#0A265F] justify-center text-white'>
                  <img
                    src={logo}
                    alt='Competitor B Logo'
                    width={'90.251rem'}
                    className='mx-auto scale-75 lg:scale-100'
                  />
                  <hr className='border-none h-[.02rem] bg-[#FCFCFC] mt-[2.612rem] lg:mt-[4.612rem]' />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td
                    className={clsx(
                      index % 2 === 0
                        ? '!py-[2.573rem] sm:!py-[3.573rem]'
                        : 'py-[3.638rem] sm:!py-[5.638rem]',
                      'pl-[3.1rem] text-[#0A265F] font-semibold md:text-lg lg:text-[3.91594rem] relative',
                    )}>
                    <div
                      className={clsx(
                        index % 2 === 0 ? 'bg-[#D9D9D9]/[0.44]' : 'bg-white',
                        'absolute top-0 left-0 w-full h-full z-0 rounded-tl-[1.1rem] rounded-bl-[1.1rem]',
                      )}></div>
                    <span className='z-10 relative whitespace-nowrap text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] font-semibold block sm:inline text-ellipsis overflow-hidden'>
                      {item.feature}
                    </span>
                  </td>
                  <td className='relative p-2 text-center text-2xl'>
                    <div
                      className={clsx(
                        index % 2 === 0 ? 'bg-[#D9D9D9]/[0.44]' : 'bg-white',
                        'absolute top-0 left-0 w-full h-full z-0 rounded-tr-[1.1rem] rounded-br-[1.1rem]',
                      )}></div>
                    {item.Others ? (
                      <CheckDarkIcon
                        width={'4.082rem'}
                        className='z-10 relative mx-auto'
                        height={'3.175rem'}
                      />
                    ) : (
                      <ExitIcon
                        width={'3.175rem'}
                        className='z-10 relative mx-auto'
                        height={'3.175rem'}
                      />
                    )}
                  </td>
                  <td
                    className={clsx(`p-2 w-[47.7rem] text-center text-2xl bg-[#0A265F]`, {
                      ['rounded-br-[2.87485rem] lg:rounded-br-[0] rounded-bl-[2.87485rem] lg:rounded-bl-[0]']:
                        index === comparisonData.length - 1,
                    })}>
                    {item.Arkiter ? (
                      <CheckIcon width={'4.082rem'} className='mx-auto' height={'3.175rem'} />
                    ) : (
                      <span className='text-[#D40D00]'></span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className='bg-white'>
                <td className='p-2'></td>
                <td className='p-2'></td>
                <td className='hidden lg:flex p-2 pb-[6.219rem] pt-[4.374rem] text-center rounded-bl-[2.87485rem] rounded-br-[2.87485rem] bg-[#0A265F] justify-center items-center'>
                  <ButtonPrimary classNameButton='!bg-white !text-arkiterBlueLight-700 hover:!text-white hover:!bg-[#49CCF9]'>
                    Sign up
                  </ButtonPrimary>
                  {/* <button className="bg-white text-[10px] md:text-base lg:text-base text-[#0A265F] w-full md:w-1/2 px-4 py-2 rounded-md font-bold flex flex-row items-center justify-center">
                    Sign up <MdArrowOutward className="ml-2" />
                  </button> */}
                </td>
              </tr>
            </tbody>
          </table>

          <ButtonPrimary
            classNameButton={
              'md:hidden !bg-[#0A3D62] w-[192.33px] hover:!bg-[#1D9EEB] hover:!text-white mx-auto mt-[23.33px]'
            }>
            Buy Now
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default ProductComparison
