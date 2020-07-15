import { createLineItem, totalOrderCost, findById } from './cartUtils.js';
import { getCart, clearCart } from './cart-api.js';

import items from '../data/rowingInventory.js';


const cartTable = document.querySelector('.cartTable');
const orderTotal = document.querySelector('#orderTotal');
const placeOrderButton = document.querySelector('#placeOrder');

const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cartLineItem = createLineItem(cartItem, items);
    cartTable.appendChild(cartLineItem);
}

const cartCost = totalOrderCost(cart, items);
orderTotal.textContent = `$${cartCost.toFixed(2)}`;

if (cart.length > 0) {
    placeOrderButton.classList.remove('hidden');
} 


placeOrderButton.addEventListener('click', () => {
    let cartItems = [];
    for (let i = 0; i < cart.length; i++) {
        //loop through the cart and get the getById the name of each item, and push it to cartItems[]
        const item = cart[i];
        const catalogItem = findById(items, item.id);
        const itemName = catalogItem.name;
        
        cartItems.push(`${itemName} quantity: ${item.quantity}`);
    }
    // display cart items in the alert
    alert(`Pleasure doing business, here's order: ${cartItems.join(', ')}`);
    clearCart();
});