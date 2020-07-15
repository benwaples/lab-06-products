import items from '../data/rowingInventory.js';
import { createLineItem } from '../cart/cartUtils.js';

const test = QUnit.test;


test('receive an array of objects and create an html tr element from it', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: '0aRP0rt',
        quantity: 1
    };
    
    const expected = '<tr><td>Port oars</td><td class="qty">1</td><td>$20.00</td><td>$20.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createLineItem(cartItem, items);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
