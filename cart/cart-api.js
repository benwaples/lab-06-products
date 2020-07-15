
export function getCart() {
    const initialEmptyCart = '[]';
    const rawCart = localStorage.getItem('CART') || initialEmptyCart;
    console.log('raw cart data',rawCart);
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