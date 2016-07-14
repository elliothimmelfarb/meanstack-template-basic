const chai = require('chai');
const expect = chai.expect;

describe('test', () => {
  describe('test test', () => {
    it('should pass', () => {
      expect(true).to.equal(true);
      expect(1).to.not.be.NaN;
    });
  });
});

// const mongoose = require('mongoose');
//
// const Chef = require('../../models/chef');
//
// before(done => {
//   mongoose.connect('mongodb://localhost/pizzadb-test', done);
// });
//
// after(done => {
//   mongoose.disconnect(done);
// });
//
// beforeEach(done => {
//   Chef.remove({}, (err) => {
//     if (err) return done(err);
//   });
//   const sampleChefs = [{
//     name: 'Paula Deen',
//     yearsOfExperience: 10,
//   }, {
//     name: 'Guy Fieri',
//   }];
//   Chef.create(sampleChefs, done);
// });
//
// describe('Chef', () => {
//   describe('.find()', () => {
//     it('should return all chefs', done => {
//       Chef.find({}, (err, chefs) => {
//         expect(err).to.not.exist;
//         expect(chefs).to.have.length(2);
//         expect(chefs[0].name).to.equal('Paula Deen');
//         done(err);
//       });
//     });
//     describe('methods.addYear', () => {
//       it('should increment the chef\'s yearsOfExperience, and save', done => {
//         Chef.findOne({ name: 'Paula Deen' }, (err, chef) => {
//           if (err) return done(err);
//           return chef.addYear((errr, savedChef) => {
//             expect(errr).to.not.exist;
//             expect(savedChef.yearsOfExperience).to.equal(11);
//             return done();
//           });
//         });
//       });
//       it('if the chef does not have yearsOfExperience, should set it to 1', done => {
//         Chef.findOne({ name: 'Guy Fieri' }, (err, chef) => {
//           if (err) return done(err);
//           return chef.addYear((errr, savedChef) => {
//             expect(errr).to.not.exist;
//             expect(savedChef.yearsOfExperience).to.equal(1);
//             done();
//           });
//         });
//       });
//     });
//   });
// });
//
