import { createLineItem, totalOrderCost } from './cartUtils.js';

import items from '../data/rowingInventory.js';
import cart from '../data/cartContents.js';

const cartTable = document.querySelector('.cartTable');
const orderTotal = document.querySelector('#orderTotal');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cartLineItem = createLineItem(cartItem, items);
    cartTable.appendChild(cartLineItem);
}

const cartCost = totalOrderCost(cart, items);
orderTotal.textContent = `$${cartCost.toFixed(2)}`;