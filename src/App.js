import "./App.css";
import { useTheme } from "./Pages/context-folder/theme-context";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import ProductPage from "./Pages/Product";
// import ProductsApiFetxh from "./Pages/ProductsApiFetxh";
import Cart from "./Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/ProfileFolder/User";
import { FormDisplay } from "./Pages/ProfileFolder/AddressManagment";

function App() {
  const { theme } = useTheme()

  return (
    <div className="root" style={{
      backgroundColor: theme === "light" ? "lightBlue" : "#15141a",
      color: theme === "light" ? "#15141a" : "white"
    }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/User" element={<User />} />
        <Route path='/address-management' element={<FormDisplay />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
