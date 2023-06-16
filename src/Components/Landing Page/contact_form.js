import { useState } from "react"

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [referral, setReferral] = useState('')

  return (
    <>
      <div className="bg-[#0A265F] h-auto pt-[5.8rem] pb-[9.596rem]">
        <p className="text-center text-white text-[6.6rem] mb-10">Speak to us</p>
        <div className="flex flex-col items-center mt-[5.8rem] max-w-[138.0rem] mx-auto">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
            placeholder="First name*"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
            placeholder="Last name*"
          />
          <input
            onChange={(e) => setWorkEmail(e.target.value)}
            value={workEmail}
            className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
            placeholder="Work email*"
          />
          <input
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
            placeholder="Company name*"
          />
          <input
            onChange={(e) => setCompanySize(e.target.value)}
            value={companySize}
            className="!outline-none text-[2.3873rem] border border-white/[0.10] mb-[2.238rem] w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-[#FFFFFF0F] py-[2.135rem] px-[3.133rem] placeholder-white/[0.5] text-white"
            placeholder="Company size*"
          />
          <textarea
            style={{resize: 'none'}}
            rows={3}
            onChange={(e) => setReferral(e.target.value)}
            value={referral}
            className="!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white"
            placeholder="What brought you to arkiter?"
          />

          <p className="text-white mt-[2.177rem] w-3/4 md:w-1/2 lg:w-1/2 text-[2.3873rem]">
            For information about how Arkiter handles personal data, see our
            <br />
            <span>
              <a className="text-[#49CCF9] underline underline-offset-2 cursor-pointer">Privacy Policy</a>
            </span>
          </p>

          <button className="bg-[#1D9EEB] mt-[2.9rem] text-[3.41043rem] w-3/4 md:w-1/2 lg:w-1/2 py-4 font-semibold rounded-md text-white">
            Contact us
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactForm
