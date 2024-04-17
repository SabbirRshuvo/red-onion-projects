import React from "react";
import logo from "../../../images/logo2.png";
function Footer() {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    return (
        <footer className="bg-gray-900 text-lime-50">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3  justify-between">
                    {/* First Column */}
                    <div className="w-40">
                        <img src={logo} alt=""></img>
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
            </div>
            <div className="flex items-center justify-evenly pb-4">
                <div className="text-center text-gray-500 text-sm ">
                    Copyright warning &copy; {currentDate} | {currentTime}
                </div>
                <div className="text-center text-gray-500 text-sm p-2">
                    <span>Private and policy</span>
                    <span>Terms and conditon</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
