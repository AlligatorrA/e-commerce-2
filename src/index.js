import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./Pages/context-folder/theme-context";
import { CartProvider } from "./Pages/context-folder/cart-context";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Pages/context-folder/auth-context";
import { ProductCartProvider } from "./Pages/context-folder/productCartContext";
import { WishlistProvider } from "./Pages/context-folder/wishList-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductCartProvider>
          <ThemeProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </ThemeProvider>
        </ProductCartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
