import React, { Component } from 'react';

class News extends Component {

    render() {
        return (
            <div className="w-[95%] mx-auto mt-4 md:mt-2">
                    <div className="text-gray-400 mb-2 mt-4 ml-2 w-22 text-center hover:text-coffee-400">BEHIND THE MUGS, LIFESTYLE STORIES</div>
                <div className="flex flex-col md:flex-row mx-4 md:mx-0">

                    <div className="px-3 w-23 order-1">
                        <div className="relative">
                            <img className="hover:opacity-75 transition duration-300 h-auto w-auto"
                                src="https://noithattruongsa.com/wp-content/uploads/2020/06/trang-tri-quan-cafe-dep-45.jpg"
                                alt="" />
                            <div id="story"
                                className="absolute mr-4 shadow-lg py-2 text-center font-semibold bottom-2 left-0 right-0 text-gray-900 bg-white border border-cyan-900 opacity-0">
                                READ THE FULL STORY
                            </div>
                        </div>
                        <div className="hover:text-coffee-400 mt-4">
                            Health Check: why do I get a headache when I haven't had my coffee?
                        </div>
                        <div className="text-gray-500 hover:text-coffee-200 mt-2">It is a paradisematic country, in which
                            roasted
                            parts of sentences fly into your mouth.</div>
                        <div className="text-gray-500 mt-2 mb-2">
                            OCTOBER 9, 2018
                        </div>
                    </div>
                    <div className="px-2 order-2">
                        <div className="relative">
                            <img className="hover:opacity-75 transition duration-300 h-auto w-auto"
                                src="https://noithattruongsa.com/wp-content/uploads/2020/06/trang-tri-quan-cafe-dep-45.jpg"
                                alt="" />
                            <div id="story"
                                className="absolute mr-4 shadow-lg py-2 text-center font-semibold bottom-2 left-0 right-0 text-gray-900 bg-white border border-cyan-900 opacity-0">
                                READ THE FULL STORY
                            </div>
                        </div>
                        <div className="hover:text-coffee-400  mt-4">
                            Health Check: why do I get a headache when I haven't had my coffee?
                        </div>
                        <div className="text-gray-500 hover:text-coffee-200 mt-2">It is a paradisematic country, in which
                            roasted
                            parts of sentences fly into your mouth.</div>
                        <div className="text-gray-500 mt-2 mb-2">
                            OCTOBER 9, 2018
                        </div>
                    </div>
                    <div className="px-2 order-3">
                        <div className="relative">
                            <img className="hover:opacity-75 transition duration-300 h-auto w-auto"
                                src="https://noithattruongsa.com/wp-content/uploads/2020/06/trang-tri-quan-cafe-dep-45.jpg"
                                alt="" />
                            <div id="story"
                                className="absolute mr-4 shadow-lg py-2 text-center font-semibold bottom-2 left-0 right-0 text-gray-900 bg-white border border-cyan-900 opacity-0">
                                READ THE FULL STORY
                            </div>
                        </div>
                        <div className="hover:text-coffee-400  mt-4">
                            Health Check: why do I get a headache when I haven't had my coffee?
                        </div>
                        <div className="text-gray-500 hover:text-coffee-200 mt-2">It is a paradisematic country, in which
                            roasted
                            parts of sentences fly into your mouth.</div>
                        <div className="text-gray-500 mt-2 mb-2">
                            OCTOBER 9, 2018
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default News;