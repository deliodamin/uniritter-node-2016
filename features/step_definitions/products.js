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
    
    this.When(/^ I submit it to the APIB$/, function () {
        const that = this
        
        return this.doHttpRequest('products' , 'post', payload)
        .then((response) => {
            that.validProductID = response.body.data.id;
            that.statusProduct = response.statusCode;
            return response;
        });
    });
    
    
     this.Then(/^I receive a success messageB$/, function () {
        expect(this.statusProduct).to.equal(201);
    });
    
     this.Then(/^the new product id$/, function () {
        expect(this.validProductID).not.to.be.undefined;
   });
    
}
