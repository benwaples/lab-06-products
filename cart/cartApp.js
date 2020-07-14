import { 
    createLineItem,
    findById,
    totalOrderCost,
    calcLineItem
} from './cartUtils.js';

import items from '../data/rowingInventory.js';
import cart from '../data/cartContents.js';

const cartTable = document.querySelector('.cartTable');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const cartLineItem = createLineItem(cartItem, items);
    cartTable.appendChild(cartLineItem);
}