import React from 'react';
import {MdArrowOutward} from "react-icons/md";
import clsx from "clsx";

const ButtonPrimary = ({classNameButton, children}) => {
    return (
        <button className={clsx("bg-arkiterBlueLight-200 text-[20px] md:text-[22.5204px] xl:text-[32.5204px] text-arkiterWhite-100 w-full md:w-max px-[15px] xl:px-[65px] py-[8px] md:py-[13px] lg:py-[23px] rounded-md font-bold flex flex-row items-center justify-center hover:bg-arkiterWhite-100 hover:text-arkiterBlueLight-600 transition-colors ease-in-out duration-300", classNameButton)}>
            {children} <MdArrowOutward className="ml-2 md:ml-8" />
        </button>
    );
};

export default ButtonPrimary;