import React from "react";
import cardImage1 from "../../../../images/lunch/lunch1.png";
import cardImage2 from "../../../../images/lunch/lunch2.png";
import cardImage3 from "../../../../images/lunch/lunch3.png";
import cardImage4 from "../../../../images/lunch/lunch4.png";
import cardImage5 from "../../../../images/lunch/lunch5.png";
import cardImage6 from "../../../../images/lunch/lunch6.png";
function Lunch() {
    return (
        <div>
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap -mx-4">
                    {/* First Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage1}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Healthy Meal Plan
                                </div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $23.99
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage2}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Fried Chicken Bento
                                </div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $9.99
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage3}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Tarragon-Rubbed-Salmon
                                </div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $6.99
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage4}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Indian Lunch
                                </div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $8.99
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage5}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">Beef Steak</div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $15.99
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage6}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Honey-Soy-Blazed Salmon with Peppers
                                </div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $10.99
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lunch;
