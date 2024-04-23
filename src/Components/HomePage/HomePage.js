import React, { useState } from "react";
import Header from "../Body/Header/Header";
import Details from "../Body/Details/Details";
import APIDATA from "../../data/FoodData.json";
import { useNavigate } from "react-router-dom";

function HomePage({ price, name }) {
    const [activeFood, setActiveFood] = useState("dinner");
    const navigate = useNavigate();
    const handleCart = () => {
        navigate("/cartpage");
    };
    return (
        <div>
            <Header />

            <div>
                <div className="flex gap-4 justify-center m-5 text-xl">
                    <button
                        className="relative inline-block hover:text-red-400"
                        onClick={() => setActiveFood("breakfast")}
                    >
                        Breakfast
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
                    </button>
                    <button
                        className="relative inline-block hover:text-red-400"
                        onClick={() => setActiveFood("lunch")}
                    >
                        Lunch
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
                    </button>
                    <button
                        className="relative inline-block hover:text-red-400"
                        onClick={() => setActiveFood("dinner")}
                    >
                        Dinner
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
                    </button>
                </div>
            </div>

            <div className=" justify-center grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                {APIDATA[activeFood].map((food) => {
                    return (
                        <div>
                            <div
                                key={food.id}
                                className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 px-4 py-2 gap-2

                           transition duration-300 hover:shadow-2xl"
                            >
                                <img
                                    className=""
                                    src={food.imageURL}
                                    alt={""}
                                ></img>
                                <h4 className="font-serif text-xl ">
                                    {food.name}
                                </h4>
                                <span className="font-serif text-gray-400">
                                    {food.p}
                                </span>
                                <p className="text-lg font-semibold">
                                    {food.price}
                                </p>
                                <button
                                    className="bg-green-400 hover:bg-red-500 rounded-xl p-1 w-1/2"
                                    onClick={handleCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Details />
        </div>
    );
}

export default HomePage;
