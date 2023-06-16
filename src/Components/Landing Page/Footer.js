import { ReactComponent as LogoIcon } from '../../Assets/icons/logo.svg'
import { ReactComponent as Inst } from '../../Assets/icons/inst.svg'
import { ReactComponent as Twitter } from '../../Assets/icons/twitter.svg'
import { ReactComponent as Linkedin } from '../../Assets/icons/linkedin.svg'

const Footer = () => {
  return (
    <div className='bg-[#0A3D62] pt-[7.5rem] pb-[3.256rem] text-white'>
      <footer className="">
        <div className="container">
          <LogoIcon className="h-6 md:h-[3.533rem] w-[26.8rem]" />
          <div
            style={{gridTemplateColumns: '1fr 1.3fr 1fr'}}
            className='grid max-w-[80rem] gap-y-20 ml-auto'
          >
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>Demo</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>Demo</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold whitespace-nowrap'>How it Works</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>How it Works</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>FAQs</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>FAQs</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>Pricing</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>Pricing</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>Reviews</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>Reviews</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>Blogs</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>Blogs</li>
            </ul>
          </div>

          <div className='mt-[11.8rem] flex justify-between items-end'>
            <p className='text-[2.4rem] leading-[1.2]'>Foundry Building 2 Smiths Square, 77 Fulham <br /> Palace Road, London, England, W6 8AF</p>
            <p className='mr-[17rem] text-[2.2rem] text-[#FFFFFFA6]'>
              Built By:
              <a href="#" className='ml-1 underline'>Arktik</a>
            </p>
          </div>
        </div>
      </footer>
      <hr className='mt-[4.8rem] h-[.1rem] border-none mb-[3rem] bg-[#FFFFFF14]' />
      <div className='container flex justify-between items-center'>
        <div className='flex items-center text-[#FFFFFFA6] text-[3rem]'>
          <p className='mr-[4.7rem]'>2023 Arkiter LTD. All Rights Reserved </p>
          <p className='mr-[6.4rem]'>Privacy Policy</p>
          <p>Cookies</p>
        </div>

        <div className='flex items-center gap-[10rem]'>
          <Inst width={'4.032rem'} height={'4.032rem'} />
          <Twitter width={'3.037rem'} height={'2.672rem'} />
          <Linkedin width={'3.405rem'} height={'3.405rem'} />
        </div>

      </div>
    </div>

  )
}

export default Footer