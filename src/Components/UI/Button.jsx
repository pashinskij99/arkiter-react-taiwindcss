import React from 'react';
import {MdArrowOutward} from "react-icons/md";
import clsx from "clsx";

const ButtonPrimary = ({classNameButton, children}) => {
    return (
        <button className={clsx("bg-arkiterBlueLight-200 text-[20px] md:text-[22.5204px] xl:text-[32.5204px] text-arkiterWhite-100 w-full md:w-max xl:w-[291px] h-[81px] leading-[1] rounded-md font-bold flex items-center justify-center hover:bg-arkiterWhite-100 hover:text-arkiterBlueLight-600 transition-colors ease-in-out duration-300", classNameButton)}>
            {children} <MdArrowOutward className="ml-2 md:ml-4 h-[38.75px] w-[38.75px]" />
        </button>
    );
};

export default ButtonPrimary;