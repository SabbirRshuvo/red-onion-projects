import React from "react";
import cardImage1 from "../../../../images/dinner/dinner1.png";
import cardImage2 from "../../../../images/dinner/dinner2.png";
import cardImage3 from "../../../../images/dinner/dinner3.png";
import cardImage4 from "../../../../images/dinner/dinner4.png";
import cardImage5 from "../../../../images/dinner/dinner5.png";
import cardImage6 from "../../../../images/dinner/dinner6.png";
function Dinner() {
    return (
        <div>
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap -mx-4">
                    {/* First Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage1}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Salmon with Grapefruit and Lenti Salad
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

                    {/* Second Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage2}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Lemony Salmon Piccata
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

                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage3}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Prock Tenderlion With Quinoa Pilaf
                                </div>
                                <p className="text-gray-400 font-serif">
                                    How we dream about our future
                                </p>
                                <span className="font-bold font-sans">
                                    $12.99
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage4}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    French fries with cheese
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
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage5}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Garlic Butter Baked Salmon
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
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage6}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Baked Chiken
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
                </div>
            </div>
            <div>
                <button className="bg-gray-400 hover:bg-gray-700 text-white  py-2 px-4 rounded md:py-3 md:px-6 mb-2">
                    Checkout Your Food
                </button>
            </div>
        </div>
    );
}

export default Dinner;
