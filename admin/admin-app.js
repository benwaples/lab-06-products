import { getItems, getItemsToDelete, createDeleteLine } from './admin-utils.js';

const theForm = document.querySelector('#form');
const deleteUl = document.querySelector('#deleteUl');

theForm.addEventListener('submit', e => {

    e.preventDefault();

    const formDataTheory = new FormData(theForm);

    const newItemToAdd = {
        //add form data things
        id: formDataTheory.get('id') + 'newItem',
        name: formDataTheory.get('name'),
        image: formDataTheory.get('image'),
        description: formDataTheory.get('description'),
        price: Number(formDataTheory.get('price')),
        invAmount: Number(formDataTheory.get('invAmount')),
    };

    const existingItems = getItems();

    existingItems.push(newItemToAdd);

    const stringyExistingItems = JSON.stringify(existingItems);

    localStorage.setItem('ITEMS', stringyExistingItems);

    window.location = '../productFolder/productPage.html';
});

const deleteItems = getItemsToDelete();
console.log('list of items to delete', deleteItems);

for (let i = 0; i < deleteItems.length; i++) {
    const itemToDelete = deleteItems[i];
    const deleteLine = createDeleteLine(itemToDelete);
    deleteUl.append(deleteLine);
}
