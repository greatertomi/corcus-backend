/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// Assertion Style
chai.should();

chai.use(chaiHttp);

// Test get all users route
describe('USERS ROUTES', () => {
  describe('GET /api/v1/partners', () => {
    it('It should GET all the partners', (done) => {
      chai
        .request(server)
        .get('/api/v1/partners')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
});
