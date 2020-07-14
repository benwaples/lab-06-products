
export function createLineItem(lineItem, catalog) {
    const matchingCatalogItem = findById(catalog, lineItem.id);

    const trEl = document.createElement('tr');
    const itemEl = document.createElement('td');
    itemEl.textContent = matchingCatalogItem.name;
    trEl.appendChild(itemEl);

    const qtyEl = document.createElement('td');
    qtyEl.classList.add('qty');
    qtyEl.textContent = lineItem.quantity;
    trEl.appendChild(qtyEl);

    const itemPriceEl = document.createElement('td');
    itemPriceEl.textContent = `$${matchingCatalogItem.price.toFixed(2)}`;
    trEl.appendChild(itemPriceEl);

    const lineItemTotal = document.createElement('td');
    const total = calcLineItem(lineItem, matchingCatalogItem);
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

export function totalOrderCost(cart, catalog) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const inventoryItem = findById(catalog, lineItem.id);
        const lineTotal = lineItem.quantity * inventoryItem.price;
        orderTotal += Number(lineTotal);
    }
    return orderTotal;
}

export function calcLineItem(cartItem, catalogObject) {
    const quantity = Number(cartItem.quantity);
    const catalogPrice = Number(catalogObject.price);
    const lineTotal = quantity * catalogPrice;

    return lineTotal;
}

