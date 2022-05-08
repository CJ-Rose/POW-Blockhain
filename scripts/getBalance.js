const client = require('./client');
const {PUBLIC_KEY} = require('../config');
// const {argv} = require('yargs'),
// const {address} = argv;
// replace PUBLIC_KEY w/ adress from command line

// invoke "add"
client.request('getBalance', [PUBLIC_KEY], function(err, response) {
  if(err) throw err;
  console.log(response.result); // success!
});