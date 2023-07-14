import React, {useState} from 'react';
import {MdArrowOutward} from "react-icons/md";
import clsx from "clsx";
import Modal from "../Modal";

const ButtonPrimary = ({classNameButton, classNameIcon, children, onClick}) => {
    const [open, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
        document.body.style.overflow = 'unset';
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className={clsx("bg-arkiterBlueLight-200 relative pl-[5.1rem] pr-[4.814rem] text-[19.45px] md:text-[3.252rem] text-arkiterWhite-100 w-full md:w-max xl:w-[29.1rem] whitespace-nowrap h-[48px] md:h-[8.1rem] leading-[1] rounded-md font-bold flex items-center justify-between hover:bg-arkiterWhite-100 hover:text-arkiterBlueLight-600 transition-colors ease-in-out duration-300", classNameButton)}>
                {/*{children} */}
                Book Call
                <MdArrowOutward className={clsx("absolute right-[47.75px] md:static md:ml-[3.112rem] w-[22.21px] h-[22.21px] md:h-[3.875rem] md:w-[3.875rem] shrink-0", classNameIcon)} />
            </button>

            <Modal handleClose={handleClose} isOpen={open}>
                <iframe src="https://meetings-eu1.hubspot.com/emily-atkinson?embed=true" className='w-full h-full' frameBorder="0"></iframe>
            </Modal>
        </>

    );
};

export default ButtonPrimary;