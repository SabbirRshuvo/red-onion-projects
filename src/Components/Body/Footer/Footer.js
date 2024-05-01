import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="grid  grid-cols-3  justify-between bottom-auto">
                {/* First Column */}
                <div className="w-40">
                    <Link to="/">
                        <img src={logo} alt=""></img>
                    </Link>
                </div>

                {/* Second Column */}
                <div className="text-left">
                    <ul>
                        <li>
                            <a href="/">About Online food</a>
                        </li>
                        <li>
                            <a href="/">Read our blog</a>
                        </li>
                        <li>
                            <a href="/">Sign up to deliver</a>
                        </li>
                        <li>
                            <a href="/">Add your restaurant</a>
                        </li>
                    </ul>
                </div>

                {/* Third Column */}
                <div className="text-left">
                    <ul>
                        <li>
                            <a href="/">Get Help</a>
                        </li>
                        <li>
                            <a href="/">Read FAQs</a>
                        </li>
                        <li>
                            <a href="/">Viwe all cities</a>
                        </li>
                        <li>
                            <a href="/">Restaureants near me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
