function addPoly(map) {
  var triangleCoords = [
    new L.LatLng(54.774252, -8.190262),
    new L.LatLng(54.466465, -8.118292),
    new L.LatLng(54.321384, -8.75737)
  ];

  var initOptions = {color: 'blue'}
  var hoverOpts = {color: 'red'};

  tri = new L.Polygon(triangleCoords);

  // Add a listener for events
  tri.on('mouseover', function() {
    tri.setStyle(hoverOpts);
  });
  tri.on('mouseout', function() {
    tri.setStyle(initOptions);
  });
  tri.on('click', function() {
    alert('clicked');
  });

  // are there bad implications for adding this as a layer?
  map.addLayer(tri);
}

function initialize() {
  var map = new L.Map('map_canvas');
  // using api key from leaflet for demo only
  var cloudmadeLayer = new L.TileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
});
  var center = new L.LatLng(54.265224,-8.530884);
  map.setView(center, 8).addLayer(cloudmadeLayer);
  addPoly(map);
}