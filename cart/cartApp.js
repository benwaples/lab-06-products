import { createLineItem, totalOrderCost, findById } from './cartUtils.js';
import { getCart, clearCart } from './cart-api.js';
import { getItems } from '../admin/admin-utils.js';

const items = getItems();

const cartTable = document.querySelector('.cartTable');
const orderTotal = document.querySelector('#orderTotal');
const placeOrderButton = document.querySelector('#placeOrder');

//get cart from local storage
const cart = getCart();

//display cart from local storage
for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cartLineItem = createLineItem(cartItem, items);
    cartTable.appendChild(cartLineItem);
}

//find total for cart
const cartCost = totalOrderCost(cart, items);
orderTotal.textContent = `$${cartCost.toFixed(2)}`;

//display order button if cart has content
if (cart.length > 0) {
    placeOrderButton.classList.remove('hidden');
} 

//place the order
placeOrderButton.addEventListener('click', () => {
    let alertMessage = [];
    for (let i = 0; i < cart.length; i++) {
        //loop through the cart and get the getById the name of each item, and push it to cartItems[]
        const item = cart[i];
        const catalogItem = findById(items, item.id);
        const itemName = catalogItem.name;
        
        alertMessage.push(`${item.quantity} ${itemName}`);
    }
    // display cart items in the alert
    alert(`Pleasure doing business, you'll be receiving: ${alertMessage.join(', ')}`);
    clearCart();

    window.location = '../';
});