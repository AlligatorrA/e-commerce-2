

export const ReducerFunc = (pre, cur) => {
    switch (cur.type) {
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

        case "CLEAR_ALL":
            return {
                sortBy: '',
                price: 20000,
                rating: '',
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
            }

        default:
            return pre;
    }
};
