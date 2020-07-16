export function getItems() {
    const initialEmpty = '[]';
    const rawItems = localStorage.getItem('ITEMS') || initialEmpty;
    const cart = JSON.parse(rawItems);

    return cart;
}