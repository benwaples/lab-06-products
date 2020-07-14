import items from '../data/rowingInventory.js';
import { createLineItem, findById } from '../cart/cartUtils.js';

const test = QUnit.test;


test('receive an array of objects and create an html tr element from it', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: '0aRP0rt',
        quantity: 1
    };
    const oar = findById(items, cartItem.id);
    
    const expected = '<tr><td>Port oars</td><td class="qty">1</td><td>$20.00</td><td>$20.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createLineItem(cartItem, oar);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});

test('it should take in an id and an array and return the matching item', (assert) => {
     //Arrange
    // Set up your parameters and expectations

    //test hardcoded data
    const spot = {
        id: 'spot',
        type: 'doggy',
        weight: 5
    };
    
    const douglas = {
        id: 'douglas',
        type: 'doggy',
        weight: 12
    };
    
    const jumpy = {
        id: 'jumpy',
        type: 'froggy',
        weight: 1
    };
    
    const myArray = [
        spot,
        douglas,
        jumpy
    ];

    const myId1 = 'spot';
    const myId2 = 'jumpy';
    const expected1 = spot;
    const expected2 = jumpy;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);
    
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);
});