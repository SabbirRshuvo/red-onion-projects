import React from "react";
import backgroundImage from "../../../images/bannerbackground.png";
function Header() {
    return (
        <div
            className="flex flex-col items-center justify-center p-60 bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="">
                <h1 className="text-3xl  mb-4 font-serif font-semibold">
                    Best Food waiting for you..
                </h1>
                <div className="flex items-center font-serif">
                    <input
                        type="text"
                        placeholder="Search Food Items"
                        className="border border-gray-300 rounded-l-full  px-4 py-2 focus:outline-none"
                    />
                    <button className="bg-red-600 text-white px-6 py-2 rounded-r-full hover:bg-red-700 focus:outline-none">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
