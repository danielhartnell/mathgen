var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Test 1', function() {
  it('should return homepage on / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should successfully download pdf', function(done) {
    chai.request(server)
      .get('/one-step-pdf?numEquations=10')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
