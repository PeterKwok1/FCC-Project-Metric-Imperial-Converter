const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

// https://www.chaijs.com/plugins/chai-http/ - chai-http documentation

// test functional tests on playground. 

// use landon tutorial

suite('Functional Tests', function () {
    test('test chaiHTTP', (done) => {
        chai.request(server).get('/test')
            .end((err, res) => {
                assert.equal(res, 'works', 'response != works')
                done()
            })
    })
});
