import React, { useRef, useState } from 'react'
import { ReactComponent as PlusIcon } from '../../Assets/icons/plus.svg'
import { ReactComponent as MinusIcon } from '../../Assets/icons/minus.svg'
import clsx from 'clsx'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const contentEl = useRef(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={clsx('mb-[3.2rem] w-full', {
        ['border-b-[#0A265F] border-b-2']: !isOpen,
      })}>
      <button
        className='flex justify-between items-center w-full pb-[3.2rem] text-left focus:outline-none'
        onClick={toggleAccordion}>
        <span className='font-[600] text-[13.56px] md:text-[3.972rem] text-[#0A265F]'>
          {question}
        </span>
        <div
          className={clsx(
            `rounded-full mr-[3rem] md:mr-[6rem] flex items-center justify-center w-[5.509rem] h-[5.509rem] ${
              isOpen ? 'bg-[#0A265F]' : 'bg-white'
            } ${isOpen ? 'text-white/[1]' : 'text-[#0A265F]'}`,
            {
              ['border border-[#0A265F]']: !isOpen,
            },
          )}>
          {isOpen ? (
            <MinusIcon width={'1.789rem'} height={'1.789rem'} />
          ) : (
            <PlusIcon width={'1.789rem'} height={'1.789rem'} />
          )}
        </div>
      </button>

      <div
        ref={contentEl}
        style={
          isOpen
            ? { height: contentEl.current && contentEl.current.scrollHeight }
            : { height: '0px' }
        }
        className='duration-200 transition-all overflow-hidden'>
        <p className='text-[#0A265F] text-[11.3px] md:text-[3.31rem] leading-[4rem]'>{answer}</p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Arkiter?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
    },
    {
      question: 'Who is this built for?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
    },
    {
      question: 'How many members can I add?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
    },
    {
      question: 'How many members can I add?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
    },
    // Add more FAQ items here
  ]

  return (
    <div className='pt-[4.2rem] pb-[8.3rem] bg-[#FCFCFC]'>
      <div className='container'>
        <h2 className='text-[7.404rem] text-center font-[700] text-[#0A265F]'>FAQs</h2>
        <div className='flex flex-col justify-center items-center mt-[3.2rem]'>
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
