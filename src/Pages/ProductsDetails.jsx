import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { products } from '../backend/db/products';
import { useAuth } from './context-folder/auth-context';
import { useProductCart } from './context-folder/productCartContext';
import { useTheme } from './context-folder/theme-context';
import useDocumentTitle from './pure-functions/useDocumentTitle';
import { AddToCart } from './sevices/CartSevice';
import './Styles/productDetails.css'

const ProductsDetails = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const { token } = useAuth()
    const { cartDispatch } = useProductCart()
    const { ShowToast, showToast, toast } = useTheme()
    useDocumentTitle(`product Details `)
    const getProductDetail = (products, productId) => {
        return products.find(product => product._id === productId)
    }
    const productsData = getProductDetail(products, productId)
    return (
        <>
            {
                productsData &&
                <div className='cart-Container card-footer cartWidth2 padding01  bd-rad ' >

                    <span style={{ display: showToast ? "block" : "none" }} className="toast-added toast-add">{toast}</span>
                    <img
                        src={productsData.url}
                        width='400px' height={300} alt="" />
                    <div className='f24px padTob marginAll'>
                        <p>{productsData.categories} watch</p>
                        <p>best of {productsData.brand}  brand watch</p>
                        <p> -{productsData.description}  </p>
                        <p> -only Rs. {productsData.price} INR </p>
                        <p> -{productsData.rating} star rating </p>
                        <p> -{productsData.discount} % discount </p>
                        <div className='dis-flex align-center padTob marginAll'>

                            <button className='btn pTectColor f24px' >OrderNow</button>
                            <button className='btn pTectColor f24px'
                                onClick={() => {
                                    ShowToast(" Adding to Cart")
                                    token ? AddToCart(token, products, cartDispatch) : navigate('/LoginForm')
                                }}>Add to Cart</button>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default ProductsDetails