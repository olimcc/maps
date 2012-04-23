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

  var oliLayer = new L.TileLayer('http://localhost:8000/tiles/1.0.0/oli-test/{z}/{x}/{y}.png', {
    maxZoom: 4
});
  var center = new L.LatLng(54.265224,-8.530884);
  map.setView(center, 0).addLayer(oliLayer);
  addPoly(map);
}

