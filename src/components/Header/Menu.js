import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuVisible: !prevState.isMenuVisible,
        }));
    };

    render() {
        const { isMenuVisible } = this.state;

        return (
            <div className="p-6 mx-auto w-full max-w-screen-2xl">
                <nav className="flex flex-row justify-between items-center relative">
                    <div className="logo text-center text-xl font-semibold cursor-pointer">
                        CoffeeStyle.
                    </div>
                    <ul
                        id="menu"
                        className={`basis-3/6 lg:flex lg:items-center md:visible flex-col flex md:flex-row gap-x-7 justify-end order-3 bg-white lg:justify-end lg:gap-8 uppercase text-sm
                         text-gray-500 font-medium transition-all duration-300 ${isMenuVisible ? 'max-h-[20rem] visible opacity-100' : 'h-0 invisible opacity-0'}`}
                    >
                        <li className="tqd-top-menu-item">
                            <a href="#" className="">
                                Home
                            </a>
                        </li>
                        <li class="tqd-top-menu-item">
                            <a href="#" class="">Products</a>
                        </li>
                        <li class="tqd-top-menu-item">
                            <a href="#" class="">Blog</a>
                        </li>
                        <li class="tqd-top-menu-item">
                            <a href="#" class="">About</a>
                        </li>
                        <li class="tqd-top-menu-item">
                            <a href="#" class="">Contact</a>
                        </li>
                        <li class="tqd-top-menu-item">
                            <a href="#" class="">StyleGuide</a>
                        </li>
                        <li class="tqd-top-menu-item tqd-top-menu-item-active">
                            <a href="https://trungquandev.com" target="blank" class="">Trungquandev</a>
                        </li>
                    </ul>

                    <ul
                        id="menu-btn"
                        className="md:hidden order-3 basis-3/6 md:basis-1/6 flex justify-end md:justify-start items-center ml-4 mr-10 uppercase text-sm text-gray-500 font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={this.toggleMenu}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </ul>

                    <a href="#" className="flex items-center md:order-3 order-2 md:mr-0 mr-7">
                        <span className="mx-2 md:order-3 order-2 mr-1 font-semibold">
                            Cart
                        </span>
                        <div className="bg-orange-500 rounded-full px-2 order-4 text-white">
                            7
                        </div>
                    </a>

                  
                </nav>
            </div>
        );
    }
}

export default Header;
