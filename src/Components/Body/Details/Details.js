import React from "react";
import cardImage1 from "../../../images/adult-blur-blurred-background-687824.png";
import cardImage2 from "../../../images/chef-cook-food-33614.png";
import cardImage3 from "../../../images/architecture-building-city-2047397.png";
function Details() {
    return (
        <div className="container mx-auto py-8 ">
            <div className="flex flex-wrap -mx-4">
                {/* first slide */}

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                        <img className="w-full" src={cardImage1} alt="Card" />
                        <div className="px-6 py-4">
                            <div className="font-semibold">
                                Bagel and cream cheese
                            </div>
                            <p className="text-gray-400 font-serif">
                                How we dream about our future
                            </p>
                            <span className="font-bold font-sans">$6.99</span>
                        </div>
                    </div>
                </div>
                {/* second slide */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                        <img className="w-full" src={cardImage2} alt="Card" />
                        <div className="px-6 py-4">
                            <div className="font-semibold">
                                Bagel and cream cheese
                            </div>
                            <p className="text-gray-400 font-serif">
                                How we dream about our future
                            </p>
                            <span className="font-bold font-sans">$6.99</span>
                        </div>
                    </div>
                </div>
                {/* third slide */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="max-w-sm rounded overflow-hidden hover:shadow-lg cursor-pointer">
                        <img className="w-full" src={cardImage3} alt="Card" />
                        <div className="px-6 py-4">
                            <div className="font-semibold">
                                Bagel and cream cheese
                            </div>
                            <p className="text-gray-400 font-serif">
                                How we dream about our future
                            </p>
                            <span className="font-bold font-sans">$6.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
