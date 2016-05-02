var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));
app.get("/weather", weatherAPIRequest);

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

function weatherAPIRequest (req, res){
  request('http://api.openweathermap.org/data/2.5/weather?lat=' + req.query.lat + '&lon='+ req.query.lon + '&units=imperial&appid=462bc3a62e7319561bd28e98fe97a3c4', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); // Show the HTML for the Google homepage.
    }
  })
}
