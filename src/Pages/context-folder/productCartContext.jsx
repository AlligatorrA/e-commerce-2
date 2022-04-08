import { createContext, useContext, useReducer } from "react";
import { ReducerFunc2 } from "../context-folder/CartProductReducer";

const defaulCart = {
    item: 0
};
const CartContext = createContext(defaulCart);

const ProductCartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(ReducerFunc2, {
        itemsInCart: 0,
        productCollection: [],
        totalPrice: 0

    });
    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useProductCart = () => useContext(CartContext);

export { useProductCart, ProductCartProvider };