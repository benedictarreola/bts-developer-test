const variantInputs = document.querySelectorAll('[class*=variant-input-]');

variantInputs.forEach((input) => {
    input.addEventListener('click', function () {
        const { productId, variantId, variantName, compareAtPrice, price } = this.dataset;
        updateVariant(productId, variantId, variantName, compareAtPrice, price);
    });
});

const updateVariant = (productId, variantId, variantName, compareAtPrice, price) => {
    const variantInputElements = document.querySelectorAll(`.variant-input-${variantId}`);
    variantInputElements.forEach((element) => {
        element.checked = element.value === variantId;
    });

    const productVariantTitleElements = document.querySelectorAll(`.product-variant-title-${productId}`);
    productVariantTitleElements.forEach((element) => {
        element.innerHTML = variantName;
    });

    const compareAtPriceElements = document.querySelectorAll(`.product-compare-at-price-${productId}`);
    compareAtPriceElements.forEach((element) => {
        element.innerHTML = compareAtPrice;
    });

    const priceElements = document.querySelectorAll(`.product-price-${productId}`);
    priceElements.forEach((element) => {
        element.innerHTML = price;
    });
};
