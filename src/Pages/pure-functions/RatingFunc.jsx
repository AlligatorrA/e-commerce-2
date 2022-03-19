const RatingFunc = (products, rating) => {
    if (rating) {
        return products.filter((items) => items.rating >= rating);
    }
    return products;
};

export { RatingFunc };
