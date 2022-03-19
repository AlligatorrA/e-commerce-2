import React from 'react'
import { useCart } from './context-folder/cart-context'
import './Styles/cart.css'
import './Styles/Product.css'
import './Styles/Asides.css'
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'
import useDocumentTitle from './pure-functions/useDocumentTitle'

function Cart() {
    const { state, dispatch } = useCart()
    const { itemsInCart, totalPrice, productCollection } = state
    useDocumentTitle(`Cart ${itemsInCart}`)
    return (
        <>
            <div className='cart-Container overflow'>
                <div className="spacer01"></div>
                <h1 className='dis-flex just-center'>Cart: ({itemsInCart})</h1>
                <div className="spacerhalf"></div>
                <hr />
                <div className="spacerhalf"></div>
                <div className='dis-flex maxWidth overflow'>
                    <div className='dis-flex coln-flex  overflow'>
                        {
                            productCollection.map(preProducts =>


                                <div className='card-footer cartWidth padding01  bd-rad' key={preProducts.id}>
                                    <img
                                        src={preProducts.img}
                                        width='250px' alt="" />
                                    <div className='f24px padTob '>
                                        <p>{preProducts.name} watch</p>
                                        <div className='dis-flex align-center padTob '>

                                            <button className='btn pTectColor f24px' onClick={() => dispatch({
                                                type: "INCREASE_QUANT_IN_CART",
                                                payload: preProducts
                                            })}>&uArr;+&uArr;</button>
                                            <p>  ( {preProducts.quant} ) </p>
                                            <button className='btn pTectColor f24px' onClick={() => dispatch({
                                                type: "DECREASE_QUANT_IN_CART",
                                                payload: preProducts
                                            })}>&dArr;-&dArr;</button>
                                        </div>
                                    </div>
                                    <div className='dis-flex align-center'>&#8377; {preProducts.price} + &#8377;40 DeliveryCharge</div>
                                </div>
                            )
                        }
                    </div>




                    <div className="card_container marginL2em   pDetWid">
                        <section className="card_body">
                            <h2> products Detail</h2>
                            <hr />
                            <div className='card-footer padTob'>
                                <p>Price( {itemsInCart} items)</p>
                                <p>&#8377; {state.totalPrice}</p>
                            </div>
                            <div className='card-footer padTob'>
                                <p> Discount Price</p>
                                <p>- &#8377; 40</p>
                            </div>
                            <div className='card-footer padTob'>
                                <p> Delivery Charges</p>
                                <p>&#8377; 40</p>
                            </div>
                            <hr />
                            <div className='card-footer f24px padTob'>
                                <h4>Total Amount</h4>
                                <h4>&#8377;  {totalPrice}</h4>
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