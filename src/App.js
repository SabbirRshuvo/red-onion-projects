import "./App.css";
import Login from "./Components/Navigation/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Navigation/Signup/Signup";
import Cart from "./Components/Navigation/Cart/Cart";
import HomePage from "./Components/HomePage/HomePage";
function App() {
    return (
        <div className="App">
            <HomePage />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </div>
    );
}

export default App;
