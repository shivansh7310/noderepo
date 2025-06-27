// test.js

const request = require('supertest');
const app = require('../index.js'); // Adjust path if needed

describe('GET /', function () {
  it('respond with hello all of you', function (done) {
    request(app)
      .get('/')
      .expect('hello all of you', done);
  });
});
