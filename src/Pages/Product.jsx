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
import { Link } from "react-router-dom";
import { useTheme } from "./context-folder/theme-context";
import { useAuth } from "./context-folder/auth-context";
import { useProductCart } from "./context-folder/productCartContext";
import { AddToCart } from "./sevices/CartSevice";
import { useNavigate } from "react-router";
import loadingImg from '../images/circleSpin.gif'
import { AddToWishlist } from "./sevices/WishlistService";
import { useWishlist } from "./context-folder/wishList-context";


const ProductList = ({ product }) => {

    const navigate = useNavigate();
    const { cartState, cartDispatch } = useProductCart();
    const { theme, asideShow } = useTheme()
    const { token } = useAuth()
    const { wishlistDispatch } = useWishlist()
    const { productCollection } = cartState
    return (


        <div className="card_container" style={{ width: asideShow ? '100vw' : '23rem' }}>
            <Link to={`/ProductDetails/${product._id}`} style={{ color: theme === "light" ? "#15141a" : "white" }}>
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
                    <div className="card_paragraph">
                        <p>{product.description}</p>

                    </div>
                    <h4> {product.brand} Brand</h4>
                    <p> Rs.-{product.price}</p>
                    <p>{product.discount}% discount</p>
                    <p>
                        {product.rating}
                        <i className="fa-solid fa-star"></i> rating
                    </p>
                </section>

            </Link>
            <footer className="card-footer">
                {productCollection.find(items => items._id === product._id) ? <Link to='/Cart' >   <button
                    className=" btn Card-button asideAlink"
                >
                    <span className="btn-txt-colr pTectColor">
                        Going to the Cart{" "}
                    </span>
                </button></Link> :
                    <button
                        className=" btn Card-button asideAlink"
                        onClick={() => {
                            { token ? AddToCart(token, product, cartDispatch) : navigate('/LoginForm') }
                        }}
                    >
                        <span className="btn-txt-colr pTectColor">
                            Add to Cart{" "}
                        </span>
                    </button>}
                <button className="btn Card-button asideAlink"
                    onClick={() => {
                        token ? AddToWishlist(token, product, wishlistDispatch) : navigate("/LoginForm")
                    }}
                >
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
    const { asideShow, showProduct } = useTheme()
    const { data, loader } = useFetch('/api/products');

    useDocumentTitle(`product Page - where you buy watches...`)


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
            {asideShow && <AsidebarFunc />}
            <main className="doc_main">
                <div className="spacerhalf"></div>
                <div className="spacerhalf"></div>
                <span className=" btn" onClick={showProduct}>
                    <i className="fa-solid fa-bars padding01 pTectColor "></i>
                </span>
                <div className="spacerhalf"></div>
                <div className="marginAll padding01 overflow  ">
                    <h1 className="dis-flex just-center">Watches in Stock </h1>
                    <div className="spacerhalf"></div>
                    <div className="mappedProduct">
                        {
                            loader && <h1>
                                <img src={loadingImg} width={400} alt='Loading...' /> loading</h1>
                        }
                        {
                            data?.products && brandedProduct.map((product, _id) => (
                                <ProductList key={_id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>

    );
};

export default ProductPage;
