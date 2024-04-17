import React from "react";
import cardImage1 from "../../../images/adult-blur-blurred-background-687824.png";
import cardImage2 from "../../../images/chef-cook-food-33614.png";
import cardImage3 from "../../../images/architecture-building-city-2047397.png";
import group1 from "../../../images/icons/Group 204.png";
import group2 from "../../../images/icons/Group 245.png";
import group3 from "../../../images/icons/Group 1133.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Details() {
    return (
        <div className="container mx-auto py-8 ">
            <h2 className="text-3xl font-serif">Why you Choose us</h2>
            <p className="font-serif text-gray-400">
                Barton waited twenty always reparir in within we do. An
                delighted offending curiously my is dashwoods at. Boy prosperous
                increasing surrounded.
            </p>
            <div className="flex flex-wrap -mx-4 mt-5 ">
                {/* first slide */}

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="max-w-sm rounded overflow-hidden hover:shadow-lg ">
                        <img className="w-full" src={cardImage1} alt="Card" />
                        <div className="px-6 py-4">
                            <div className="font-semibold flex items-center justify-evenly">
                                <img src={group1} alt=""></img>
                                Fast Delevery
                            </div>
                            <p className="text-gray-400 font-serif">
                                Keep your system in sync with automated web hook
                                base notifation each time link is paid how we
                                dream about our future.
                            </p>
                            <span className="flex items-center font-serif mt-2 cursor-pointer">
                                See More...
                                <FaArrowRight className="text-green-500 text-xl" />
                            </span>
                        </div>
                    </div>
                </div>
                {/* second slide */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="max-w-sm rounded overflow-hidden hover:shadow-lg ">
                        <img className="w-full" src={cardImage2} alt="Card" />
                        <div className="px-6 py-4">
                            <div className="font-semibold flex items-center justify-evenly">
                                <img src={group2} alt=""></img>A Good Auto
                                Responder
                            </div>
                            <p className="text-gray-400 font-serif">
                                Keep your system in sync with automated web hook
                                base notifation each time link is paid how we
                                dream about our future.
                            </p>
                            <span className="flex items-center font-serif mt-2 cursor-pointer">
                                See More...
                                <FaArrowRight className="text-green-500 text-xl" />
                            </span>
                        </div>
                    </div>
                </div>
                {/* third slide */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="max-w-sm rounded overflow-hidden hover:shadow-lg ">
                        <img className="w-full" src={cardImage3} alt="Card" />
                        <div className="px-6 py-4">
                            <div className="font-semibold flex items-center justify-evenly">
                                <img src={group3} alt=""></img>
                                Fast Delevery
                            </div>
                            <p className="text-gray-400 font-serif">
                                Keep your system in sync with automated web hook
                                base notifation each time link is paid how we
                                dream about our future.
                            </p>
                            <span className="flex items-center font-serif mt-2 cursor-pointer">
                                See More...
                                <FaArrowRight className="text-green-500 text-xl" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
