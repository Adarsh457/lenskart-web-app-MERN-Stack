// Add to Cart.
export const handleAddToCart = (item, addToCart, setIsAddedToCart, products) => {
    const isAlreadyAdded = products.find((addedToCartItem) => addedToCartItem.id === item.id);
    
    if (!isAlreadyAdded) {
        addToCart(item);
        setIsAddedToCart(true);
    } else {
        setIsAddedToCart(true); // Just mark as added
    }
};
