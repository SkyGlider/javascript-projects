
mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmV3cGFuZyIsImEiOiJjazAyOHZwb2sycndlM2xtamJrdmlnZnFzIn0.P_5jM4Xg09cIP_n3egBxaQ";

let map = new  mapboxgl.Map({
  container: 'map',
  center: [144.9648731,-37.8182711],
  zoom: 16,
  style: 'mapbox://styles/mapbox/streets-v9'
});

function panToClayton(){
  let monashClayton = [145.1343136, -37.9110467];
	map.panTo(monashClayton);
}
function showPath(){}
function showPolygon(){}
