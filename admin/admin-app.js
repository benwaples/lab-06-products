import { getItems } from './admin-utils.js';

const theForm = document.querySelector('#form');

theForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formDataTheory = new FormData(myForm);

    const newItemToAdd = {
        //add form data things
        id: formDataTheory.get('id'),
        name: formDataTheory.get('name'),
        image: formDataTheory.get('image'),
        description: formDataTheory.get('description'),
        price: formDataTheory.get('price'),
        inventory: formDataTheory.get('inventory'),
    }
})