const expect = require('chai').expect;

const request = require('request');

test('Sends delete request correctly', (done) => {
    request('http://localhost:5150/items',
    function(error, response, body) {
        expect(response).not.to.be.undefined;
        done();

    })








});