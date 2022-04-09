import React from "react";

import './Styles/Asides.css'
import './Styles/navbar.css'
import './Styles/Necessary.css'
import './Styles/Universal.css'
import { useCart } from "./context-folder/cart-context";



const AsidebarFunc = () => {
    const { state, dispatch } = useCart();

    return (
        <aside className="doc_aside dis-flex coln-flex overflow">
            <div className="spacer01 "></div>
            <div className="container-flex">
                <button
                    className="font1en  pTectColor asideAlink padding01"
                    disabled
                >
                    Filter
                </button>
                <button className="font1en  pTectColor asideAlink padding01" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>
                    Clear detail
                </button>
            </div>
            <div className="spacerhalf"></div>
            <hr />
            <div className="spacerhalf"></div>
            <ul className="marginL2em">
                <h2 className="padding01 ">Short</h2>
                <div className="spacerhalf"></div>
                <div>
                    <li className="font1en">
                        <label>
                            <input
                                type="radio"
                                name="short"
                                checked={state.sortBy === 'HIGH_TO_LOW'}
                                onChange={() =>
                                    dispatch({
                                        type: "HIGH_TO_LOW"
                                    })
                                }
                            />{" "}
                            Price high to low
                        </label>
                    </li>
                    <div className="spacerhalf"></div>
                    <li className="font1en">
                        <label>
                            <input
                                type="radio"
                                name="short"
                                checked={state.sortBy === 'LOW_TO_HIGH'}
                                onChange={() =>
                                    dispatch({
                                        type: "LOW_TO_HIGH"
                                    })
                                }
                            />{" "}
                            Price low to high
                        </label>
                    </li>
                </div>
                <div className="spacerhalf"></div>
                <div className="spacerhalf"></div>
            </ul>
            <ul className="marginL2em">
                <div className="spacerhalf"></div>
                <li className="font1en">Price Range</li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <input
                        type="range"
                        min="6000"
                        max="20000"
                        value={state.price}
                        checked={state.price}
                        className="Pricerange-box"
                        onChange={(e) =>
                            dispatch({
                                type: "PRICE_RANGE",
                                payload: e.target.value
                            })
                        }
                    />
                </li>
                <div className="spacerhalf"></div>
                <p className=" card-footer ">
                    <span>min: Rs.- 6000</span>
                    max: Rs.- 20,000
                </p>
                <div className="spacerhalf"></div>
                <div className="spacer01"></div>
                <h2>Consumer's Rating</h2>
                <div className="spacerhalf"></div>
                <hr />
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            value="5"
                            onChange={(e) =>
                                dispatch({
                                    type: "RATING",
                                    payload: e.target.value
                                })
                            }
                        />{" "}
                        5<i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <p className="font1en">
                            <input
                                type="range"
                                min="1"
                                max="5"
                                className="range-box"
                                value={5}
                                readOnly
                            />
                        </p>
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            value="4"
                            onChange={(e) =>
                                dispatch({
                                    type: "RATING",
                                    payload: e.target.value
                                })
                            }
                        />
                        4<i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>{" "}
                        <p className="font1en">
                            <input
                                type="range"
                                min="1"
                                max="5"
                                className="range-box"
                                value={4}
                                readOnly
                            />
                        </p>
                    </label>
                </li>{" "}
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            value="3"
                            onChange={(e) =>
                                dispatch({
                                    type: "RATING",
                                    payload: e.target.value
                                })
                            }
                        />{" "}
                        3<i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>{" "}
                        <p className="font1en">
                            <input
                                type="range"
                                min="1"
                                max="5"
                                className="range-box"
                                value={3}
                                readOnly
                            />
                        </p>
                    </label>
                </li>{" "}
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            value="2"
                            onChange={(e) =>
                                dispatch({
                                    type: "RATING",
                                    payload: e.target.value
                                })
                            }
                        />{" "}
                        2<i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>{" "}
                        <p className="font1en">
                            <input
                                type="range"
                                min="1"
                                max="5"
                                className="range-box"
                                value={2}
                                readOnly
                            />
                        </p>
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            value="1"
                            onChange={(e) =>
                                dispatch({
                                    type: "RATING",
                                    payload: e.target.value
                                })
                            }
                        />{" "}
                        1<i className="fa-solid fa-star"></i>{" "}
                        <p className="font1en">
                            <input
                                type="range"
                                min="1"
                                max="5"
                                className="range-box"
                                value={1}
                                readOnly
                            />
                        </p>
                    </label>
                </li>
                <div className="spacer01"></div>
                <div className="spacerhalf"></div>
                <h2>Categories</h2>
                <div className="spacerhalf"></div>
                <hr />
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.categories.avaitor}
                            onChange={() => dispatch({ type: "AVAITOR" })}
                        />{" "}
                        Aviator-watch
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.categories.analog}
                            onChange={() => dispatch({ type: "ANALOG" })}
                        />{" "}
                        Ananlog-watch
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.categories.digital}
                            onChange={() => dispatch({ type: "DIGITAL" })}
                        />{" "}
                        Digital-watch
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.categories.quartz}
                            onChange={() => dispatch({ type: "QUARTZ" })}
                        />{" "}
                        Quartz Watch
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.categories.luxury}
                            onChange={() => dispatch({ type: "LUXURY" })}
                        />{" "}
                        luxury-watch
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <div className="spacerhalf"></div>
                <div className="spacer"></div>
                <h2>Brands</h2>
                <hr />
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.brand.rolax}
                            onChange={() => dispatch({ type: "ROLAX" })}
                        />{" "}
                        Rolex
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.brand.patekPhilippe}
                            onChange={() => dispatch({ type: "PATEK_PHILIPPE" })}
                        />{" "}
                        Patek Philippe
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.brand.blancpain}
                            onChange={() => dispatch({ type: "BLANCPAIN" })}
                        />{" "}
                        Blancpain
                    </label>
                </li>
                <div className="spacerhalf"></div>
                <li className="font1en">
                    <label>
                        <input
                            type="checkbox"
                            className="check-box"
                            checked={state.brand.omega}
                            onChange={() => dispatch({ type: "OMEGA" })}
                        />{" "}
                        Omega
                    </label>
                </li>
            </ul>
            <div className="spacerhalf"></div>
        </aside>
    );
};

export default AsidebarFunc;
