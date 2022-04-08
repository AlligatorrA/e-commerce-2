import axios from "axios";

const AddToWishlist = async (token, product, wishlistDispatch) => {
    try {
        const res = await axios.post("/api/user/wishlist",
            { product },
            {
                headers: {
                    authorization: token,
                },
            })
        wishlistDispatch({
            type: 'ADD_TO_WISHLIST',
            payload: res.data.wishlist,
        });
    } catch (error) {
        console.log(error);
    }
}

const RemoveFromWishlist = async (token, productId, wishlistDispatch) => {
    try {
        const res = await axios.delete(`/api/user/wishlist/${productId}`, {
            headers: { authorization: token },
        });
        wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: res.data.wishlist,
        })
    } catch (error) {
        console.log(error);
    }
}
export { AddToWishlist, RemoveFromWishlist }