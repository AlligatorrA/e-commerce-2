import { createContext, useContext, useReducer } from "react";
import { ReducerFunc } from "./ReducerFunc";

const defaulCart = {
    item: 0
};
const CartContext = createContext(defaulCart);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReducerFunc, {
        sortBy: null,
        price: 20000,
        rating: "",
        categories: {
            avaitor: false,
            analog: false,
            digital: false,
            quartz: false,
            luxury: false
        },
        brand: {
            rolax: false,
            patekPhilippe: false,
            blancpain: false,
            omega: false
        },
        productSearchFilter: ''
    });
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };