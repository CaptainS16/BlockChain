const cryptoHash = require('./crypto-hash');

describe('crypoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('coca'))
        .toEqual('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b')
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
        .toEqual(cryptoHash('three', 'one', 'two'));
    });

    it('produces a unique hash when the properties have changed on an input', () => {
        const coca = {};
        const originalHash = cryptoHash(coca);
        coca['a'] = 'a';

        expect(cryptoHash(coca)).not.toEqual(originalHash);
    });
});