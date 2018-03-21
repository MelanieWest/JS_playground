$(document).ready(function () {


  var map;
  var service;
  var infowindow;
  var searchRad = '1000'; //default value for search radius (it's not miles- kilometers? small area)

  var placeLink, tableDiv;    //used for output to document

  var activePlaces = ['aquarium', 'bowling_alley', 'night_club', 'amusement_park', 'art_gallery', 'movie_theater', 'museum', 'restaurant'];

  var ranNum = 0;  //default ran # to select activity type
  var itemSel = 0;  //default ran # to select random result
  var theme;

  ranNum = Math.floor(Math.random() * 8); //used to select a random activity
  //theme = activePlaces[ranNum];
  theme = 'restaurant';

  var zip;

  $("#current-zip").on("click", function (event) {

    //prevents submit button from trying to send a form.
    event.preventDefault();
    var input = $("#zip-input").val().trim();

    zip = input;
    console.log(zip);
    $("#zip-input").val(' ');  //empty the box

    // The getLocation function is called using the current zip code

    getLocation(input);
    ranNum = Math.floor(Math.random() * 8); //used to select a random activity
    //theme = activePlaces[ranNum];
    theme = 'restaurant';

    return theme;

  });


  function getLocation(zip) {

    //call the zip code API to get lat & lon

    var cors = 'https://cors-bcs.herokuapp.com/';

    var zipUrl = cors + "https://www.zipcodeapi.com/rest/AbzyNhMMyqYW0scurt7Al2yYktdJlnFWyfvmxh96H72HAfc1JkC4ma2HEgr0D6Wc/info.json/" + zip + "/degrees"

    $.ajax({
      url: zipUrl,
      method: "GET",
    }).done(function (response) {
      console.log(response);
      lat = response.lat;
      lng = response.lng;

      //google.maps.event.addDomListener(window, 'load', initialize(lat,lng,theme));


      // $("#display").append('<div id ="map"></div>');  //keep map div hard-coded in for now

      //         var ranNum = Math.floor(Math.random() * 8); //used to select a random activity

      //  //       var theme = activePlaces[ranNum];
      //         var theme = 'restaurant';

      console.log('Random number is ' + ranNum + ', and the theme is ' + theme);
      console.log('lat, lng: ', lat, lng);

      google.maps.event.addDomListener(window, 'load', initialize(lat, lng, theme));



    });

  }     //end of zip code API call function




  function initialize(lat, lng, theme) {

    // latitude and longitude will be variables.  Right now I have it
    // set near I-drive to get some good results of varying types.

    //var city = new google.maps.LatLng(28.45000,-81.4700);

    var city = new google.maps.LatLng(lat, lng);

    map = new google.maps.Map(document.getElementById('map'), {
      center: city,
      zoom: 15      //zoom: 0 shows the whole earth.  Bigger #'s are closer in
    });         // draw the map (zoom: 15 gives a map that's about 1 mile to a side)

    var request = {   //this is searching for businesses that match the theme - not currently working
      location: city,
      radius: searchRad,
      type: [theme]
    };        //end of request parameter object

      var marker = new google.maps.Marker({   //this places a marker in the middle of the map
      position: city,
      map: map
    });

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }


  tableDiv = $('<h4> Google Places Result: </h4>');

  function callback(results, status) {
    // I was randomly selecting one result, eliminating the for loop, and using 'itemSel' as my index below
    //itemSel = Math.floor(Math.random()*results.length);

    if (results.length == 0) {
      tableDiv.append('<p> No results found in the category: ' + theme + '</p>');
      tableDiv.append('<p> Please try again (a new category will be selected) </p> ')
      $("#display").prepend(tableDiv); //insert table into document
      return
    }

    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        console.log(results[i]);
        console.log(results[i].name, results[i].vicinity);

        //placeLink = '<a href ='+results[i].dealUrl+' target = "_blank"> Google Place </a>'

        tableDiv.append('<p>' + theme + ': ' + results[i].name + '</p>');
        tableDiv.append('<p>' + results[i].vicinity + '</p>');

        //tableDiv.append('<tr><th> </th><th> Google Places </th></tr><tr><th> Name  </th><td> '+ results[itemSel].name +'</td></tr><tr><th> Location </th><td> '+ results[itemSel].vicinity + '</td></tr>');

        //tableDiv.append(results[i].photos[0].html_attributions)

        var marker = new google.maps.Marker({
          map: map,

          position: place.geometry.location
        });     //end of marker placement block

      }       //end of 'for' loop that collects results

    }         // end of 'if' block for places search
    $("#display").prepend(tableDiv); //insert table into document

  }           // end of callback function



});   //end of document ready
