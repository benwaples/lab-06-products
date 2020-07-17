import rawItems from '../data/rowingInventory.js';
import { findById } from '../cart/cartUtils.js';

export function getItems() {
    let items = localStorage.getItem('ITEMS');

    if (!items) {
        items = JSON.stringify(rawItems);

        localStorage.setItem('ITEMS', items);
    }

    const parsedItems = JSON.parse(items);
    return parsedItems;
}

export function getItemsToDelete() {
    let canDeleteItems = [];
    const items = getItems();

    for (let i = 0; i < items.length; i++) {
        const item = items[i].id;
        if (item.includes('newItem')) {
            const newItem = findById(items, item);
            canDeleteItems.push(newItem);
        }
        
    }
    return canDeleteItems;
}

export function createDeleteLine(item) {
    const liEl = document.createElement('li');

    const idEl = document.createElement('p');
    idEl.textContent = item.id;
    liEl.append(idEl);

    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.textContent = 'delete me';
    deleteButtonEl.addEventListener('click', () => {
        const items = getItems();
        for (let i = 0; i < items.length; i ++) {
            const itemFromLocal = items[i];
            if (itemFromLocal.id === item.id) {
                items.splice(i, 1);
            }
        }
        const stringyItems = JSON.stringify(items);
        localStorage.setItem('ITEMS', stringyItems);

        liEl.classList.add('hidden');
    });
    liEl.append(deleteButtonEl);

    return liEl;
}

