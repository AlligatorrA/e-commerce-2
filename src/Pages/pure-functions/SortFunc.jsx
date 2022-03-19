const SortFunc = (product, sortBy) => {
    if (sortBy && sortBy === "HIGH_TO_LOW") {
        return product.sort((item1, item2) => item2["price"] - item1["price"]);
    }
    if (sortBy && sortBy === "LOW_TO_HIGH") {
        return product.sort((item1, item2) => item1["price"] - item2["price"]);
    }
    return product;
};

export { SortFunc };
