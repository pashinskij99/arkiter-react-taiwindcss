import { ReactComponent as LogoIcon } from '../../Assets/icons/logo.svg'
import { ReactComponent as Inst } from '../../Assets/icons/inst.svg'
import { ReactComponent as Twitter } from '../../Assets/icons/twitter.svg'
import { ReactComponent as Linkedin } from '../../Assets/icons/linkedin.svg'

const Footer = () => {
  return (
    <div className='bg-[#0A3D62] pt-[75px] pb-[32.56px] text-white'>
      <footer className="">
        <div className="container">
          <LogoIcon className="h-6 md:h-[35.33px] w-[268px]" />
          <div className='grid grid-cols-3 max-w-[700px] gap-y-20  ml-auto'>
            <ul className='flex flex-col'>
              <li className='text-[35.41px] font-bold'>Demo</li>
              <li className='text-[27.24px] mt-[15px]'>Demo</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[35.41px] font-bold whitespace-nowrap'>How it Works</li>
              <li className='text-[27.24px] mt-[15px]'>How it Works</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[35.41px] font-bold'>FAQs</li>
              <li className='text-[27.24px] mt-[15px]'>FAQs</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[35.41px] font-bold'>Pricing</li>
              <li className='text-[27.24px] mt-[15px]'>Pricing</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[35.41px] font-bold'>Reviews</li>
              <li className='text-[27.24px] mt-[15px]'>Reviews</li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[35.41px] font-bold'>Blogs</li>
              <li className='text-[27.24px] mt-[15px]'>Blogs</li>
            </ul>
          </div>

          <div className='mt-[118px] flex justify-between items-end'>
            <p className='text-[24px] leading-[1.2]'>Foundry Building 2 Smiths Square, 77 Fulham <br /> Palace Road, London, England, W6 8AF</p>
            <p className='mr-[170px] text-[22px]'>
              Built By:
              <a href="#">Arktik</a>
            </p>
          </div>


        </div>
      </footer>
      <hr className='mt-[48px] h-[1px] border-none mb-[30px] bg-[#FFFFFF14]' />
      <div className='container flex justify-between items-center'>
        <div className='flex items-center text-[#FFFFFFA6] text-[30px]'>
          <p className='mr-[47px]'>2023 Arkiter LTD. All Rights Reserved </p>
          <p className='mr-[64px]'>Privacy Policy</p>
          <p>Cookies</p>
        </div>

        <div className='flex items-center gap-[100px]'>
          <Inst />
          <Twitter />
          <Linkedin />
        </div>

      </div>
    </div>

  )
}

export default Footer