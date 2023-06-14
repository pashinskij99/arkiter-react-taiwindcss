import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 border-b-[#0A265F] border-b-2 w-3/4">
            <button
                className="flex justify-between items-center w-full p-4  text-left focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="font-bold text-lg text-[#0A265F]">{question}</span>
                <div className={`rounded-full w-fit py-2 px-2 border border-[#0A265F] ${isOpen ? 'bg-[#0A265F]' : 'bg-white'} ${isOpen ? 'text-white/[1]' : 'text-[#0A265F]'}`}>
                    {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus />}
                </div>
            </button>
            <div>
                {isOpen && <p className="p-4 text-[#0A265F]">{answer}</p>}
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
        <div className="py-12 bg-[#FCFCFC]">
            <h2 className="text-4xl font-semibold mb-10 text-center text-[#0A265F]">FAQs</h2>
            <div className='flex flex-col justify-center items-center '>
                {faqData.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
