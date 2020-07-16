// import equipment from '../data/rowingInventory.js';
import { createProductListing } from './productPageUtils.js';
import { getItems } from '../admin/admin-utils.js';

const rowingItems = document.querySelector('#productList');
const equipment = getItems();

for (let i = 0; i < equipment.length; i++) {
    const equipmentItem = equipment[i];
    const equipmentLi = createProductListing(equipmentItem);
    rowingItems.append(equipmentLi);
}

