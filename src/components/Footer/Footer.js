import React, { Component } from 'react';
class Footer extends Component {

    render() {
        return (
            <footer className="w-[95%] mx-auto pb-24 text-gray-500 text-sm mt-5">
            <div className="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8">
              <div className="basis-1/3">
                <div className="font-bold text-xl mb-4 text-gray-800">CoffeeStyle.</div>
                <div className="mb-8 md:mb-20">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</div>
                <div className="text-gray-400 hover:text-coffee-400">phuongnguyen Blog. © 2016</div>
              </div>
              <div className="basis-1/6">
                <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">Menu</div>
                <div className="flex flex-col gap-3">
                  <div className=""><a href="#" className="hover:text-coffee-400">Home</a></div>
                  <div className=""><a href="#" className="hover:text-coffee-400">Our Products</a></div>
                  <div className=""><a href="#" className="hover:text-coffee-400">About</a></div>
                  <div className=""><a href="#" className="hover:text-coffee-400">Contact</a></div>
                  <div className=""><a href="#" className="hover:text-coffee-400">Styleguide</a></div>
                  <div className=""><a href="https://phuongnguyen.com" target="blank" className="hover:text-coffee-400">phuongnguyen</a></div>
                </div>
              </div>
              <div className="basis-1/6">
                <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">Folllow Us</div>
                <div className="flex flex-col gap-3">
                  <div className=""><a href="https://facebook.com/phuongnguyen" className="hover:text-coffee-400">Facebook</a></div>
                  <div className=""><a href="https://instagram.com/phuongnguyen" className="hover:text-coffee-400">Instagram</a></div>
                  <div className=""><a href="#" className="hover:text-coffee-400">Pinterest</a></div>
                  <div className=""><a href="#" className="hover:text-coffee-400">Twitter</a></div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="uppercase font-semibold tracking-wider text-gray-600 mb-8 md:mb-4">Contact Us</div>
                <div className="mb-4">We&apos;re Always Happy to Help</div>
                <div className="mb-16 text-gray-800 text-[22px] tracking-wide">
                  <a href="mailto:phuongnguyen.official@gmail.com" className="hover:text-coffee-400">phuongnguyen@gmail.com</a>
                </div>
                <div className=""><a href="https://phuongnguyen.com" target="blank" className="text-gray-400 hover:text-coffee-400">Powered by phuongnguyen Author</a></div>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;