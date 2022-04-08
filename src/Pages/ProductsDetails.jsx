import React from 'react'
import { useParams } from "react-router-dom";
import { products } from '../backend/db/products';
import './Styles/productDetails.css'

const ProductsDetails = () => {
    const { productId } = useParams()
    const getProductDetail = (products, productId) => {
        return products.find(product => product._id === productId)
    }
    const productsData = getProductDetail(products, productId)
    return (
        <>
            {
                productsData &&
                <div className='cart-Container card-footer cartWidth2 padding01  bd-rad ' >
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
                            <button className='btn pTectColor f24px'>Add to Cart</button>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default ProductsDetails