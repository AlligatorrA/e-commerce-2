import React from "react";

import './Styles/Product.css'
import './Styles/Asides.css'
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'
import { useCart } from "./context-folder/cart-context";

import AsidebarFunc from "./Aside";
import { products } from "../backend/db/products.js";
import { SortFunc } from "./pure-functions/SortFunc";
import { PriceRangeFunc } from "./pure-functions/PriceRangeFunc";
import { RatingFunc } from "./pure-functions/RatingFunc";
import { CategoriesFunc } from "./pure-functions/CategoriesFunc";
import { BrandFunc } from "./pure-functions/BrandFunc";
import useFetch from "./pure-functions/useFetch";
import useDocumentTitle from "./pure-functions/useDocumentTitle";


const ProductList = ({ product }) => {
    const { dispatch } = useCart();
    return (


        <div className="card_container">
            <div className="cardImageBox">
                <i className="fas fa-times cross_icon pTectColor"
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

            <footer className="card-footer">
                <button
                    className=" btn Card-button asideAlink"
                    onClick={() => dispatch({ type: "ITEMS_IN_CART", payload: product })}
                >
                    <span className="btn-txt-colr pTectColor">
                        Add to Cart{" "}
                    </span>
                </button>
                <button className="btn Card-button asideAlink">
                    {" "}
                    <span className="btn-txt-colr pTectColor ">
                        {" "}
                        Add to Wishlist
                    </span>
                    <i className="fas fa-heart pTectColor marginAll"></i>{" "}
                </button>
            </footer>
            <div className="spacer"></div>
        </div >
    )
}

const ProductPage = () => {

    const { state } = useCart()
    const { data, loader } = useFetch('/api/products')
    useDocumentTitle(`product Page`)

    const sortedProducts = SortFunc(products, state.sortBy)
    const priceRangeProduct = PriceRangeFunc(sortedProducts, state.price)
    const ratingProduct = RatingFunc(priceRangeProduct, state.rating)
    const categorizedProduct = CategoriesFunc(
        ratingProduct,
        state.categories.avaitor,
        state.categories.analog,
        state.categories.digital,
        state.categories.quartz,
        state.categories.luxury
    );
    const brandedProduct = BrandFunc(
        categorizedProduct,
        state.brand.rolax,
        state.brand.patekPhilippe,
        state.brand.blancpain,
        state.brand.omega
    );


    return (


        <div className="asideAnd_main">
            <AsidebarFunc />
            <main className="doc_main ">
                <div className="spacerhalf"></div>
                <div className="spacerhalf"></div>
                <span className=" btn" onClick>
                    <i className="fa-solid fa-bars padding01 pTectColor "></i>
                </span>
                <div className="spacerhalf"></div>
                <div className="marginAll padding01 overflow ">
                    <h1>Watches in Stock </h1>
                    <div className="spacerhalf"></div>
                    <div className="mappedProduct">
                        {
                            loader && <h1>Loading...</h1>
                        }
                        {
                            data?.products && brandedProduct.map((product, id) => (
                                <ProductList key={id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>

    );
};

export default ProductPage;
