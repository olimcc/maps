function initialize() {
  var po = org.polymaps;

  var map = po.map()
      .container(document.getElementById("map_canvas").appendChild(po.svg("svg")))
      .add(po.interact());

  // add layer
  map.add(po.image()
      .url(po.url('http://localhost:8000/tiles/1.0.0/oli-test/{Z}/{X}/{Y}.png')));

  map.add(po.compass());

  map.zoomRange([0, 4])
}