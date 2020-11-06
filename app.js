const request = require('postman-request');
request('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=19.68797&longitude=-103.46227&localityLanguage=es', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  let data = JSON.parse(body);
  
      console.log(`La localizacion es ${data.locality} del estado ${data.principalSubdivision}, ${data.countryName} `);
});
//La api key solo tenia una prueba, las cordenadas se pusieron las de mi ip que me mandaron hasta zapotlan.