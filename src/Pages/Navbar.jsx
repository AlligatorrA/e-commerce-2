import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./context-folder/cart-context";
import { useTheme } from "./context-folder/theme-context";
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'

function Navbar() {
    const { ThemeToogle } = useTheme();
    const { state } = useCart()
    return (
        <div>
            <header className="doc_header">
                <nav className="dis-flex align-center padding01">
                    <h2 className="padding01">A|R</h2>
                    <h2>
                        <Link
                            to='/'
                            className="pTectColor padding01 ">
                            Home
                        </Link>
                    </h2>
                    <h2>
                        <Link
                            to='/Product'
                            className="pTectColor padding01 "
                        >
                            shop-time
                        </Link>
                    </h2>
                    <div className="padding01 margin-left options_nav dis-flex align-center ">
                        <label className="search_label " htmlFor="search">

                            <input
                                className="outline search-input"
                                id="search"
                                type="text"
                                placeholder="search by Brand"
                            />
                            <span className="padding01 pTectColor">
                                {" "}
                                <i className="fas fa-search "></i>{" "}
                            </span>
                        </label>

                        <h3>
                            <Link to='/Cart'
                                className="pTectColor padding01 dis-flex coln-flex btn rltPos" >
                                <i className="fa-solid fa-cart-plus">
                                </i>cart
                                <span className="cross_icon"
                                > {state.itemsInCart}</span>
                            </Link>
                        </h3>
                        <h3>
                            <Link to='/User'
                                className="pTectColor padding01 dis-flex coln-flex btn align-center" >
                                <i className="fa-solid fa-user"></i>user
                            </Link>
                        </h3>
                        <span id="dark-theme" className="padding01 btn ">
                            <i
                                className="fa-solid fa-sun"
                                onClick={ThemeToogle}
                            ></i>
                        </span>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
