import image1 from '../../Assets/slide1.jpg'
import image2 from '../../Assets/slide2.jpg'
import image3 from '../../Assets/slide3.jpg'
import ButtonPrimary from '../UI/Button'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ReactComponent as ArrowRightIcon } from '../../Assets/icons/arrow-right.svg'
import clsx from 'clsx';

const ArkiterBlog = () => {
  const currentIndex = 0
  return (
    <section className="bg-[#0A3D62] pt-[76px] pb-[60px]">
      <div className="container relative">
        <h2 className="text-[74.0354px] leading-[1] text-white text-center font-semibold">
          Arkiter
          <span className="text-[#49CCF9]">Blog</span>
        </h2>

        <p className="text-white text-center -tracking-[.59121px] text-[32px] leading-[1] font-[400] mt-[40px]">Keep up to date with the Arkiter team and our journey to help <br /> change the way developers get hired </p>

        <div className='relative'>
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-[55.36px] mt-[78px]">
            <Item />
            <Item />
            <Item />
          </div>

          <div className='absolute top-0 right-0 flex translate-y-[-230%] translate-x-[-70%]'>
            <button
              className={clsx("ml-4 w-[53.58px] h-[53.58px] flex items-center justify-center rounded-full bg-transparent text-[#FFFFFF54]", {
                ['!bg-transparent !border-white border-[3.47991px] ']: currentIndex === 0
              })}
            >
              <FiArrowLeft size={30} className={clsx('text-[#FFFFFF54]', {
                ['!text-[#FFFFFF54]']: currentIndex === 0
              })} />
            </button>
            <button
              className={clsx("ml-4 w-[53.58px] h-[53.58px] flex items-center justify-center rounded-full bg-white text-[#0A3D62]", {
                ['!bg-[#1D9EEB] !border-white border-[3.47991px] ']: currentIndex
              })}
            >
              <FiArrowRight size={30} color="#0A3D62" className={clsx('text-[#0A3D62]', {
                ['!text-[#0A3D62]']: currentIndex
              })} />
            </button>
          </div>
        </div>

        <button className='mt-[40px] ml-[80px] text-[42.39px] font-[600] text-white flex items-center'>
          View All <ArrowRightIcon className='relative top-[2px] h-[35.33px] w-[30.92px] ml-[16.83px]' />
        </button>
      </div>
    </section>
  )
}

const Item = () => {
  return (
    <div className="text-white rounded-[20.4592px] overflow-hidden" style={{ border: '2.40697px solid rgba(255, 255, 255, 0.43)' }}>
      <div className="max-h-[298.46px] overflow-hidden">
        <img src={image1} className='w-full h-full object-contain' alt="slide image" />
      </div>
      <div className='pt-[27.68px] pb-[40.58px] px-[46.98px]'>
        <h4 className='text-[37.25px] font-[600] leading-[45px] text-white'>How Arkiter will change the game?</h4>
        <div className='flex items-center gap-[13.37px] mt-[14.36px]'>
          <div
            className='bg-[#313131] flex items-center justify-center text-[9.66px] font-[600] w-[93.6px] h-[24.07px]'
            style={{ border: '0.67px solid #FFFFFF4F' }}
          >
            Technology
          </div>
          <div
            className='bg-[#49CCF940] flex items-center justify-center text-[9.66px] font-[600] w-[93.6px] h-[24.07px]'
            style={{ border: '0.67px solid #49CCF982' }}
          >
            Interviews
          </div>
          <div
            className='bg-[#0A3D62] flex items-center justify-center text-[9.66px] font-[600] w-[93.6px] h-[24.07px]'
            style={{ border: '0.67px solid #0F5282' }}
          >
            May, 2023
          </div>
        </div>

        <p className='font-[400] text-[17.88px] mt-[14.44px] leading-[23px]'>
          At Arkiter, we uncovered a variety of interesting challenges and oft-overlooked choices when building our product....
        </p>
        <button className='text-[19.26px] font-[600] mt-[21.23px] flex items-center gap-[8.88px]'>
          Read More <ArrowRightIcon className='relative top-[2px]' />
        </button>
      </div>
    </div>
  )
}

export default ArkiterBlog