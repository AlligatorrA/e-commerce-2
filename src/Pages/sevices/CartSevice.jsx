import axios from "axios";

const AddToCart = async (token, product, cartDispatch) => {
    try {
        const res = await axios.post(
            '/api/user/cart', { product }, { headers: { authorization: token } }
        )
        cartDispatch({ type: 'ADD_TO_CART', payload: res.data.cart });
    } catch (error) {
        console.log(error);

    }
}
const RemoveFromCart = async (token, productId, cartDispatch) => {
    try {
        const res = await axios.delete(`/api/user/cart/${productId}`, {
            headers: {
                authorization: token,
            },
        });
        cartDispatch({
            type: 'REMOVE_FROM_CART',
            payload: res.data.cart,
        });
    } catch (error) {
        console.log(error);
    }
};


const updateCart = async (token, productId, quantityType, cartDispatch) => {
    try {
        const res = await axios.post(
            `/api/user/cart/${productId}`,
            {
                action: {
                    type: quantityType,
                },
            },
            {
                headers: {
                    authorization: token,
                },
            }
        );
        cartDispatch({
            type: 'UPDATE_QUANTITY',
            payload: res.data.cart,
        });
    } catch (error) {
        console.log(error);
    }
};

export { AddToCart, RemoveFromCart, updateCart }