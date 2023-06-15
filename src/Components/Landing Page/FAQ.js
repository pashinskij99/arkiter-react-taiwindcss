import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {ReactComponent as PlusIcon} from '../../Assets/icons/plus.svg'
import {ReactComponent as MinusIcon} from '../../Assets/icons/minus.svg'
import clsx from 'clsx';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={clsx("mb-[32px] w-full", {
            ['border-b-[#0A265F] border-b-2']: !isOpen
        })}>
            <button
                className="flex justify-between items-center w-full pb-[32px] text-left focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="font-[600] text-[39.72px] text-[#0A265F]">{question}</span>
                <div className={clsx(`rounded-full mr-[60px] flex items-center justify-center w-[55.09px] h-[55.09px] ${isOpen ? 'bg-[#0A265F]' : 'bg-white'} ${isOpen ? 'text-white/[1]' : 'text-[#0A265F]'}`, {
                    ['border border-[#0A265F]']: !isOpen
                }) }>
                    {isOpen
                        ? <MinusIcon width={'17.89px'} height={'17.89px'} />
                        : <PlusIcon width={'17.89px'} height={'17.89px'}/>
                    }
                </div>
            </button>
            <div>
                {isOpen && <p className="text-[#0A265F] text-[33.1px] leading-[40px]">{answer}</p>}
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: 'What is Arkiter?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
        },
        {
            question: 'Who is this built for?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
        },
        {
            question: 'How many members can I add?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
        },
        {
            question: 'How many members can I add?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh et mauris fermentum maximus. Etiam sed dapibus magna. Proin et vehicula augue. Phasellus interdum dui sollicitudin sem blandit fringilla. Praesent dapibus id eros eget hendrerit. Ut sit amet magna vel ipsum dapibus volutpat. Fusce sit amet imperdiet mi. Phasellus vehicula',
        },
        // Add more FAQ items here
    ];

    return (
        <div className="pt-[42px] bg-[#FCFCFC]">
            <div className="container">
                <h2 className="text-[74.04px] text-center font-[700] text-[#0A265F]">FAQs</h2>
                <div className='flex flex-col justify-center items-center mt-[32px]'>
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
