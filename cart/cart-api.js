
export function getCart() {
    const initialEmptyCart = [];
    const rawCart = localStorage.getItem('CART') || initialEmptyCart;
    const cart = JSON.parse(rawCart);

    return cart;
}

export function addToCart(cart) {
    const stringyCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringyCart);
}

export function clearCart() {
    localStorage.removeItem('CART');
}