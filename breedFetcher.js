const request = require('request');

// request(`https://api.thecatapi.com/v1/breeds/search?q=${value}`, (error, response, body) => {
//   const data = JSON.parse(body);
//   console.log(data);
//   //console.log (typeof data)
//   console.log(data[0].description); // [0] to get to the first object
// });

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  // const value = process.argv[2];
    if (error) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      const desc = (data[0].description); // [0] to get to the first object
      callback(null,desc);
    }
  });
};

module.exports = { fetchBreedDescription };