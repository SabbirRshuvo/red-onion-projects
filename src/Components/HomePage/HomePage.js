import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Header from "../Body/Header/Header";
import Details from "../Body/Details/Details";
import Lunch from "../Body/Food/Lunch/Lunch";
import FoodButton from "../Body/FoodButton/FoodButton";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <FoodButton />
            <Lunch />
            <Details />
        </div>
    );
}

export default HomePage;
