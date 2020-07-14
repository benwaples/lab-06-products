import { findById } from '../cart/cartUtils.js';
import items from '../data/rowingInventory.js';

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