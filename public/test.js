var axios = require('axios');


var loadTweets = function() {
axios.get('http://localhost:3000/api/just_be_dougin')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
  }

  loadTweets();