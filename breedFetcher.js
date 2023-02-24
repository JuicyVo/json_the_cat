const request = require('request');
const value = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${value}`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  //console.log (typeof data)
  console.log(data[0].description); // [0] to get to the first object


});