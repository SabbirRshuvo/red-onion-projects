import "./App.css";
import Login from "./Components/Navigation/Login/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import Signup from "./Components/Navigation/Signup/Signup";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Body/Footer/Footer";
import CartPage from "./Components/Navigation/Cart/CartPage";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/cartpage" element={<CartPage />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
