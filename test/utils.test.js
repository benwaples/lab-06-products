import { findById, 
    totalOrderCost,
    calcLineItem
} from '../cart/cartUtils.js';
import items from '../data/rowingInventory.js';
import cart from '../data/cartContents.js';

const test = QUnit.test;

test('it should take in an id and an array and return the matching item', (assert) => {
    //Arrange
   // Set up your parameters and expectations

   //test hardcoded data
    const myArray = items;

    const myId1 = '0aRP0rt';
    const myId2 = 'tr0uz35z4L4d13s';
    const expected1 = myArray[0];
    const expected2 = myArray[5];

   //Act 
   // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);
   
   //Assert
   // Make assertions about what is expected versus the actual result
    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);
});

test('calculate the order total based on what is in the array and cart', (assert) => {
    //Arrange
   // Set up your parameters and expectations
    const myCart = cart;
    const catalog = items;
    const expected = 210;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = totalOrderCost(myCart, catalog);
    
   //Assert
   // Make assertions about what is expected versus the actual result
    assert.equal(actual, expected);
});

test('calculate line item total based off the cart item quantity and catalog price', (assert) => {
    //Arrange
   // Set up your parameters and expectations
    const cartItem = cart[0];
    const catalogObject = items[0];
    const expected = 20;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(cartItem, catalogObject);
    
   //Assert
   // Make assertions about what is expected versus the actual result
    assert.equal(actual, expected);
});