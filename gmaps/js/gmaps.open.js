/**
 * Modified from: http://maps.stamen.com/js/tile.stamen.js
 */
function addMapType() {
  if (typeof google === "object" && typeof google.maps === "object") {
      google.maps.FooType = function(name) {
          var url = 'http://b.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{Z}/{X}/{Y}.png';
          return google.maps.ImageMapType.call(this, {
              "getTileUrl": function(coord, zoom) {
                  return [
                      url.replace("{Z}", zoom)
                         .replace("{X}", coord.x)
                         .replace("{Y}", coord.y)
                  ];
              },
              "tileSize": new google.maps.Size(256, 256),
              "name":     'foo',
              "minZoom":  0,
              "maxZoom":  15
          });
      };
      google.maps.FooType.prototype = new google.maps.ImageMapType("_");
  };
}

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
  addMapType();

  var layer = 'foo';

  var myOptions = {
    zoom: 8,
    center: new google.maps.LatLng(54.265224,-8.530884),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
        mapTypeIds: [layer]
    }
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  map.mapTypes.set(layer, new google.maps.FooType(layer));
  drawPoly(map);
};