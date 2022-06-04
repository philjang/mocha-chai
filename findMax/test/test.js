const chai = require('chai');
const assert = chai.assert;
const findMax = require('../findMax');

describe('the findMax function', () => {
    it('should be defined as a function', () => {
        assert.exists(findMax, 'findMax exists');
        assert.isFunction(findMax, 'findMax is a function');
    });
    it('should return the correct maximum', () => {
        assert.equal(findMax([1,3,2]), 3);
        assert.equal(findMax([-1,-2,-3]), -1);
        assert.equal(findMax(['1','3','2']), 3);
    });
    it('should have an input', () => {
        assert.equal(findMax(), 'no input provided');
    });
    it('should not accept strings as input', () => {
        assert.equal(findMax('hello'), 'invalid input type');
    });
    it('should not accept numbers as input', () => {
        assert.equal(findMax(1,2), 'invalid input type');
        assert.equal(findMax(2), 'invalid input type');
    });
    it('should handle empty arrays', () => {
        assert.equal(findMax([]), 'input array empty');
    });
});

// // example of testing suite, composed of blocks of tests, each composed of a series of assertions.
// // The describe and it functions both come from mocha.js, which provides the broader frame for our tests. Assertions, provided by chai.js, make up the actual content of our testing blocks.
// // describe() defines a coherent block of tests centered around a piece of code that we're testing
// // it() represents an individual test of a specific functionality, written in human friendly terms

// describe('the stereo system', ()=>{
//     it('should be able to adjust volume', ()=>{
//             // turn the volume knob, assert that the volume is now 1 higher than it previously was
//             // turn the volume knob down, assert that the volume is now 1 lower than it previously was
//             // turn the volume knob down while at 0 volume, assert that the volume stays at 0 and doesn't go negative
//             // turn the volume knob up while at maximum volume, assert that the volume didn't go up any further
//     });
//     it('should be able to change input sources', ()=>{
//             // change the source to aux, assert that the source has been successfully set to 'aux'
//             // change the source to fm, assert that the source is now 'fm'
//             // change the source to an invalid input, assert that the source didn't change
//     });
// });