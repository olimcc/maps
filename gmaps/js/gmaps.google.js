function drawPoly(map) {
  var triangleCoords = [
    new google.maps.LatLng(54.774252, -8.190262),
    new google.maps.LatLng(54.466465, -8.118292),
    new google.maps.LatLng(54.321384, -8.75737)
  ];

  var initOptions = {
    paths: triangleCoords,
    strokeColor: "#FF0000",
    fillColor: "#FF0000",
    fillOpacity: 0.35
  }

  var hoverOpts = {fillColor: 'blue'};

  tri = new google.maps.Polygon(initOptions);
  tri.setMap(map);

  // Add a listener for events
  google.maps.event.addListener(tri, 'mouseover', function() {
    tri.setOptions(hoverOpts);
  });
  google.maps.event.addListener(tri, 'mouseout', function() {
    tri.setOptions(initOptions);
  });
  google.maps.event.addListener(tri, 'click', function() {
    alert('clicked');
  });
}

function initialize() {
  var myOptions = {
    zoom: 8,
    center: new google.maps.LatLng(54.265224,-8.530884),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
      myOptions);
  drawPoly(map);
};