import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./context-folder/auth-context";
import { useCart } from "./context-folder/cart-context";
import { useProductCart } from "./context-folder/productCartContext";
import { useTheme } from "./context-folder/theme-context";
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'

function Navbar() {
    const { cartState, cartDispatch } = useProductCart()
    const { ThemeToogle, theme } = useTheme();
    const { state } = useCart()
    const { token, LogOutHandler } = useAuth()
    return (
        <div>
            <header className="doc_header">
                <nav className="dis-flex align-center padding01">

                    <NavLink
                        to='/'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "green" : 'rgb(0, 145, 241)'
                            }
                        }}
                        className="pTectColor padding01 ">

                        <h2 className="padding01">A|R</h2>
                    </NavLink>
                    <h2>
                        <NavLink
                            to='/Product'
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "green" : 'rgb(0, 145, 241)'
                                }
                            }}
                            className="pTectColor padding01 "
                        >
                            shop-time
                        </NavLink>
                    </h2>



                    <div className="padding01 margin-left options_nav dis-flex align-center ">
                        <label className="search_label " htmlFor="search">

                            <input
                                className="outline search-input"
                                id="search"
                                type="text"
                                onChange={() => dispatch({ type: 'SEARCH_FILTER' })}
                                placeholder="search by Brand"
                            />
                            <span className="padding01 pTectColor">
                                {" "}
                                <i className="fas fa-search "></i>{" "}
                            </span>
                        </label>
                        {
                            token ?

                                <div className="padding01 margin-left options_nav dis-flex align-center ">
                                    <h3>
                                        <NavLink to='/Wishlist'
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "green" : 'rgb(0, 145, 241)'
                                                }
                                            }}
                                            className="pTectColor padding01 dis-flex coln-flex btn  align-center  rltPos" >
                                            <i className="fa-solid fa-heart"></i>wishlist
                                            <span className="cross_icon"
                                            > {state.itemsInWishlist}</span>
                                        </NavLink>
                                    </h3>
                                    <h3>
                                        <NavLink to='/Cart'
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "green" : 'rgb(0, 145, 241)'
                                                }
                                            }}
                                            className="pTectColor padding01 dis-flex coln-flex btn rltPos" >
                                            <i className="fa-solid fa-cart-plus">
                                            </i>cart
                                            <span className="cross_icon"
                                            > {cartState.itemsInCart}</span>
                                        </NavLink>
                                    </h3>



                                    <h3>
                                        <NavLink to='/User'
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "green" : 'rgb(0, 145, 241)'
                                                }
                                            }}
                                            className="pTectColor padding01 dis-flex coln-flex btn align-center" >
                                            <i className="fa-solid fa-user"></i>user
                                        </NavLink>
                                    </h3>

                                    <button
                                        // style={({ isActive }) => {
                                        //     return {
                                        //         color: isActive ? "green" : 'rgb(0, 145, 241)'
                                        //     }
                                        // }}
                                        onClick={LogOutHandler}
                                        className="pTectColor padding01 dis-flex coln-flex btn align-center" >
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        Logout
                                    </button>
                                </div>
                                :
                                <h3>
                                    <NavLink to='/LoginForm'
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "green" : 'rgb(0, 145, 241)'
                                            }
                                        }}
                                        className="pTectColor padding01 dis-flex coln-flex btn align-center" >
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                        Login
                                    </NavLink>

                                </h3>

                        }
                        <span id="dark-theme" className="padding01 btn  " onClick={ThemeToogle}>
                            {theme === 'light' ?
                                <i className="fa-solid fa-moon" ></i> : <i className="fa-solid fa-sun"></i>
                            }
                        </span>
                    </div>

                </nav>
            </header>
        </div>
    );
}

export default Navbar;
