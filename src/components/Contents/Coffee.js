import React, { Component } from 'react';
import Slider from './Slider';
import News from './News';
import Footer from '../Footer/Footer';
import Nav from '../Header/Menu';
import Testimonials from './Testimonial';
class Content extends Component {

    render() {
        return (
            <div>
                <Nav></Nav>
                <main className="p-2">
                    <Slider></Slider>
                    <div className='w-[95%] mx-auto'>
                        <div className="text-gray-400 ml-2 w-22 text-center uppercase mt-4 mb-2 hover:text-coffee-400">more product</div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-y-4 ml-4 mr-4 md:mr-0 md:ml-0">
                            <div>
                                <div className="relative group mx-2 mr-4">
                                    <img className="order-1 object-cover transition hover:opacity-80 duration-100 w-full h-[80%]"
                                        src="https://giadinh.mediacdn.vn/296230595582509056/2023/5/17/edit-edit-1-168429317169764959073.png" alt="" />
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
                                <div className="relative group mx-2 mr-4">
                                    <img className="order-1 h-[540px] transition hover:opacity-80 duration-100 w-full"
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
                                <div className="relative group mx-2 mr-4">
                                    <img className="order-1 h-[540px] transition hover:opacity-80 duration-100 w-full"
                                        src="https://caphenguyenchat.vn/wp-content/uploads/2021/09/400-x-600-6.jpg" alt="" />
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
                                <div className="relative group mx-2 mr-4">
                                    <img className="order-1 h-[540px] transition hover:opacity-80 duration-100 w-full mr-2"
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

                    <Testimonials></Testimonials>

                    <div className="text-gray-400 mt-4 mb-2 ml-2 w-22 text-center hover:text-coffee-400">BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</div>
                    <div className="coffee-magazine w-full xl:w-[65%] mx-auto mt-4 md:mr-12">
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
                                <div className="bg-gray-900 text-white w-max mx-auto p-3 md:mx-0 rounded-sm hover:bg-gray-700">Start Shopping</div>
                            </div>
                        </div>
                    </div>
                    <News></News>
                    <div className="bg-gray-900 flex flex-col" style={{ height: '300px' }}>
                        <div className="text-gray-400 mt-4 mb-2 ml-2 w-22 text-center hover:text-coffee-400">SIGN UP AND GET FREE COFFEE BAGS</div>
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