mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmV3cGFuZyIsImEiOiJjazAyOHZwb2sycndlM2xtamJrdmlnZnFzIn0.P_5jM4Xg09cIP_n3egBxaQ";

let map = new  mapboxgl.Map({
  container: 'mapArea',
  center: [144.9648731,-37.8182711],
  zoom: 16,
  style: 'mapbox://styles/mapbox/streets-v9'
});

let longt;
let latit;
let accu;
// TODO 1:  Add the Mapbox code
// mapboxgl.accessToken = 'YOUR MAP BOX API KEY';
// creating a new map instance

// TODO 2: This function get executed when Get Current Location button is clicked.
//         Add code here for geolocation api request. Use 'getCurrentPosition'
//        Remeber to change the function name

function getLocation(){
  navigator.geolocation.getCurrentPosition(getPos,errorReport);
}

//   TODO 3 :  Add the callback function for the geolocation api.
//    What should happen when the location is available?
function getPos(position){
  var crd = position.coords;
  map.panTo([crd.longitude,crd.latitude]);
  let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
  marker.setLngLat([crd.longitude,crd.latitude]);
  let popup = new mapboxgl.Popup({ offset: 45});
  popup.setText("Current Location");
  marker.setPopup(popup);
  marker.addTo(map);
  popup.addTo(map);
}

function errorReport(){
  alert('Error,location acces denied or device unsupported!');
}

//  TODO 4 : This function get executed when Get current Weather button is clicked.
//  Use DarkSky api to request current weather for the current location.
//  Check whether a valid current location coordinates are available before making a api request.
//  If the coordinates are not available display a suitable error message as an alert.
function getWeather(){
  navigator.geolocation.getCurrentPosition(getWet,errorReport)
}

function getWet(position){
  var crd = position.coords;
  let script = document.createElement("script");
  script.src = "https://api.darksky.net/forecast/7ce32010b0e53c364993681ceb6b3760/"+crd.latitude+","+crd.longitude+"?exclude=minutely,hourly,daily,alerts,flags&units=si&callback=updateWeather"; document.body.appendChild(script);
}

//  TODO 5:  callback function for DarkSky API.
//  Extract the weather information and display as a table.(include units)
// javscript code for modifing the HTML table is :

function updateWeather(result)
{
  let outputTableRef = document.getElementById('table-weather'); // create a reference to outputTableRef
  let rowHTML="";
  rowHTML+='<tr><th>'+'Summary'+'</th><td>'+result.currently.summary+'</td></tr>';
  rowHTML+='<tr><th>'+'Current Temperature'+'</th><td>'+result.currently.temperature+'C'+'</td></tr>';
  rowHTML+='<tr><th>'+'Pressure'+'</th><td>'+result.currently.pressure+'Pa'+'</td></tr>';
  outputTableRef.innerHTML = rowHTML;
}
