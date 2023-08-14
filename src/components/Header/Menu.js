import React, { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="font-semibold">
            <div className="container mx-auto py-4 flex justify-between items-center ml-12">
                <div className="text-xl font-semibold ml-12">CoffeeStyle.</div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-red-500 hover:text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <span className="text-red-500">Close</span>
                        ) : (
                            <span className="text-blue-500">Menu</span>
                        )}
                    </button>

                </div>
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } md:flex md:flex-row md:justify-center md:items-center mt-4 lg:mt-0`}
                >
                    <ul className="md:flex md:flex-row justify-between">
                        <li className="tqd-top-menu-item">
                            <a href="home" className="hover:text-coffee-400 mr-5 uppercase">
                                Home
                            </a>
                        </li>
                        <li className="tqd-top-menu-item mr-5">
                            <a href="product" className="hover:text-coffee-400 text-black uppercase">
                                Products
                            </a>
                        </li>
                        <li className="tqd-top-menu-item mr-5">
                            <a href="blog" className="hover:text-coffee-400 uppercase">
                                Blog
                            </a>
                        </li>
                        <li className="tqd-top-menu-item mr-5">
                            <a href="about" className="hover:text-coffee-400 uppercase">
                                About
                            </a>
                        </li>
                        <li className="tqd-top-menu-item mr-5">
                            <a href="contact" className="hover:text-coffee-400 uppercase">
                                Contact
                            </a>
                        </li>
                        <li className="tqd-top-menu-item mr-5">
                            <a href="styleguide" className="hover:text-coffee-400 uppercase">
                                StyleGuide
                            </a>
                        </li>
                        <li className="tqd-top-menu-item tqd-top-menu-item-active mr-12">
                            <a
                                href="https://trungquandev.com"
                                target="blank"
                                className="hover:text-coffee-400 uppercase mr-12"
                            >
                                phuongnguyen
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="flex items-center md:order-3 order-2 md:mr-12 mr-5">
                        <span className="mx-2 md:order-3 order-2 mr-1 font-semibold">
                            Cart
                        </span>
                        <div className="bg-orange-500 rounded-full px-2 order-4 text-white mr-12">
                            7
                        </div>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
