const WishReducer = (pre, cur) => {
    switch (cur.type) {
        case 'ADD_TO_WISHLIST':
            return {
                ...pre,
                itemsInWishlist: pre.itemsInWishlist + 1,
                wishlistCollection: cur.payload
            }
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...pre,
                itemsInWishlist: pre.itemsInWishlist - 1,
                wishlistCollection: cur.payload
            }

        default:
            return pre
    }
}

export { WishReducer }