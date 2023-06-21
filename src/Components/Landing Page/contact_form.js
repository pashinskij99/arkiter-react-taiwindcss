import { useState } from 'react'
import axios from 'axios'
import { useController, useForm } from 'react-hook-form'

import { TypographyH2 } from '../UI/Typography'
import img1 from '../../Assets/contact/Brains.png'
import img2 from '../../Assets/contact/Rocket.png'
import img3 from '../../Assets/contact/StackOfCoins.png'
import { ReactComponent as CheckIcon } from '../../Assets/icons/checkmark.svg'
import Input from '../UI/Input'

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const initialState = {
  firstName: '',
  lastName: '',
  workEmail: '',
  companyName: '',
  referral: '',
}

const ContactForm = () => {
  const [isSended, setIsSended] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onChange', defaultValues: initialState })

  const { field: firstName } = useController({
    name: 'firstName',
    control: control,
    rules: {
      required: { value: true, message: '*This field is required' },
    },
  })

  const { field: lastName } = useController({
    name: 'lastName',
    control: control,
    rules: {
      required: { value: true, message: '*This field is required' },
    },
  })

  const { field: workEmail } = useController({
    name: 'workEmail',
    control: control,
    rules: {
      required: { value: true, message: '*This field is required' },
      pattern: {
        value: emailRegex,
        message: 'Invalid email address',
      },
    },
  })

  const { field: companyName } = useController({
    name: 'companyName',
    control: control,
  })

  const { field: referral } = useController({
    name: 'referral',
    control: control,
  })

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()
      formData.append('first_name', data.firstName)
      formData.append('last_name', data.lastName)
      formData.append('work_email', data.workEmail)
      formData.append('company_name', data.companyName)
      formData.append('message', data.referral)

      await axios.post('https://common-api.admiral-studios.com/Arkiter/index.php', formData)

      setIsSended(true)
    } catch (error) {}
  }

  return (
    <>
      <div className='bg-[#0A265F] flex items-center h-auto pt-[9.9rem] pb-[8.1rem] '>
        <div className='container grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-start'>
          <div className='items-center flex-col hidden md:flex'>
            <TypographyH2 className='text-[#FFF] '>
              Get Started With
              <br />
              <span className='relative'>
                <span className='relative z-[1]'>Arkiter</span>
                <span className="before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[15px] before:bg-[#49CCF9] before:z-[0] before:scale-x-110 before:w-full"></span>
              </span>
            </TypographyH2>
            <ul className='mt-[7.6rem] flex flex-col gap-[6.8rem] p-0'>
              <li className='flex items-center gap-[2.6rem]'>
                <img className='w-[5.5rem] h-[5.5rem] flex-shrink-0' src={img1} alt='' />
                <p className='text-[3.2rem] font-semibold text-white leading-[3.361rem]'>
                  Predict real-world performance <br /> with our AI tests
                </p>
              </li>
              <li className='flex items-center gap-[2.6rem]'>
                <img className='w-[5.5rem] h-[5.5rem] flex-shrink-0' src={img2} alt='' />
                <p className='text-[3.2rem] font-semibold text-white leading-[3.361rem]'>
                  Unlock powerful insights and <br /> analysis
                </p>
              </li>
              <li className='flex items-center gap-[2.6rem]'>
                <img className='w-[5.5rem] h-[5.5rem] flex-shrink-0' src={img3} alt='' />
                <p className='text-[3.2rem] font-semibold text-white leading-[3.361rem]'>
                  Discover your potential savings
                </p>
              </li>
            </ul>
          </div>

          {!isSended ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center pt-[4.196rem] rounded-[1.46375rem] bg-[#0A3D62] pb-[4.711rem] px-[7.026rem] h-[100rem]'>
              <h3 className='text-[4.121rem] font-bold leading-[4.74rem] text-white mb-[3.107rem]'>
                Sign Up
              </h3>
              <Input
                onChange={firstName.onChange}
                value={firstName.value}
                placeholder='First name*'
                error={errors?.firstName?.message}
              />
              <Input
                onChange={lastName.onChange}
                value={lastName.value}
                placeholder='Last name*'
                error={errors?.lastName?.message}
              />
              <Input
                onChange={workEmail.onChange}
                value={workEmail.value}
                placeholder='Work email*'
                error={errors?.workEmail?.message}
              />
              <Input
                onChange={companyName.onChange}
                value={companyName.value}
                placeholder='Company name'
                error={errors?.companyName?.message}
              />
              <textarea
                style={{ resize: 'none' }}
                rows={3}
                onChange={referral.onChange}
                value={referral.value}
                className='!outline-none text-[2.3873rem] border border-white/[0.10] py-[2.135rem] px-[3.133rem] mb-[2.238rem] w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white'
                placeholder='What brought you to Arkiter?'
              />

              <p className='text-white mt-[2.177rem]  text-[2.3873rem]'>
                For information about how Arkiter handles personal data, see our
                <br />
                <span>
                  <a className='text-[#13E5C0] underline underline-offset-2 cursor-pointer'>
                    Privacy Policy
                  </a>
                </span>
              </p>

              <button className='bg-[#49CCF9] w-full hover:text-[#0A265F] hover:bg-white mt-[2.9rem] text-[3.41043rem]  h-[8.57rem] font-semibold rounded-md text-[#0A265F] transition-colors ease-in-out duration-300'>
                Contact us
              </button>
            </form>
          ) : (
            <div className='flex flex-col items-center pt-[18.2rem] rounded-[1.46375rem] bg-[#0A3D62] pb-[4.711rem] px-[7.026rem] h-[64.6rem]'>
              <h3 className='text-[6.6rem] font-bold leading-[7.6rem] text-white'>
                Thank <span className='text-blue'>You!</span>
              </h3>

              <p className='text-[3.2rem] leading-[3.4rem] text-white font-semibold text-center mt-[1.9rem]'>
                A member of our team will be in touch shortly
              </p>

              <div className='w-[5.9rem] h-[5.9rem] bg-white rounded-full mt-[3rem] flex items-center justify-center'>
                <CheckIcon className='w-[3rem] h-[3rem]' />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactForm
