var startPos;

var sunny = "https://media2.giphy.com/media/l4hLQAUJq9HL8NIRy/giphy.gif";
var rainy = "http://i.imgur.com/fJ1fizf.gif";
var cloudy= "https://45.media.tumblr.com/2df67fe7bdbba84c88cdbbdf84fd2743/tumblr_nqgvxz92HC1s85u2fo1_500.gif";
if (navigator.geolocation) {
  var geoSuccess = function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.getJSON("/weather?lat=" + latitude + "&lon=" + longitude,
      function(json) {
        $("#weatherTemp p").html(JSON.stringify(Math.round(json.main.temp)) + "°");
        $("#icon i").addClass("owf owf-"+json.cod);
        $("#status").html(json.weather[0].main);
        $("#weatherCity p").html(json.name);

        if(json.weather[0].id <= 531){
          $('body').css('background-image','url('+rainy+')');
        } else if(json.weather[0].id > 531 && json.weather[0].id < 900 ){
          $('body').css('background-image','url('+cloudy+')');
        }
      });
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};
