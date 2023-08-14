import React, { useState } from 'react';

const Testimonials = () => {
    const [ratings, setRatings] = useState(Array(5).fill(false));

    const handleRatingClick = (index) => {
        const newRatings = ratings.map((_, i) => i <= index);
        setRatings(newRatings);
    };

    return (
        <div className='mt-6 w-[95% mx-auto]'>
            <div className="testimonial-section p-4 bg-white text-center ml-12 mr-12">
            <div className="flex justify-center mb-3 mt-4">
                    {/* <div className="w-8 h-px bg-gray-400 mt-3 hover:text-coffee-400"></div> */}
                    <div className="text-gray-400 ml-2 w-22 text-center uppercase hover:text-coffee-400">Customer Reviews</div>
                    {/* <div className="w-8 h-px bg-gray-400 mt-3 ml-2 transition duration-300 hover:bg-coffee-400"></div> */}
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-[25%]">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="testimonial p-4 bg-white rounded shadow-sm w-[300px] gap-x-3">
                            <p className="italic mb-2">
                                "Dịch vụ tuyệt vời! Tôi đã rất hài lòng với sản phẩm của họ."
                            </p>
                            <p className="text-sm">
                                <strong>Nguyễn Văn A</strong>
                                <br />
                                CEO, ABC Company
                            </p>
                            <div className="rating md:mt-3 mb-4 hover:bg-coffee-400">
                                {ratings.map((checked, i) => (
                                    <span
                                        key={i}
                                        className={`star ${checked ? 'checked' : ''}`}
                                        onClick={() => handleRatingClick(i)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
