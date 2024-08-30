import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUp";
import CopyRightPage from "./Footer/CopyRightsPage";
import AppBarrs from "./Components/AppBar";
function App() {

  return (
    <div className="App">
      <AppBarrs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignUpPage />} />
      </Routes>
      <CopyRightPage />
    </div>
  );
}

export default App;
