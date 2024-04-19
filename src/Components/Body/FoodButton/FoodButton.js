import React from "react";
import { useNavigate } from "react-router-dom";

const FoodButton = () => {
    const navigate = useNavigate();
    const handleBreakfast = () => {
        navigate("/breakfast");
    };
    const handleLunch = () => {
        navigate("/lunch");
    };
    const handleDinner = () => {
        navigate("/dinner");
    };

    return (
        <div className="flex justify-center items-center mt-5">
            <div className="flex space-x-4 font-serif font-semibold">
                <button
                    className="hover:underline hover:text-red-500"
                    onClick={() => handleBreakfast("Breakfast")}
                >
                    Breakfast
                </button>
                <button
                    className="hover:underline hover:text-red-500 text-red-300"
                    onClick={() => handleLunch("lunch")}
                >
                    Lunch
                </button>
                <button
                    className=" hover:underline hover:text-red-500"
                    onClick={() => handleDinner("dinner")}
                >
                    Dinner
                </button>
            </div>
        </div>
    );
};

export default FoodButton;
