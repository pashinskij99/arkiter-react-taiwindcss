import React, { useState } from 'react';
import logo from '../../Assets/logoname.png';
import ButtonPrimary from "../UI/Button";
import { ReactComponent as LogoIcon } from '../../Assets/icons/logo.svg'
import { ReactComponent as LogoMobileIcon } from '../../Assets/icons/logo-mobile.svg'
import { ReactComponent as ArrowLeftIcon } from '../../Assets/icons/arrow-left.svg'
import { Link } from 'react-router-dom';
import styles from '../../styles/NavBar.module.scss'
import clsx from 'clsx';

const anchorLinks = [
    {id: 0, text: 'Home', href: '#'},
    {id: 1, text: 'About', href: '#about'},
    {id: 2, text: 'Why Us?', href: '#why-us'},
    {id: 3, text: 'Pricing', href: '#pricing'},
    {id: 4, text: 'Blog', href: '#blog'},
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItemsDesktopHomeClassNames = 'text-white text-[2.8rem] leading-[1]'
    const navItemsDesktopClassNames = 'text-white text-[2.8rem] hover:text-gray-300 leading-[1] cursor-pointer'

    return (
        <nav className="bg-[#0A265F] text-white py-[2.1rem] border-b-[.1rem] border-[#ffffff26] z-50 relative">
            <div className="container flex items-center justify-between">

                <Link to='/' className="flex items-center">
                    <LogoIcon className="hidden md:block md:h-[3.533rem] w-[26.8rem]" />
                    <LogoMobileIcon className="md:hidden" />
                </Link>

                {/* Mobile Menu */}
                <div className="md:hidden relative z-50">
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

                    <div className={clsx("bg-[#0A265F] py-4 text-center flex flex-col justify-between fixed top-0 right-0 z-50 h-full max-w-[300px]", styles.mobileMenu, {
                        ['!translate-x-0']: isMobileMenuOpen
                    })}>
                        <div>
                            <div onClick={handleMobileMenuToggle} className='flex items-center p-[32px] cursor-pointer'>
                                <ArrowLeftIcon className={styles.arrowIcon} />
                                <span className='font-medium leading-[1] text-[4rem] ml-[20px]'>Continue Exploring</span>
                            </div>

                            <div className='flex flex-col items-start px-[32px] pb-[24px]'>
                                <a
                                    href="#"
                                    className="block py-4 text-[5.8rem] text-white hover:text-gray-300"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="block py-4 text-[5.8rem] text-white hover:text-gray-300"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="block py-4 text-[5.8rem] text-white hover:text-gray-300"
                                >
                                    Why us?
                                </a>
                                <a
                                    href="#"
                                    className="block py-4 text-[5.8rem] text-white hover:text-gray-300"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="block py-4 text-[5.8rem] text-white hover:text-gray-300"
                                >
                                    Blog
                                </a>
                            </div>
                        </div>

                        <div className='p-[32px]'>
                            <LogoIcon className='w-full' />
                        </div>

                    </div>
                </div>

                {/* Mobile back */}
                <div onClick={handleMobileMenuToggle} className={clsx(styles.mobileBack, {
                    ['!opacity-100 !pointer-events-auto !touch-auto']: isMobileMenuOpen
                })} />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-14 lg:space-x-28 text-arkiterWhite-100 translate-y-[-7%]">
                    {
                        anchorLinks.map(({href, id, text}) => (
                            <a key={id} href={href} className={navItemsDesktopClassNames}>{text}</a>
                        ))
                    }
                </div>

                <ButtonPrimary classNameButton='hidden md:flex'>
                    Start Here
                </ButtonPrimary>
            </div>

        </nav>
    );
};

export default Navbar;
