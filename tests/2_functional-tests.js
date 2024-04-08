const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {

    test('/api/convert 10L', (done) => {
        chai
            .request(server)
            .get('/api/convert')
            .query({ input: '10L' })
            .end((err, res) => {
                assert.equal(res.body.initNum, 10, 'initNum != 10')
                assert.equal(res.body.initUnit, 'L', 'initNum != L')
                done()
            })
    })
    test('/api/convert 32g', (done) => {
        chai
            .request(server)
            .get('/api/convert')
            .query({ input: '32g' })
            .end((err, res) => {
                assert.equal(res.body.initUnit, undefined, 'initUnit != undefined')
                done()
            })
    })
    test('/api/convert 3/7.2/4kg', (done) => {
        chai
            .request(server)
            .get('/api/convert')
            .query({ input: '3/7.2/4kg' })
            .end((err, res) => {
                assert.equal(res.body.initNum, undefined, 'initNum != undefined')
                done()
            })
    })
    test('/api/convert 3/7.2/4kilomegagram', (done) => {
        chai
            .request(server)
            .get('/api/convert')
            .query({ input: '3/7.2/4kilomegagram' })
            .end((err, res) => {
                assert.equal(res.body.initNum, undefined, 'initNum != undefined')
                assert.equal(res.body.initUnit, undefined, 'initUnit != undefined')
                done()
            })
    })
    test('/api/convert kg', (done) => {
        chai
            .request(server)
            .get('/api/convert')
            .query({ input: 'kg' })
            .end((err, res) => {
                assert.equal(res.body.initNum, 1, 'initNum != 1')
                assert.equal(res.body.initUnit, 'kg', 'initUnit != kg')
                done()
            })
    })

    // test('test chaiHTTP', (done) => {
    //     chai
    //         .request(server)
    //         .get('/test')
    //         .end((err, res) => {
    //             console.log(res)
    //             assert.equal(res.body, 200, 'doesn\' pass')
    //             done()
    //         })
    // })
});
