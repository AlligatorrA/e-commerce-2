import React from 'react'
import './Styles/cart.css'
import './Styles/Product.css'
import './Styles/Asides.css'
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'
import useDocumentTitle from './pure-functions/useDocumentTitle'
import { useProductCart } from './context-folder/productCartContext'
import { RemoveFromCart, updateCart } from './sevices/CartSevice'
import { useAuth } from './context-folder/auth-context'
import { Bill } from './pure-functions/billFunc'
import { AddToWishlist } from './sevices/WishlistService'
import { useWishlist } from './context-folder/wishList-context'
import { useTheme } from './context-folder/theme-context'

function Cart() {
    const { cartState, cartDispatch } = useProductCart()
    const { wishlistDispatch } = useWishlist()
    const { ShowToast, showToast, toast } = useTheme()
    const { token } = useAuth()
    const { productCollection } = cartState;
    useDocumentTitle(`Cart (${cartState.itemsInCart})`)
    const billDetails = Bill(productCollection);
    const { currentPrice, discountPrice } = billDetails;
    const finalPrice = currentPrice - discountPrice;
    return (
        <>
            <div className='cart-Container overflow'>
                <div className="spacer01"></div>
                <h1 className='dis-flex just-center'>Cart: {productCollection.length}</h1>
                <span style={{ display: showToast ? "block" : "none" }} className="toast-added toast-add">{toast}</span>
                <div className="spacerhalf"></div>
                <hr />
                <div className="spacerhalf"></div>
                <div className='dis-flex maxWidth overflow'>
                    <div className='dis-flex coln-flex  overflow'>
                        {
                            productCollection.map(preProducts =>


                                <div className='card-footer cartWidth padding01  bd-rad' key={preProducts._id}>
                                    <img
                                        src={preProducts.url}
                                        width='250px' alt="" />
                                    <div className='f24px padTob '>
                                        <p>{preProducts.name} watch</p>
                                        <div className='dis-flex align-center padTob '>

                                            <button className='btn pTectColor f24px' onClick={() => {
                                                ShowToast(" Increasing item")
                                                updateCart(
                                                    token,
                                                    preProducts._id,
                                                    "increment",
                                                    cartDispatch
                                                );
                                            }}
                                            >&uArr;+&uArr;</button>
                                            <p>  ( {preProducts.qty} ) </p>
                                            {
                                                preProducts.qty > 1 ?
                                                    <button className='btn pTectColor f24px' onClick={() => {
                                                        ShowToast(" Decreasing item")
                                                        updateCart(
                                                            token,
                                                            preProducts._id,
                                                            "decrement",
                                                            cartDispatch
                                                        );
                                                    }} >&dArr; - &dArr;</button> : <button className='btn pTectColor f24px' onClick={() => {
                                                        ShowToast(" Removing to Cart")
                                                        RemoveFromCart(token, preProducts._id, cartDispatch)
                                                    }} > <i className="fa-solid fa-trash"></i> </button>
                                            }
                                        </div>
                                    </div>
                                    <div className='dis-flex align-center coln-flex just-center'>
                                        <p>

                                            &#8377; {preProducts.price} + &#8377;40 DeliveryCharge
                                        </p>
                                        <button className="btn Card-button asideAlink"
                                            onClick={() => {
                                                ShowToast(`Removing from Cart Adding to Wishlist`)
                                                RemoveFromCart(token, preProducts._id, cartDispatch)
                                                AddToWishlist(token, preProducts, wishlistDispatch)
                                            }}
                                        >
                                            {" "}
                                            <span className="btn-txt-colr pTectColor ">
                                                {" "}
                                                Move to Wishlist
                                            </span>
                                            <i className="fas fa-heart pTectColor marginAll"></i>{" "}
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>




                    <div className="card_container marginAll   pDetWid">
                        <section className="card_body">
                            <h2> products Detail</h2>
                            <hr />
                            <div className='card-footer padTob'>
                                <p>Price(  items)</p>
                                <p>&#8377; {currentPrice}</p>
                            </div>
                            <div className='card-footer padTob'>
                                <p> Discount Price</p>
                                <p>- &#8377; {discountPrice}</p>
                            </div>
                            <div className='card-footer padTob'>
                                <p> Delivery Charges</p>
                                <p>&#8377; 40</p>
                            </div>
                            <hr />
                            <div className='card-footer f24px padTob'>
                                <h4>Total Amount</h4>
                                <h4>&#8377; {finalPrice}</h4>
                            </div>

                        </section>


                        <div className="spacer"></div>
                    </div >
                </div>
                <div className='padding01 dis-flex just-center'>
                    <button className='btn padding01 f24px range-box outline pTectColor'>Place Order</button>
                </div>
            </div>



        </>
    )
}

export default Cart