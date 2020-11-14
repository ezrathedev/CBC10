// importing my function from another file
const foo = require('../foo');
const assert = require('assert');

describe('foo should return... ', () => {
    it('it should return bar', () => {
        assert.strictEqual(foo(), "bar")})
});

describe('foo should return... ', () => {
    it('it should return bar', () => {
        assert.strictEqual(foo(), 'bar')
    })
})

describe('foo should return..', () => {
    it('it should return bat', () => {
        assert.strictEqual(foo(), 'bat')
    })
})

