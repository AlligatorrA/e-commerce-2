const Bill = (productCollection) => {
    const billDetails = productCollection.reduce(
        (acc, item) => ({
            currentPrice: acc.currentPrice + Number(item.price) * item.qty,
            discountPrice:
                acc.discountPrice +
                Math.floor((Number(item.discount) * Number(item.price)) / 100),
        }),
        {
            currentPrice: 0,
            discountPrice: 0,
        }
    );
    return billDetails;
};

export { Bill };