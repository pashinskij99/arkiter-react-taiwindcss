import React, { useState } from 'react';
import logo from '../../Assets/logoname.png';
import ButtonPrimary from "../UI/Button";
import {ReactComponent as LogoIcon} from '../../Assets/icons/logo.svg'
import {ReactComponent as LogoMobileIcon} from '../../Assets/icons/logo-mobile.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItemsDesktopHomeClassNames = 'text-white text-[2.8rem] leading-[1]'
    const navItemsDesktopClassNames = 'text-white text-[2.8rem] hover:text-gray-300 leading-[1]'

    return (
        <nav className="bg-[#0A265F] text-white py-[2.1rem] border-b-[.1rem] border-[#ffffff26] z-10 relative">
            <div className="container flex items-center justify-between">
                <div className="flex items-center">
                    <LogoIcon className="hidden md:block md:h-[3.533rem] w-[26.8rem]" />
                    <LogoMobileIcon className="md:hidden" />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        className="text-white w-full flex justify-center hover:text-gray-300"
                        onClick={handleMobileMenuToggle}
                    >
                        <svg
                            className="w-28 fill-current"
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
                                className="block py-4 text-[4.8rem] text-white hover:text-gray-300"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block py-4 text-[4.8rem] text-white hover:text-gray-300"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="block py-4 text-[4.8rem] text-white hover:text-gray-300"
                            >
                                Why us?
                            </a>
                            <a
                                href="#"
                                className="block py-4 text-[4.8rem] text-white hover:text-gray-300"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="block py-4 text-[4.8rem] text-white hover:text-gray-300"
                            >
                                Blog
                            </a>
                        </div>
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-14 lg:space-x-28 text-arkiterWhite-100 translate-y-[-7%]">
                    <Link to={'/'} className={navItemsDesktopHomeClassNames}>Home</Link>
                    <Link to={'/privacy-policy'} className={navItemsDesktopClassNames}>About</Link>
                    <Link to={'/cookie-policy'} className={navItemsDesktopClassNames}>Why us?</Link>
                    <Link to={'/contact'} className={navItemsDesktopClassNames}>Pricing</Link>
                    <Link to={'/blog'} className={navItemsDesktopClassNames}>Blog</Link>
                    {/* <a href="#" className={navItemsDesktopHomeClassNames}>
                        Home
                    </a> */}
                    {/* <a href="#" className={navItemsDesktopClassNames}>
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
                    </a> */}
                </div>

                <ButtonPrimary classNameButton='hidden md:flex'>
                    Start Here
                </ButtonPrimary>
            </div>

        </nav>
    );
};

export default Navbar;
