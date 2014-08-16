var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();
var stations =[[40.650755, -73.950005], [40.702407, -73.799973]];
var start;
var end;
var closest2End;
var closest2Start;
function auto()
{
  for ( var i =0; i < stations.length;i++)
    {
      stations[i] = new google.maps.LatLng(stations[i][0],stations[i][1])
    }
}
auto();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(40.7622222, -73.9844444)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));

}

function calcRoute() {
  start = document.getElementById("start").value;
  end = document.getElementById("end").value;
  closest2Start = "Pelham Parkway & White Plains Road Bronx, NY 10467";
  closest2End   = "Flatbush Avenue & Nostrand Avenue Brooklyn, NY 11210";
  var request = {
    origin: start,
    destination: closest2Start,
    travelMode: google.maps.TravelMode.TRANSIT
  };
  directionsService.route(request, function(response, status) {
    console.log(status);
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  
    var request = {
    origin: closest2Start,
    destination: closest2End,
    travelMode: google.maps.TravelMode.TRANSIT
  };
  directionsService.route(request, function(response, status) {
    console.log(status);
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

  
    var request = {
    origin: closest2End,
    destination: end,
    travelMode: google.maps.TravelMode.TRANSIT
  };
  directionsService.route(request, function(response, status) {
    console.log(status);
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  
  alert("Walking directions are still in beta, proceed with caution.");
}



google.maps.event.addDomListener(window, 'load', initialize);
