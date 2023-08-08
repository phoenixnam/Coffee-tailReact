import React, { Component } from 'react';

class News extends Component {

    render() {
        return (
            <div class="ml-12 mr-12">
            <div class="flex justify-center mb-3 mt-4">
                <div class="w-8 h-px bg-gray-400 mt-3"></div>
                <div class="text-gray-400 ml-2 w-22 text-center">BEHIND THE MUGS, LIFESTYLE STORIES</div>
                <div class="w-8 h-px bg-gray-400 mt-3 ml-2"></div>
            </div>
            <div class="flex flex-col md:flex-row ">

                <div class="px-3 w-23 order-1 my-6">
                    <div class="relative">
                        <img class="hover:opacity-75 transition duration-300 h-auto w-auto"
                            src="https://noithattruongsa.com/wp-content/uploads/2020/06/trang-tri-quan-cafe-dep-45.jpg"
                            alt="" onclick="toggleText()" />
                        <div id="story" 
                            class="absolute mr-4 shadow-lg py-2 text-center font-semibold bottom-2 left-0 right-0 text-gray-900 bg-white border border-cyan-900 opacity-0">
                            READ THE FULL STORY
                        </div>
                    </div>
                    <div class="hover:text-coffee-400 mt-4">
                        Health Check: why do I get a headache when I haven't had my coffee?
                    </div>
                    <div class="text-gray-500 hover:text-coffee-200 mt-2">It is a paradisematic country, in which
                        roasted
                        parts of sentences fly into your mouth.</div>
                    <div class="text-gray-500 mt-2 mb-2">
                        OCTOBER 9, 2018
                    </div>
                </div>
                <div class="px-2 order-2 my-6">
                    <div class="relative">
                        <img class="hover:opacity-75 transition duration-300 h-auto w-auto"
                            src="https://noithattruongsa.com/wp-content/uploads/2020/06/trang-tri-quan-cafe-dep-45.jpg"
                            alt="" onclick="toggleText()" />
                        <div id="story" 
                            class="absolute mr-4 shadow-lg py-2 text-center font-semibold bottom-2 left-0 right-0 text-gray-900 bg-white border border-cyan-900 opacity-0">
                            READ THE FULL STORY
                        </div>
                    </div>
                    <div class="hover:text-coffee-400  mt-4">
                        Health Check: why do I get a headache when I haven't had my coffee?
                    </div>
                    <div class="text-gray-500 hover:text-coffee-200 mt-2">It is a paradisematic country, in which
                        roasted
                        parts of sentences fly into your mouth.</div>
                    <div class="text-gray-500 mt-2 mb-2">
                        OCTOBER 9, 2018
                    </div>
                </div>
                <div class="px-2 order-3 my-6">
                    <div class="relative">
                        <img class="hover:opacity-75 transition duration-300 h-auto w-auto"
                            src="https://noithattruongsa.com/wp-content/uploads/2020/06/trang-tri-quan-cafe-dep-45.jpg"
                            alt="" onclick="toggleText()" />
                        <div id="story" 
                            class="absolute mr-4 shadow-lg py-2 text-center font-semibold bottom-2 left-0 right-0 text-gray-900 bg-white border border-cyan-900 opacity-0">
                            READ THE FULL STORY
                        </div>
                    </div>
                    <div class="hover:text-coffee-400  mt-4">
                        Health Check: why do I get a headache when I haven't had my coffee?
                    </div>
                    <div class="text-gray-500 hover:text-coffee-200 mt-2">It is a paradisematic country, in which
                        roasted
                        parts of sentences fly into your mouth.</div>
                    <div class="text-gray-500 mt-2 mb-2">
                        OCTOBER 9, 2018
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default News;