import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Header from "../Body/Header/Header";
import Card from "../Body/Food/Card";
import Details from "../Body/Details/Details";
import Footer from "../Body/Footer/Footer";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Card />
            <Details />
            <Footer />
        </div>
    );
}

export default HomePage;
