import "./App.css";
import { useTheme } from "./Pages/context-folder/theme-context";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import ProductPage from "./Pages/Product";
import Cart from "./Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/ProfileFolder/User";
import { FormDisplay } from "./Pages/ProfileFolder/AddressManagment";
import Wishlist from "./Pages/Wishlist";
import LoginForm from "./Pages/LoginForm";
import ProductsDetails from "./Pages/ProductsDetails";
import RequireAuth from "./Pages/RequireAuth";

function App() {
  const { theme } = useTheme()

  return (
    <div className="root" style={{
      backgroundColor: theme === "light" ? "lightblue" : "#15141a",
      color: theme === "light" ? "#15141a" : "white"
    }}>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/User" element={
          <RequireAuth>
            <User />
          </RequireAuth>
        } />
        <Route path="/Wishlist" element={
          <RequireAuth>

            <Wishlist />
          </RequireAuth>
        } />
        <Route path="/Product" element={<ProductPage />} />
        <Route path='/LoginForm' element={< LoginForm />} />
        <Route path='/address-management' element={<FormDisplay />} />
        <Route path="/ProductDetails/:productId" element={<ProductsDetails />} />
        <Route path='*' element={
          <div className='userClass dis-flex align-center just-center'>
            <h2>Oops! You have been misguded mate! Nothing here....<span role='emojii' aria-label="emoji"> 👻👻👻 </span></h2>
          </div>
        } />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;

