const addToCartFunc = (pre, cur) => {
    const previousProduct = pre.productCollection.find(items => items.id === cur.payload.id)
    return {
        ...pre,
        itemsInCart: pre.itemsInCart + 1,
        totalPrice: pre.totalPrice + cur.payload.price,
        productCollection: previousProduct ? pre.productCollection.map(items => items.id === cur.payload.id
            ? { ...items, quant: items.quant + 1 } : items
        )
            : [
                ...pre.productCollection,
                {
                    id: cur.payload.id,
                    quant: 1,
                    name: cur.payload.brand,
                    price: cur.payload.price,
                    img: cur.payload.url

                }
            ]
    };

}

const increaseQuantity = (pre, cur) => {
    return {
        ...pre,
        itemsInCart: pre.itemsInCart + 1,
        totalPrice: pre.totalPrice + cur.payload.price,
        productCollection: pre.productCollection.map((items) => items.id === cur.payload.id ?
            {
                ...items,
                quant: cur.payload.quant + 1
            } : items)
    }
}

const decreaseQuantity = (pre, cur) => {
    return {
        ...pre,
        itemsInCart: pre.itemsInCart - 1,
        totalPrice: pre.totalPrice - cur.payload.price,
        productCollection: cur.payload.quant > 1 ? pre.productCollection.map(items => items.id === cur.payload.id ? {
            ...items,
            id: cur.payload.id,
            quant: cur.payload.quant - 1
        } : items
        )
            : pre.productCollection.filter(itemsId => itemsId.id !== cur.payload.id)
    }
}


export const ReducerFunc = (pre, cur) => {
    switch (cur.type) {
        case "ITEMS_IN_CART":
            return addToCartFunc(pre, cur)

        case "INCREASE_QUANT_IN_CART":
            return increaseQuantity(pre, cur)

        case "DECREASE_QUANT_IN_CART":
            return decreaseQuantity(pre, cur)

        case "HIGH_TO_LOW":
            return {
                ...pre,
                sortBy: cur.type
            };
        case "LOW_TO_HIGH":
            return {
                ...pre,
                sortBy: cur.type
            };
        case "PRICE_RANGE":
            return {
                ...pre,
                price: cur.payload
            };
        case "RATING":
            return {
                ...pre,
                rating: parseInt(cur.payload, 10)
            };
        case "AVAITOR":
            return {
                ...pre,
                categories: {
                    ...pre.categories,
                    avaitor: !pre.categories.avaitor
                }
            };
        case "ANALOG":
            return {
                ...pre,
                categories: {
                    ...pre.categories,
                    analog: !pre.categories.analog
                }
            };
        case "DIGITAL":
            return {
                ...pre,
                categories: {
                    ...pre.categories,
                    digital: !pre.categories.digital
                }
            };
        case "QUARTZ":
            return {
                ...pre,
                categories: {
                    ...pre.categories,
                    quartz: !pre.categories.quartz
                }
            };
        case "LUXURY":
            return {
                ...pre,
                categories: {
                    ...pre.categories,
                    luxury: !pre.categories.luxury
                }
            };
        case "ROLAX":
            return {
                ...pre,
                brand: {
                    ...pre.brand,
                    rolax: !pre.brand.rolax
                }
            };
        case "PATEK_PHILIPPE":
            return {
                ...pre,
                brand: {
                    ...pre.brand,
                    patekPhilippe: !pre.brand.patekPhilippe
                }
            };
        case "BLANCPAIN":
            return {
                ...pre,
                brand: {
                    ...pre.brand,
                    blancpain: !pre.brand.blancpain
                }
            };
        case "OMEGA":
            return {
                ...pre,
                brand: {
                    ...pre.brand,
                    omega: !pre.brand.omega
                }
            };
        default:
            return pre;
    }
};
