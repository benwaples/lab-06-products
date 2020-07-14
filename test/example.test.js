// IMPORT MODULES under test here:
import { createProductListing } from '../productFolder/productPageUtils.js';
import { createLineItem } from '../cart/cartUtils.js';
const test = QUnit.test;

test('receive an array of objects and create an html li element from it', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const oar = {
        id: 'oar',
        name: 'Port oars',
        image: 'photos/oartulips.jpg',
        description: 'This is designed to go faster than starboard oars no matter what',
        category: 'equipment',
        price: 20,
        cost: 19.99
    };
    
    const expected = '<li class="equipment" title="This is designed to go faster than starboard oars no matter what"><h3>Port oars</h3><img src="photos/oartulips.jpg" alt="Port oars image"><p class="price">$20.00<button value="oar">Add</button></p><p class="description">This is designed to go faster than starboard oars no matter what</p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createProductListing(oar);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});

test('receive an array of objects and create an html tr element from it', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: '0aRP0rt',
        quantity: 1
    };
    
    const expected = '<tr><td>port oar</td><td class="qty">1</td><td>$20.00</td><td>$20.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createLineItem(cartItem);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});