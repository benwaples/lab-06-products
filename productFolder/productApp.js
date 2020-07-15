import equipment from '../data/rowingInventory.js';
import { createProductListing } from './productPageUtils.js';

const rowingItems = document.querySelector('#productList');

for (let i = 0; i < equipment.length; i++) {
    const equipmentItem = equipment[i];
    const equipmentLi = createProductListing(equipmentItem);
    rowingItems.append(equipmentLi);
}
