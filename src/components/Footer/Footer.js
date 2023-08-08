import React, { Component } from 'react';
class Footer extends Component {

    render() {
        return (
            <footer class="w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm mt-5">
            <div class="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8">
              <div class="basis-1/3">
                <div class="font-bold text-xl mb-4 text-gray-800">CoffeeStyle.</div>
                <div class="mb-8 md:mb-20">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</div>
                <div class="text-gray-400 hover:text-coffee-400">Trungquandev Blog. © 2016</div>
              </div>
              <div class="basis-1/6">
                <div class="uppercase font-semibold tracking-wider text-gray-600 mb-4">Menu</div>
                <div class="flex flex-col gap-3">
                  <div class=""><a href="#" class="hover:text-coffee-400">Home</a></div>
                  <div class=""><a href="#" class="hover:text-coffee-400">Our Products</a></div>
                  <div class=""><a href="#" class="hover:text-coffee-400">About</a></div>
                  <div class=""><a href="#" class="hover:text-coffee-400">Contact</a></div>
                  <div class=""><a href="#" class="hover:text-coffee-400">Styleguide</a></div>
                  <div class=""><a href="https://trungquandev.com" target="blank" class="hover:text-coffee-400">Trungquandev</a></div>
                </div>
              </div>
              <div class="basis-1/6">
                <div class="uppercase font-semibold tracking-wider text-gray-600 mb-4">Folllow Us</div>
                <div class="flex flex-col gap-3">
                  <div class=""><a href="https://facebook.com/trungquandev" class="hover:text-coffee-400">Facebook</a></div>
                  <div class=""><a href="https://instagram.com/trungquandev" class="hover:text-coffee-400">Instagram</a></div>
                  <div class=""><a href="#" class="hover:text-coffee-400">Pinterest</a></div>
                  <div class=""><a href="#" class="hover:text-coffee-400">Twitter</a></div>
                </div>
              </div>
              <div class="basis-1/3">
                <div class="uppercase font-semibold tracking-wider text-gray-600 mb-8 md:mb-4">Contact Us</div>
                <div class="mb-4">We&apos;re Always Happy to Help</div>
                <div class="mb-16 text-gray-800 text-[22px] tracking-wide">
                  <a href="mailto:trungquandev.official@gmail.com" class="hover:text-coffee-400">trungquandev@gmail.com</a>
                </div>
                <div class=""><a href="https://trungquandev.com" target="blank" class="text-gray-400 hover:text-coffee-400">Powered by Trungquandev Author</a></div>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;