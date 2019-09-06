// Set the configuration for your app
 // TODO: Replace with your project's config object
 var config = {
   apiKey: "AIzaSyDpPwpZBVd-gt0m2GrkRcQHVRRIqwxyoWo",
   authDomain: "lingling-5563.firebaseapp.com",
   databaseURL: "https://lingling-5563.firebaseio.com",
 };
 firebase.initializeApp(config);

 // Get a reference to the database service
 var database = firebase.database();

function missingMe(){
  firebase.database().ref('states/missingMe').set(true);
}
