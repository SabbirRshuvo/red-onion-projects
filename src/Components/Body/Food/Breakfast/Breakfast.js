import React from "react";
import cardImage1 from "../../../../images/breakfast/breakfast1.png";
import cardImage2 from "../../../../images/breakfast/breakfast2.png";
import cardImage3 from "../../../../images/breakfast/breakfast3.png";
import cardImage4 from "../../../../images/breakfast/breakfast4.png";
import cardImage5 from "../../../../images/breakfast/breakfast5.png";
import cardImage6 from "../../../../images/breakfast/breakfast6.png";
function Breakfast() {
    return (
        <div>
            <div className="container mx-auto py-8 ">
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
                                    Bagel and cream cheese
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
                                    Breakfast sandwich
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
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                            <img
                                className="w-full"
                                src={cardImage3}
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
                                src={cardImage4}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Eggs Enedict
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
                                    Toast Crossant Fried egg
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
                                src={cardImage6}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-semibold">
                                    Full Breakfast Fried Egg toast Brunch
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
            <div>
                <button className="bg-gray-400 hover:bg-gray-700 text-white  py-2 px-4 rounded md:py-3 md:px-6 mb-2">
                    Checkout Your Food
                </button>
            </div>
        </div>
    );
}

export default Breakfast;
