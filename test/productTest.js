const Product = require('../src/Product');
const assert = require('assert');

describe('Test class Product', () => {
    it('Can test new Product', async () => {
        const pr = new Product({ name: 'AAA', desc: 'BBB' });
        await pr.save();
        const pr2 = await Product.findOne({});
    });

    it('Can remove product by name', async () => {
        const pr = new Product({ name: 'AAA', desc: 'BBB' });
        const pr2 = new Product({ name: 'CCC', desc: 'DDD' });
        await pr.save();
        await pr2.save();
        await Product.findOneAndRemove({ name: 'CCC' });
        assert(await Product.count() === 1);
        const pr3 = await Product.findOne({});
        assert(pr3.name === 'AAA');
    });
});