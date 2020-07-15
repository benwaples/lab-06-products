// IMPORT MODULES under test here:
import { createProductListing } from '../productFolder/productPageUtils.js';
const test = QUnit.test;

test('receive an array of objects and create an html li element from it', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const oar = {
        id: '0aRP0rt',
        name: 'Port oars',
        image: 'photos/oartulips.jpg',
        description: 'This is designed to go faster than starboard oars no matter what',
        category: 'equipment',
        price: 20,
        cost: 19.99
    };
    
    const expected = '<li class="equipment" title="This is designed to go faster than starboard oars no matter what"><h3>Port oars</h3><img src="photos/oartulips.jpg" alt="Port oars image"><p class="price">$20.00<select id="qtySelector0aRP0rt"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><button value="0aRP0rt">Add</button></p><p class="description">This is designed to go faster than starboard oars no matter what</p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createProductListing(oar);
    const html = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
