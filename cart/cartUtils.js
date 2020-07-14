
export function createLineItem(lineItem, catalog) {
    const trEl = document.createElement('tr');
    const itemEl = document.createElement('td');
    itemEl.textContent = catalog.name;
    trEl.appendChild(itemEl);

    const qtyEl = document.createElement('td');
    qtyEl.classList.add('qty');
    qtyEl.textContent = lineItem.quantity;
    trEl.appendChild(qtyEl);

    const itemPriceEl = document.createElement('td');
    itemPriceEl.textContent = `$${catalog.price.toFixed(2)}`;
    trEl.appendChild(itemPriceEl);

    const lineItemTotal = document.createElement('td');
    const total = lineItem.quantity * catalog.price;
    lineItemTotal.textContent = `$${total.toFixed(2)}`;
    trEl.appendChild(lineItemTotal);
    return trEl;
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i ++) {
        if (someArray[i].id === someId && Array.isArray(someArray))
            return someArray[i];
    }
}
