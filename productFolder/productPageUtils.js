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
    
    const buttonEl = document.createElement('button');
    buttonEl.value = item.id;
    buttonEl.textContent = 'Add';
    buttonEl.addEventListener('click', () => {
        const cart = getCart();
        const itemGoingIntoCart = findById(cart, item.id);

        if (!itemGoingIntoCart) {
            const initialItemInCart = {
                id: item.id,
                quantity: 1
            };
            cart.push(initialItemInCart);
        } else {
            itemGoingIntoCart.quantity ++;
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