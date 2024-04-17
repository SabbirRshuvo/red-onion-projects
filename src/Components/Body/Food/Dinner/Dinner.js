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
                        <div className="max-w-sm rounded overflow-hidden hover:shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage1}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Card Title 1
                                </div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas aliquet justo non
                                    augue vestibulum, nec blandit quam
                                    efficitur.
                                </p>
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
                                <div className="font-bold text-xl mb-2">
                                    Card Title 2
                                </div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas aliquet justo non
                                    augue vestibulum, nec blandit quam
                                    efficitur.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage3}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Card Title 3
                                </div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas aliquet justo non
                                    augue vestibulum, nec blandit quam
                                    efficitur.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage4}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Card Title 3
                                </div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas aliquet justo non
                                    augue vestibulum, nec blandit quam
                                    efficitur.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage5}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Card Title 3
                                </div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas aliquet justo non
                                    augue vestibulum, nec blandit quam
                                    efficitur.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img
                                className="w-full"
                                src={cardImage6}
                                alt="Card"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Card Title 3
                                </div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas aliquet justo non
                                    augue vestibulum, nec blandit quam
                                    efficitur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dinner;
