import React, { Component } from 'react';
import Slider from './Slider';
import News from './News';
import Header from '../Header/Menu';
import Footer from '../Footer/Footer';

class Content extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <main className="p-2">
                    <Slider></Slider>
                    <div className='ml-10 mr-6 md:mx-0'>
                        <div className="flex justify-center mb-3 mt-12">
                            <div className="w-8 h-px bg-gray-400 mt-3"></div>
                            <div className="text-gray-400 ml-2 w-22 text-center uppercase">future Mugs</div>
                            <div className="w-8 h-px bg-gray-400 mt-3 ml-2"></div>
                        </div>
                        <div className="grid md:grid-cols-2 mx-auto gap-y-4 md:ml-4 md:mr-4">
                            <div>
                                <div className="relative group mx-10">
                                    <img className="order-1 h-full transition hover:opacity-80 duration-100 w-full"
                                        src="https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg" alt="" />
                                    <div
                                        className="uppercase mx-auto w-1/3 absolute top-3 left-34 right-3 bg-gray-100 shadow-sm text-gray-950 text-center">
                                        <div className="py-3 text-coffee-400">
                                            on sale
                                        </div>
                                    </div>
                                    <div
                                        className="uppercase mx-auto w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn absolute bottom-10 top-50 left-0 right-0 border bg-white shadow-sm text-gray-950 text-center">
                                        <div className="py-3">
                                            explore mug
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col items-center">
                                    <div className="hover:text-coffee-400 text-xl">
                                        Pink Premium Ceramic
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-coffe-600">$59.00 USD</span>
                                        <span className="text-gray-500 line-through ml-3">$99.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative group mx-10">
                                    <img className="order-1 h-full transition hover:opacity-80 duration-100 w-full"
                                        src="https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg" alt="" />
                                    <div
                                        className="uppercase mx-auto w-1/3 absolute top-3 left-34 right-3 bg-gray-100 shadow-sm text-gray-950 text-center">
                                        <div className="py-3 text-coffee-400">
                                            on sale
                                        </div>
                                    </div>
                                    <div
                                        className="uppercase mx-auto w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn absolute bottom-10 top-50 left-0 right-0 border bg-white shadow-sm text-gray-950 text-center">
                                        <div className="py-3">
                                            explore mug
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col items-center">
                                    <div className="hover:text-coffee-400 text-xl">
                                        Pink Premium Ceramic
                                    </div>

                                    <div className="mt-2">
                                        <span className="text-coffe-600">$59.00 USD</span>
                                        <span className="text-gray-500 line-through ml-3">$99.00 USD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center mb-3 mt-12">
                            <div className="w-8 h-px bg-gray-400 mt-3"></div>
                            <div className="text-gray-400 ml-2 w-22 text-center uppercase">more product</div>
                            <div className="w-8 h-px bg-gray-400 mt-3 ml-2"></div>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-y-4 md:ml-4 md:mr-4">
                            <div>
                                <div className="relative group mx-10">
                                    <img className="order-1 h-full transition hover:opacity-80 duration-100 w-full"
                                        src="https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg" alt="" />
                                    <div
                                        className="uppercase mx-auto w-1/3 absolute top-3 left-34 right-3 bg-gray-100 shadow-sm text-gray-950 text-center">
                                        <div className="py-3 text-coffee-400">
                                            on sale
                                        </div>
                                    </div>
                                    <div
                                        className="uppercase mx-auto w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn absolute bottom-10 top-50 left-0 right-0 border bg-white shadow-sm text-gray-950 text-center">
                                        <div className="py-3">
                                            explore mug
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col items-center">
                                    <div className="hover:text-coffee-400 text-xl">
                                        Pink Premium Ceramic
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-coffe-600">$59.00 USD</span>
                                        <span className="text-gray-500 line-through ml-3">$99.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative group mx-10">
                                    <img className="order-1 h-full transition hover:opacity-80 duration-100 w-full"
                                        src="https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg" alt="" />
                                    <div
                                        className="uppercase mx-auto w-1/3 md:w-1/3 absolute top-3 left-34 right-3 bg-gray-100 shadow-sm text-gray-950 text-center">
                                        <div className="py-3 text-coffee-400">
                                            on sale
                                        </div>
                                    </div>
                                    <div
                                        className="uppercase mx-auto w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn absolute bottom-10 top-50 left-0 right-0 border bg-white shadow-sm text-gray-950 text-center">
                                        <div className="py-3">
                                            explore mug
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col items-center">
                                    <div className="hover:text-coffee-400 text-xl">
                                        Pink Premium Ceramic
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-coffe-600">$59.00 USD</span>
                                        <span className="text-gray-500 line-through ml-3">$99.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative group mx-10">
                                    <img className="order-1 h-full transition hover:opacity-80 duration-100 w-full"
                                        src="https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg" alt="" />
                                    <div
                                        className="uppercase mx-auto w-1/3 absolute top-3 left-34 right-3 bg-gray-100 shadow-sm text-gray-950 text-center">
                                        <div className="py-3 text-coffee-400">
                                            on sale
                                        </div>
                                    </div>
                                    <div
                                        className="uppercase mx-auto w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn absolute bottom-10 top-50 left-0 right-0 border bg-white shadow-sm text-gray-950 text-center">
                                        <div className="py-3">
                                            explore mug
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col items-center">
                                    <div className="hover:text-coffee-400 text-xl">
                                        Pink Premium Ceramic
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-coffe-600">$59.00 USD</span>
                                        <span className="text-gray-500 line-through ml-3">$99.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative group mx-10">
                                    <img className="order-1 h-full transition hover:opacity-80 duration-100 w-full"
                                        src="https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg" alt="" />
                                    <div
                                        className="uppercase mx-auto w-1/3 absolute top-3 left-34 right-3 bg-gray-100 shadow-sm text-gray-950 text-center">
                                        <div className="py-3 text-coffee-400">
                                            on sale
                                        </div>
                                    </div>
                                    <div
                                        className="uppercase mx-auto w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn absolute bottom-10 top-50 left-0 right-0 border bg-white shadow-sm text-gray-950 text-center">
                                        <div className="py-3">
                                            explore mug
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col items-center">
                                    <div className="hover:text-coffee-400 text-xl">
                                        Pink Premium Ceramic
                                    </div>

                                    <div className="mt-2">
                                        <span className="text-coffe-600">$59.00 USD</span>
                                        <span className="text-gray-500 line-through ml-3">$99.00 USD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-3 mt-12 items-center">
                        <div className="w-8 h-px bg-gray-400 mt-3"></div>
                        <div className="text-gray-400 ml-2 w-22 text-center">BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</div>
                        <div className="w-8 h-px bg-gray-400 mt-3 ml-2"></div>
                    </div>

                    <div className="coffee-magazine w-full xl:w-[65%] mx-auto mb-24 mt-5">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ml-12 mr-10 md:mr-0">
                            <div className="basis-1/2 md:flex md:flex-row gap-5 w-full h-full mb-5 md:mb-0">
                                <div className="tqd-magazine-big-image h-[280px] xs:h-auto md:h-[280px] basis-2/3 mb-3 md:mb-0">
                                    <img className="w-full h-full object-cover"
                                        src="https://coffee-style-trungquandev.web.app/img/magazine-image-01.jpeg"
                                        alt="Coffee Magazine Image 1" />
                                </div>
                                <div className=" basis-1/3 flex flex-row md:flex-col gap-3 xs:gap-5">
                                    <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2">
                                        <img className="w-full h-full object-cover"
                                            src="https://coffee-style-trungquandev.web.app/img/magazine-image-02.jpeg"
                                            alt="Coffee Magazine Image 2" />
                                    </div>
                                    <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2">
                                        <img className="w-full h-full object-cover"
                                            src="https://coffee-style-trungquandev.web.app/img/magazine-image-03.jpeg"
                                            alt="Coffee Magazine Image 3" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-sm basis-1/2 xl:pl-14 text-center md:text-left ml-xs md:ml-8">
                                <div className="uppercase tracking-widest text-gray-500 font-medium text-xs mb-4">Premium Offer
                                </div>
                                <div className="text-4xl mb-4">Get our Coffee Magazine</div>
                                <div className="text-gray-500 leading-7 mb-4">The most versatile furniture system ever created.
                                    Designed to fit your life.</div>
                                <div className="bg-gray-900 text-white w-max mx-auto p-3 md:mx-0 hover:bg-orange-500 rounded-sm">Start Shopping</div>
                            </div>
                        </div>
                    </div>
                    <News></News>
                    <div className="bg-gray-900 flex flex-col" style={{height: '250px'}}>
                        <div className="flex justify-center mb-3 mt-4">
                            <div className="w-8 h-px bg-gray-700 mt-3"></div>
                            <div className="text-gray-400 ml-2 w-22 text-center">SIGN UP AND GET FREE COFFEE BAGS</div>
                            <div className="w-8 h-px bg-gray-700 mt-3 ml-2"></div>
                        </div>
                        <div className="text-white flex justify-center mt-1 text-4xl">Coffee Updates</div>
                        <br />
                        <div className="flex flex-col md:flex-row md:mx-auto justify-center mt-3">
                            <input type="text" name="" id=""
                                className="bg-gray-900 md:px-6 md:py-3 p-3 mr-2 ml-2 mt-2 text-gray-50 placeholder:uppercase border hover:border-gray-300"
                                placeholder="phuongnguyen@gmail.com" />
                            <button
                                className="bg-white font-semibold w-32 md:px-4 md:py-3 p-0 px-1 py-3 ml-auto mr-auto md:ml-4 mt-2.5 border border-gray-700 mx-auto hover:border-white text-gray-900">Subscribe</button>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default Content;