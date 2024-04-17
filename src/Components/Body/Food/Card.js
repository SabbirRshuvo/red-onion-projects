import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breakfast from "./Breakfast/Breakfast";

function Card() {
    return (
        <div>
            <div className="my-10 font-serif">
                <button className="relative overflow-hidden mx-3">
                    <span className="relative z-10">
                        <Link to="/breakfast">Breakfast</Link>
                    </span>

                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 "></span>
                </button>
                <button className="relative overflow-hidden mx-3">
                    <span className="relative z-10">
                        <Link to="/lunch">Lunch</Link>
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300"></span>
                </button>
                <button className="relative overflow-hidden mx-3">
                    <span className="relative z-10">
                        <Link to="/dinner">Dinner</Link>
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300"></span>
                </button>
            </div>
        </div>
    );
}

export default Card;
