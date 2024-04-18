import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Header from "../Body/Header/Header";
import Details from "../Body/Details/Details";
import FoodDetails from "../Body/Food/FoodDetails";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <FoodDetails />
            <Details />
        </div>
    );
}

export default HomePage;
