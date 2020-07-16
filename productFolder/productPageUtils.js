import { findById } from '../cart/cartUtils.js';
import { getCart, addToCart } from '../cart/cart-api.js';

export function createProductListing(item) {
    const liEl = document.createElement('li'); 

    const category = item.category;
    liEl.classList.add(category);
    const title = item.description;
    liEl.title = title;

    const h3El = document.createElement('h3');
    h3El.textContent = item.name;
    liEl.append(h3El);

    const imgEl = document.createElement('img');
    imgEl.src = item.image;
    imgEl.alt = item.name + ' image';
    liEl.append(imgEl);

    const pEl = document.createElement('p');
    pEl.classList.add('price');
    pEl.textContent = `$${item.price.toFixed(2)}`;

    //create a drop down in
    const qtyInputEl = document.createElement('select');
    qtyInputEl.id = 'qtySelector' + item.id;
    const selectEl1 = document.createElement('option');
    selectEl1.value = 1;
    selectEl1.textContent = '1';
    const selectEl2 = document.createElement('option');
    selectEl2.value = 2;
    selectEl2.textContent = '2';
    const selectEl3 = document.createElement('option');
    selectEl3.value = 3;
    selectEl3.textContent = '3';
    const selectEl4 = document.createElement('option');
    selectEl4.value = 4;
    selectEl4.textContent = '4';
    qtyInputEl.append(selectEl1, selectEl2, selectEl3, selectEl4);

    pEl.append(qtyInputEl);

    
    const buttonEl = document.createElement('button');
    buttonEl.value = item.id;
    buttonEl.textContent = 'Add';
    buttonEl.addEventListener('click', () => {
        const cart = getCart();
        const itemGoingIntoCart = findById(cart, item.id);
        const qtyAddedInput = document.querySelector('#qtySelector' + item.id);
        const qtyValue = Number(qtyAddedInput.value);
        if (!itemGoingIntoCart) {
            const initialItemInCart = {
                id: item.id,
                quantity: qtyValue
            };
            cart.push(initialItemInCart);
        } else {
            itemGoingIntoCart.quantity += qtyValue;
        }

        addToCart(cart);

        //add a counter that is linked to the localStorage for this item that displays the quantity for a given id in the cart
    });

    pEl.append(buttonEl);
    liEl.append(pEl);

    const descriptionEl = document.createElement('p');
    descriptionEl.classList = 'description';
    descriptionEl.textContent = item.description;
    liEl.append(descriptionEl);


    return liEl;
}