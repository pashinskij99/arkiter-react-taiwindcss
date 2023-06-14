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
      <div className="bg-[#0A265F] h-auto py-12">
        <p className="text-center text-white text-3xl mb-10">Speak to us</p>
        <div className="flex flex-col items-center">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="!outline-none border border-white/[0.10] py-4 mb-4 w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-white/[0.10] px-4 placeholder-white/[0.5] text-white"
            placeholder="First name*"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="!outline-none border border-white/[0.10] py-4 mb-4 w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-white/[0.10] px-4 placeholder-white/[0.5] text-white"
            placeholder="Last name*"
          />
          <input
            onChange={(e) => setWorkEmail(e.target.value)}
            value={workEmail}
            className="!outline-none border border-white/[0.10] py-4 mb-4 w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-white/[0.10] px-4 placeholder-white/[0.5] text-white"
            placeholder="Work email*"
          />
          <input
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            className="!outline-none border border-white/[0.10] py-4 mb-4 w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-white/[0.10] px-4 placeholder-white/[0.5] text-white"
            placeholder="Company name*"
          />
          <input
            onChange={(e) => setCompanySize(e.target.value)}
            value={companySize}
            className="!outline-none border border-white/[0.10] py-4 mb-4 w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-white/[0.10] px-4 placeholder-white/[0.5] text-white"
            placeholder="Company size*"
          />
          <input
            onChange={(e) => setReferral(e.target.value)}
            value={referral}
            className="!outline-none border border-white/[0.10] py-4 mb-4 w-3/4 md:w-1/2 lg:w-1/2 rounded-md bg-white/[0.10] px-4 placeholder-white/[0.5] text-white"
            placeholder="What brought you to arkiter?"
          />

          <p className="text-white mb-6 w-3/4 md:w-1/2 lg:w-1/2">
            For information about how Arkiter handles personal data, see our
            <br />
            <span>
              <a className="text-[#49CCF9] underline underline-offset-2 cursor-pointer">Privacy Policy</a>
            </span>
          </p>

          <button className="bg-[#49CCF9] w-3/4 md:w-1/2 lg:w-1/2 py-4 text-lg font-bold rounded-md text-[#0A265F]">
            Contact us
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactForm
