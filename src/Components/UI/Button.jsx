import React from 'react';
import {MdArrowOutward} from "react-icons/md";
import clsx from "clsx";

const ButtonPrimary = ({classNameButton, children}) => {
    return (
        <button className={clsx("bg-arkiterBlueLight-200 text-[2rem] md:text-[2.25204rem] xl:text-[3.25204rem] text-arkiterWhite-100 w-full md:w-max xl:w-[29.1rem] h-[8.1rem] leading-[1] rounded-md font-bold flex items-center justify-center hover:bg-arkiterWhite-100 hover:text-arkiterBlueLight-600 transition-colors ease-in-out duration-300", classNameButton)}>
            {children} <MdArrowOutward className="ml-2 md:ml-4 h-[3.875rem] w-[3.875rem]" />
        </button>
    );
};

export default ButtonPrimary;