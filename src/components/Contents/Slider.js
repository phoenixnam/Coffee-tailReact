import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
    this.sliderInterval = null;
    this.autoSlideInterval = 5000;
  }

  images = [
    'https://coffee-style-trungquandev.web.app/img/slider-bg.jpeg',
    'https://demoda.vn/wp-content/uploads/2022/02/anh-cafe.jpg',
    'https://quancaphe.vn/wp-content/uploads/2021/10/img_617bfd493fa95.jpg'
  ];

  componentDidMount() {

    this.sliderInterval = setInterval(this.nextSlide, this.autoSlideInterval);
  }

  componentWillUnmount() {

    clearInterval(this.sliderInterval);
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide: prevState.currentSlide === 0 ? this.images.length - 1 : prevState.currentSlide - 1,
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: prevState.currentSlide === this.images.length - 1 ? 0 : prevState.currentSlide + 1,
    }));
  };

  goToSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  pauseAutoSlide = () => {
    clearInterval(this.sliderInterval);
  };

  resumeAutoSlide = () => {
    this.sliderInterval = setInterval(this.nextSlide, this.autoSlideInterval);
  };

  render() {
    const { currentSlide } = this.state;
    return (
      <div>
        <div
          className="xs:m-0 sm:mr-2 sm:ml-2 mt-6 mb-20"
          onMouseEnter={this.pauseAutoSlide}
          onMouseLeave={this.resumeAutoSlide}
        >
          <div className="relative h-full">
            <ul id="slider" className="h-screen">
              {this.images.map((image, index) => (
                <li
                  key={index}
                  className={`h-full relative ${index === currentSlide ? '' : 'hidden'}`}
                >
                  <img className="object-cover w-full" style={{ height: '540px' }} src={image} alt="" />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
                    <div className="text-center">
                      <div className="flex flex-col mx-auto mt-12 text-white justify-center text-center items-center gap-y-6">
                        <div className="uppercase text-sm">BEST PLACE TO BUY COFFEE</div>
                        <div className="text-5xl font-medium">Coffee Mugs</div>
                        <div className="font-medium text-lg">
                          The most versatile furniture system ever created. Designed to fit your life, made to move and grow.
                        </div>
                        <div className="bg-white md:w-1/3 w-max ml-2 mr-2 mb-12 text-center font-bold font-mono text-gray-900 py-3">
                          EXPLORE OUR PRODUCTS
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="absolute px-5 flex h-full w-full top-0 left-0 mb-1/2">
              <div className="my-auto w-full flex justify-between items-center py-24">
                <button onClick={this.prevSlide} className="bg-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button onClick={this.nextSlide} className="bg-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex">
              {this.images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => this.goToSlide(index)}
                  className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${index === currentSlide ? 'bg-black' : 'bg-gray-300'
                    }`}
                ></div>
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Slider;

