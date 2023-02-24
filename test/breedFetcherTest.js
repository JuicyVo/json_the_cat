const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    // Test code for valid breed scenario
    done()
  });

  it('returns an error message for an invalid breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreed', (err, desc) => {
      // we expect an error for this scenario
      assert.equal(err, "Breed not found" || "undefined");

      // desc should be null for an invalid breed
      assert.equal(desc, null);

      done();
    });
  });
});

//fix test later