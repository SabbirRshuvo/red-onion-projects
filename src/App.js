import "./App.css";
import Login from "./Components/Navigation/Login/Login";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Navigation/Signup/Signup";
import Cart from "./Components/Navigation/Cart/Cart";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </div>
    );
}

export default App;
