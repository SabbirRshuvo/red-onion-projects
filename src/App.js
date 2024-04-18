import "./App.css";
import Login from "./Components/Navigation/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Navigation/Signup/Signup";
import Cart from "./Components/Navigation/Cart/Cart";
import HomePage from "./Components/HomePage/HomePage";
import Breakfast from "./Components/Body/Food/Breakfast/Breakfast";
import Lunch from "./Components/Body/Food/Lunch/Lunch";
import Dinner from "./Components/Body/Food/Dinner/Dinner";
import Footer from "./Components/Body/Footer/Footer";
function App() {
    return (
        <div className="App">
            <HomePage />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/breakfast" element={<Breakfast />}></Route>
                <Route path="/lunch" element={<Lunch />}></Route>
                <Route path="/dinner" element={<Dinner />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
