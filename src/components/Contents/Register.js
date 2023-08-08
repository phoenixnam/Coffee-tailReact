import React, { useState } from 'react';
import axios from 'axios';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailPattern.test(formData.email)) {
            alert('Email không hợp lệ');
            return;
        }

        if (!passwordPattern.test(formData.password)) {
            alert('Invalid password. Password must be at least 8 characters including uppercase, lowercase, numbers and special characters.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert('Confirmation password does not match. Please check again.');
            return;
        }
        axios.post('https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/user', formData)
            .then((response) => {
                alert('Sign up success!');
                window.location.href = "/login"; 
                setRegistrationSuccess(true);
            })
            .catch((error) => {
                alert('Sign up fail!', error);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md w-96 p-8 rounded-md">
                {isRegistrationSuccess && (
                    <p className="text-green-500 font-semibold mb-4">Sign up success!</p>
                )}
                <div class="font-sans antialiased bg-grey-lightest">

                    <div class="w-full bg-grey-lightest pt-16" >
                        <div class="container mx-auto py-8">
                            <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                                <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
                                <div class="py-4 px-8">
                                
                                        <div class="mb-4">
                                            <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">Username</label>
                                            <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your first name" />
                                        </div>

                               
                                    <div class="mb-4">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your email address" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your secure password" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Confirm Password </label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                              type="password"
                                              id="confirmPassword"
                                              name="confirmPassword"
                                              value={formData.confirmPassword}
                                              onChange={handleChange}
                                              required />
                                    </div>
                                  
                                    <div class="flex items-center justify-center mt-8">
                                        <button class="bg-orange-500 hover:bg-blue-dark text-white font-bold py-2 px-6 rounded-sm" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>


                </div>
            </form>
        </div>
    );
};

export default RegisterForm;

