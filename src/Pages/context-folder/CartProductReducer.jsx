
const ReducerFunc2 = (pre, cur) => {
    switch (cur.type) {
        case 'ADD_TO_CART':
            return {
                ...pre,
                itemsInCart: pre.itemsInCart + 1,
                productCollection: cur.payload
            }
        case 'UPDATE_QUANTITY':
            return {
                ...pre,
                itemsInCart: pre.itemsInCart + 1,
                productCollection: cur.payload
            }
        case 'REMOVE_FROM_CART':
            return {
                ...pre,
                itemsInCart: pre.itemsInCart - 1,
                productCollection: cur.payload
            }


        default:
            return pre

    }

}

export { ReducerFunc2 }