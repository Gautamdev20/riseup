function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-card');

    allProducts.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
