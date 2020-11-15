// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';

chai.use(chaiHttp);
chai.should();

const app = express();

describe("Stations", () => {
    describe("GET /", () => {
        // Test to get all station records
        it("should get all station record", (done) => {
             chai.request(app)
                 .get('/api/stations')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });        
        // Test to get single station record
        it("should get a single station record", (done) => {
             const id = "2b53594d-d704-4104-bc3d-a0c6ac84d009";
             chai.request(app)
                 .get(`/api/staions/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get single station record
        it("should not get a single station record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/api/staions/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});