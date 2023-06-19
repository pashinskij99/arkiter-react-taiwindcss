import React from 'react';
import {MdArrowOutward} from "react-icons/md";
import clsx from "clsx";

const ButtonPrimary = ({classNameButton, classNameIcon, children}) => {
    return (
        <button className={clsx("bg-arkiterBlueLight-200 relative px-[5.1rem] text-[19.45px] md:text-[3.25204rem] text-arkiterWhite-100 w-full md:w-max xl:w-[29.1rem] whitespace-nowrap h-[48px] md:h-[8.1rem] leading-[1] rounded-md font-bold flex items-center justify-center hover:bg-arkiterWhite-100 hover:text-arkiterBlueLight-600 transition-colors ease-in-out duration-300", classNameButton)}>
            {children} <MdArrowOutward className={clsx("absolute right-[47.75px] md:static md:ml-4 w-[22.21px] h-[22.21px] md:h-[3.875rem] md:w-[3.875rem] shrink-0", classNameIcon)} />
        </button>
    );
};

export default ButtonPrimary;