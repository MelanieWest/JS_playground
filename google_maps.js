$(document).ready(function(){



  function initMap() {

    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }



$("#zip").on("click",mapSetUp)

var map;
var service;
var infowindow;
var searchRad = '1000'; //default value for search radius (it's not miles- kilometers? small area)

var theme;        // this variable will hold the selected activity
var zip, lat, lng;
var placeLink, tableDiv;    //used for output to document
var activePlaces = ['aquarium','bowling_alley','night_club','amusement_park','art_gallery','movie_theater','museum','restaurant'];

var ranNum  = 0;  //default ran # to select activity type
var itemSel = 0;  //default ran # to select random result

//I'll need the zip code as input here.  For now, set it in code.

//zip = 10005;   //new york
zip = 60606;   //chicago
//zip = 33133;   //miami
//zip = 97215;   //portland
//zip = 90081;   //LA
// zip = 90210;    //beverly hills



function mapSetUp(){

zip = this.val().trim();
console.log('Zip code is: ',zip);

var cors = 'https://cors-bcs.herokuapp.com/';

var zipUrl = cors + "https://www.zipcodeapi.com/rest/AbzyNhMMyqYW0scurt7Al2yYktdJlnFWyfvmxh96H72HAfc1JkC4ma2HEgr0D6Wc/info.json/" + zip + "/degrees"

$.ajax({  
    url: zipUrl,
    method:  "GET",
}).done(function(response){
    console.log(response);
    lat = response.lat;
    lng = response.lng;

    google.maps.event.addDomListener(window, 'load', initialize);

   // $("#display").append('<div id ="map"></div>');  //keep map div hard-coded in for now
 
    ranNum = Math.floor(Math.random()*8); //used to select a random activity

    theme = activePlaces[ranNum];
        
    console.log('Random number is '+ranNum+ ', and the theme is '+theme);

});
}

      
function initialize(){

  // latitude and longitude will be variables.  Right now I have it
  // set near I-drive to get some good results of varying types.

  //var city = new google.maps.LatLng(28.45000,-81.4700);

  var city = new google.maps.LatLng(lat,lng);

  map = new google.maps.Map(document.getElementById('map'), {
      center: city,
      zoom: 15      //zoom: 0 shows the whole earth.  Bigger #'s are closer in
    });         // draw the map (zoom: 15 gives a map that's about 1 mile to a side)

  var request = {
    location: city,
    radius: searchRad,    //search by the selected radius
    type: [theme]     //search according to selected theme
  };        //end of request parameter object

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

}           // end of initialize function

tableDiv = $('<h4> Google Places Result: </h4>');

//tableDiv = $('<table>');    //set up display div
//tableDiv.html('<tr><th> </th><th> Google Places </th></tr>');

function callback(results, status) {

  itemSel = Math.floor(Math.random()*results.length);

  if (results.length == 0){ 
    tableDiv.append('<p> No results found in the category: '+theme+ '</p>');
    tableDiv.append('<p> Please try again (a new category will be selected) </p> ')
    $("#display").prepend(tableDiv); //insert table into document
    return      
  }

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    //for (var i = 0; i < results.length; i++) {
      var place = results[itemSel];
      console.log(results[itemSel]);
      console.log(results[itemSel].name,results[itemSel].vicinity);

      //placeLink = '<a href ='+results[itemSel].dealUrl+' target = "_blank"> Google Place </a>'
      
      tableDiv.append('<p>'+ theme + ': ' +results[itemSel].name+ '</p>');
      tableDiv.append('<p>'+results[itemSel].vicinity + '</p>');

      //tableDiv.append('<tr><th> </th><th> Google Places </th></tr><tr><th> Name  </th><td> '+ results[itemSel].name +'</td></tr><tr><th> Location </th><td> '+ results[itemSel].vicinity + '</td></tr>');

      //tableDiv.append(results[itemSel].photos[0].html_attributions)

      var marker = new google.maps.Marker({
         map: map,

         position: place.geometry.location
        });     //end of marker placement block

    //}       //end of 'for' loop that collects results

  }         // end of 'if' block for places search
  $("#display").prepend(tableDiv); //insert table into document

}           // end of callback function



});   // end of document ready

