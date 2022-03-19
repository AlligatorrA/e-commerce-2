const BrandFunc = (products, rolax, patekPhilippe, blancpain, omega) => {
    const brandBucket = [];
    if (
        rolax === false &&
        patekPhilippe === false &&
        blancpain === false &&
        omega === false
    ) {
        return products;
    }
    if (rolax) {
        let brandedWatch = products.filter((items) => items.brand === "rolax");
        brandBucket.push(...brandedWatch);
    }
    if (patekPhilippe) {
        let brandedWatch = products.filter(
            (items) => items.brand === "patekPhilippe"
        );
        brandBucket.push(...brandedWatch);
    }
    if (blancpain) {
        let brandedWatch = products.filter(
            (items) => items.brand === "blancpain"
        );
        brandBucket.push(...brandedWatch);
    }
    if (omega) {
        let brandedWatch = products.filter((items) => items.brand === "omega");
        brandBucket.push(...brandedWatch);
    }
    return brandBucket;
};

export { BrandFunc };
