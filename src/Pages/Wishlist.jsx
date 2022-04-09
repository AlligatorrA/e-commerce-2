import React from 'react'
import { useAuth } from './context-folder/auth-context';
import { useCart } from './context-folder/cart-context';
import { useWishlist } from './context-folder/wishList-context';
import useDocumentTitle from './pure-functions/useDocumentTitle';
import { AddToCart } from './sevices/CartSevice';
import { RemoveFromWishlist } from './sevices/WishlistService';
import { useProductCart } from './context-folder/productCartContext';
import { Link } from 'react-router-dom';
import { useTheme } from './context-folder/theme-context';

function Wishlist() {
    const { state } = useCart()
    const { wishlistState, wishlistDispatch } = useWishlist()
    const { token } = useAuth()
    const { ShowToast, showToast, toast } = useTheme()
    const { cartDispatch, cartState } = useProductCart()
    const { wishlistCollection } = wishlistState
    useDocumentTitle(`WIshlist ${state.itemsInWishlist} `)


    return (
        <div className='cart-Container overflow'>
            <div className="spacer01"></div>
            <h1>Wishlist {state.itemsInWishlist}</h1>
            <span style={{ display: showToast ? "block" : "none" }} className="toast-added toast-add">{toast}</span>
            <div className="mappedProduct">
                {
                    wishlistCollection.map(product => (


                        <div className="card_container" key={product._id}>
                            <div className="cardImageBox">
                                <i className="fas fa-heart cross_icon pTectColor"
                                ></i>
                                <img
                                    className="card_image"
                                    src={product.url}
                                    height="300px"
                                    alt="oops "
                                />
                            </div>

                            <section className="card_body">
                                <h2> '{product.categories}' watch</h2>
                                <p className="card_paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4> {product.brand} Brand</h4>
                                <p> Rs.-{product.price}</p>
                                <p>{product.discount}% discount</p>
                                <p>
                                    {product.rating}
                                    <i className="fa-solid fa-star"></i> rating
                                </p>
                            </section>

                            <footer className="card-footer ">

                                <button className="btn Card-button asideAlink"
                                    onClick={() => {
                                        ShowToast(" Removing From Wishlist")
                                        RemoveFromWishlist(token, product._id, wishlistDispatch)
                                    }}

                                >
                                    {" "}
                                    <span className="btn-txt-colr pTectColor font1en ">
                                        {" "}
                                        Remove from Wishlist
                                    </span>
                                </button>
                                {
                                    cartState.productCollection.find(items => items._id === product._id) ?

                                        <Link to='/cart' ><button
                                            className=" btn Card-button asideAlink"
                                        >
                                            <span className="btn-txt-colr pTectColor">
                                                Go to the Cart{" "}
                                            </span>
                                        </button ></Link> : <button
                                            className=" btn Card-button asideAlink"
                                            onClick={() => {
                                                ShowToast(" Adding to Cart")
                                                { AddToCart(token, product, cartDispatch) }
                                            }}
                                        >
                                            <span className="btn-txt-colr pTectColor">
                                                Add to Cart{" "}
                                            </span>
                                        </button>}
                            </footer>
                            <div className="spacer"></div>
                        </div >
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist