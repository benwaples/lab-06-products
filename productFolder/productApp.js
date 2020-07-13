import equipment from './rowingInventory.js';
import { createProductListing } from './productPageUtils.js';

const rowingItem = document.querySelector('#productList');

for (let i = 0; i < equipment.length; i++) {
    const equipmentItem = equipment[i];
    const equipmentLi = createProductListing(equipmentItem);
    rowingItem.append(equipmentLi);
}
