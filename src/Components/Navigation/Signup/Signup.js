import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className="flex  justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div></div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                    action="#"
                    method="POST"
                >
                    <div className="rounded-md shadow-sm -space-y-px">
                        {/* Username field */}
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                onChange={handleInputChange}
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        {/* Email field */}
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                onChange={handleInputChange}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        {/* Password field */}
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                onChange={handleInputChange}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <Link to="/login" className="font-serif text-blue-400">
                    Already Have an Account? Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
