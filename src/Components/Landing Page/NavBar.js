import React, { useState } from 'react';
import logo from '../../Assets/logoname.png';
import ButtonPrimary from "../UI/Button";
import {ReactComponent as LogoIcon} from '../../Assets/icons/logo.svg'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItemsDesktopHomeClassNames = 'text-white text-[10px] md:text-[18px] xl:text-[28px]'
    const navItemsDesktopClassNames = 'text-white text-[10px] md:text-[18px] xl:text-[28px] hover:text-gray-300'

    return (
        <nav className="bg-[#0A265F] text-white py-[21px] border-b-[1px] border-[#ffffff26] z-10 relative">
            <div className="container flex items-center justify-between">
                <div className="flex items-center">
                    <LogoIcon className="h-6 md:h-[35.33px] w-[268px]" />
                    {/* <img src={logo} alt="Logo" className="h-6 md:h-[35.33px] w-[268px] mr-2" /> */}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        className="text-white hover:text-gray-300"
                        onClick={handleMobileMenuToggle}
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={'white'}
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                                />
                            )}
                        </svg>
                    </button>

                    {isMobileMenuOpen && (
                        <div className="bg-[#0A265F] py-4 text-center">
                            <a
                                href="#"
                                className="block py-2 text-[28px] text-white hover:text-gray-300"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block py-2 text-[28px] text-white hover:text-gray-300"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="block py-2 text-[28px] text-white hover:text-gray-300"
                            >
                                Why us?
                            </a>
                            <a
                                href="#"
                                className="block py-2 text-[28px] text-white hover:text-gray-300"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="block py-2 text-[28px] text-white hover:text-gray-300"
                            >
                                Blog
                            </a>
                        </div>
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1 md:space-x-3 lg:space-x-14 text-arkiterWhite-100">
                    <a href="#" className={navItemsDesktopHomeClassNames}>
                        Home
                    </a>
                    <a href="#" className={navItemsDesktopClassNames}>
                        About
                    </a>
                    <a href="#" className={navItemsDesktopClassNames}>
                        Why us?
                    </a>
                    <a href="#" className={navItemsDesktopClassNames}>
                        Pricing
                    </a>
                    <a href="#" className={navItemsDesktopClassNames}>
                        Blog
                    </a>
                </div>

                <ButtonPrimary classNameButton='hidden md:flex'>
                    Start Here
                </ButtonPrimary>
            </div>

        </nav>
    );
};

export default Navbar;
