console.log("Test Map")

var storage = firebase.storage();
var storageRef = storage.ref();
storageRef.child('map.jpg').getDownloadURL().then(function(url) {
  var img = document.getElementById('mapPic');
  img.src = url;
});
