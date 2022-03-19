const PriceRangeFunc = (product, price) => {
    return product.filter((items) => items.price <= price);
};
export { PriceRangeFunc };
