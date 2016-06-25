module.exports = function () {
   const 
        _ = require('lodash'),
        chai = require('chai'),
        expect = chai.expect;

    const payload = {
        data: {
            type: 'products',
            attributes: {
                name: 'Nome Produto',
                price: 77,
                brand: 'Marca Produto 1',
                model: 'Modelo Produto 1'
                }
            }
    };
    
       this.Given(/^a valid product/, function () {
        return payload;
    });
}
