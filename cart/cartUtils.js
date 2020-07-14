export function createLineItem(shoppingCart, catalog) {
    const trEl = document.createElement('tr');
    const itemEl = document.createElement('td');
    itemEl.textContent = catalog.name;
    trEl.appendChild(itemEl);

    return trEl;
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i ++) {
        if (someArray[i].id === someId && Array.isArray(someArray))
            return someArray[i];
    }
}