import { ReactComponent as LogoIcon } from '../../Assets/icons/logo.svg'
import { ReactComponent as Inst } from '../../Assets/icons/inst.svg'
import { ReactComponent as Twitter } from '../../Assets/icons/twitter.svg'
import { ReactComponent as Linkedin } from '../../Assets/icons/linkedin.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#0A3D62] pt-[7.5rem] pb-[3.256rem] text-white'>
      <footer className="">
        <div className="container">
          <Link to='/'>
            <LogoIcon className="h-16 md:h-[3.533rem] w-[26.8rem]" />
          </Link>
          <div
            className='grid grid-cols-[0.5fr_0.7fr_0.3fr] md:grid-cols-[1fr_1.3fr_1fr] max-w-[100%] md:max-w-[80rem] gap-y-20 ml-auto mt-20 md:mt-0'
          >
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] leading-[1] font-bold'>Demo</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>
                <a href="/#demo">Demo</a>
              </li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] leading-[1] font-bold whitespace-nowrap'>How it Works</li>
              <li className='text-[2.724rem] mt-[1.5rem]'><a href="/#steps">How it Works</a></li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] leading-[1] font-bold'>FAQs</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>
                <a href='/#faq'>FAQs</a>
              </li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>Pricing</li>
              <li className='text-[2.724rem] mt-[1.5rem]'>
                <a href="/#pricing">Pricing</a> </li>
            </ul>
            <ul className='flex flex-col'>
              <li className='text-[3.541rem] font-bold'>Reviews</li>
              <li className='text-[2.724rem] mt-[1.5rem]'><a href="/#reviews">Reviews</a></li>
            </ul>
            {/*<ul className='flex flex-col'>*/}
            {/*  <li className='text-[3.541rem] font-bold'>Blogs</li>*/}
            {/*  <li className='text-[2.724rem] mt-[1.5rem]'>*/}
            {/*    <a href="#blog">Blogs</a>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>

          <div className='mt-[11.8rem] flex flex-col md:flex-row justify-between items-start md:items-end gap-5 md:gap-0'>
            <p className='text-[2.4rem] leading-[1.2]'>Foundry Building 2 Smiths Square, 77 Fulham <br /> Palace Road, London, England, W6 8AF</p>

          </div>
        </div>
      </footer>
      <hr className='mt-[4.8rem] h-[.1rem] border-none mb-[3rem] bg-[#FFFFFF14]' />
      <div className='container gap-[15px] md:gap-0 flex flex-col-reverse mt-16 md:flex-row justify-between items-center'>
        <div className='flex items-center text-[#FFFFFFA6] text-[2.4rem] md:text-[2.4rem]'>
          <p className='mr-[2.4rem]'>2023 Arkiter LTD. All Rights Reserved </p>
          <Link to='/privacy-policy' className='mr-[2.4rem]'>Privacy policy</Link>
          <Link to='/cookie-policy' className='mr-[2.4rem]'>Cookies</Link>
        </div>

        <div className='flex items-center gap-[1rem]'>

          <Link to='https://www.linkedin.com/company/arkiter' target='_blank' className='mr-[6.4rem]'>
            <Linkedin width={'4.405rem'} height={'4.405rem'} />
          </Link>

          <Link to='https://www.instagram.com/arkiter_com/' target='_blank' className='mr-[6.4rem]'>
            <Inst width={'4.032rem'} height={'4.032rem'} />
          </Link>

          <Link to='https://twitter.com/arkiter_com' target='_blank' className='mr-[6.4rem]'>
            <Twitter width={'3.0237rem'} height={'2.672rem'} />
          </Link>

        </div>

      </div>
    </div>

  )
}

export default Footer