import { useState } from "react"
import { TypographyH2 } from "../UI/Typography"
import img1 from '../../Assets/contact/Brains.png'
import img2 from '../../Assets/contact/Rocket.png'
import img3 from '../../Assets/contact/StackOfCoins.png'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [referral, setReferral] = useState('')

  return (
    <>
      <div className="bg-[#0A265F] flex items-center h-auto pt-[9.9rem] pb-[8.1rem] ">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-start">
          <div className="items-center flex-col hidden md:flex">
            <TypographyH2 className='text-[#FFF] '>
              Get Started With
              <br />
              <span className="relative">
                <span className="relative z-[1]">Arkiter</span>
                <span className="before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[15px] before:bg-[#49CCF9] before:z-[0] before:scale-x-110 before:w-full"></span>
              </span>
            </TypographyH2>
            <ul className="mt-[7.6rem] flex flex-col gap-[6.8rem] p-0">
              <li className="flex items-center gap-[2.6rem]">
                <img className="w-[5.5rem] h-[5.5rem] flex-shrink-0" src={img1} alt="" />
                <p className="text-[3.2rem] font-semibold text-white leading-[3.361rem]">Predict real-world performance <br /> with our AI tests</p>
              </li>
              <li className="flex items-center gap-[2.6rem]">
                <img className="w-[5.5rem] h-[5.5rem] flex-shrink-0" src={img2} alt="" />
                <p className="text-[3.2rem] font-semibold text-white leading-[3.361rem]">Unlock powerful insights and <br /> analysis</p>
              </li>
              <li className="flex items-center gap-[2.6rem]">
                <img className="w-[5.5rem] h-[5.5rem] flex-shrink-0" src={img3} alt="" />
                <p className="text-[3.2rem] font-semibold text-white leading-[3.361rem]">Discover your potential savings</p>
              </li>
            </ul>
          </div>

          <form className="flex flex-col items-center pt-[4.196rem] rounded-[1.46375rem] bg-[#0A3D62] pb-[4.711rem] px-[7.026rem]">
            <h3 className="text-[4.121rem] font-bold leading-[4.74rem] text-white mb-[3.107rem]">Sign Up</h3>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
              placeholder="First name*"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
              placeholder="Last name*"
            />
            <input
              onChange={(e) => setWorkEmail(e.target.value)}
              value={workEmail}
              className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
              placeholder="Work email*"
            />
            <input
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
              className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
              placeholder="Company name"
            />
            <textarea
              style={{ resize: 'none' }}
              rows={3}
              onChange={(e) => setReferral(e.target.value)}
              value={referral}
              className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
              placeholder="What brought you to Arkiter?"
            />

            <p className="text-white mt-[2.177rem]  text-[2.3873rem]">
              For information about how Arkiter handles personal data, see our
              <br />
              <span>
                <a className="text-[#13E5C0] underline underline-offset-2 cursor-pointer">Privacy Policy</a>
              </span>
            </p>

            <button className="bg-[#49CCF9] w-full hover:text-[#0A265F] hover:bg-white mt-[2.9rem] text-[3.41043rem]  h-[8.57rem] font-semibold rounded-md text-[#0A265F] transition-colors ease-in-out duration-300">
              Contact us
            </button>
          </form>

        </div>

      </div>
    </>
  )
}

export default ContactForm
