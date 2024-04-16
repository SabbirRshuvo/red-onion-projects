import React from "react";
import logo from "../../../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="bg-gray-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 mr-2" />
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/cart"
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                alt="Shopping Cart"
                                classNames="text-gray-600 text-xl"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="text-white hover:text-gray-300"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="text-white hover:text-gray-300 "
                        >
                            SignUp
                        </Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
