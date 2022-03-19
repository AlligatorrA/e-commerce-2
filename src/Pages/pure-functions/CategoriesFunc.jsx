const CategoriesFunc = (products, avaitor, analog, digital, quartz, luxury) => {
    const watchBucket = [];
    if (
        avaitor === false &&
        analog === false &&
        digital === false &&
        quartz === false &&
        luxury === false
    ) {
        return products;
    }
    if (avaitor) {
        let newWatchInBox = products.filter(
            (items) => items.categories === "avaitor"
        );

        watchBucket.push(...newWatchInBox);
    }
    if (analog) {
        let newWatchInBox = products.filter(
            (items) => items.categories === "analog"
        );
        watchBucket.push(...newWatchInBox);
    }
    if (digital) {
        let newWatchInBox = products.filter(
            (items) => items.categories === "digital"
        );
        watchBucket.push(...newWatchInBox);
    }
    if (quartz) {
        let newWatchInBox = products.filter(
            (items) => items.categories === "quartz"
        );
        watchBucket.push(...newWatchInBox);
    }
    if (luxury) {
        let newWatchInBox = products.filter(
            (items) => items.categories === "luxury"
        );
        watchBucket.push(...newWatchInBox);
    }
    return watchBucket;
};
export { CategoriesFunc };
