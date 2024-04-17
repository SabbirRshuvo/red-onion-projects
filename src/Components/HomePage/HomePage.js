import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Header from "../Body/Header/Header";
import Card from "../Body/Food/Card";
import Details from "../Body/Details/Details";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Card />
        </div>
    );
}

export default HomePage;
