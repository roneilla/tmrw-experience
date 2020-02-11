 function init() {
     initialize();

     createMarkers();

     addAssets();

     onRenderFcts.push(function () {

     });
     onRenderFcts.push(function () {
         renderer.render(scene, camera)
     });
     lastTimeMsec = null;
     animate();
 }

 function createMarkers() {

     marker1 = new Marker(
         scene,
         arToolkitContext,
         'pattern-marker-1.patt');

     marker2 = new Marker(
         scene,
         arToolkitContext,
         'pattern-marker-2.patt');

 }

 function addAssets() {
    // marker1.root.add(coral.movieScreen);
     marker1.root.add(imageTest.sprite);

 }

 function assetsReady() {
     // only needed for videos
   //  imageTest.ready(); 
 }

function visibilityCheck() {
     if (marker1.root.visible === true) {
         setTimeout(function(){
             window.location.href = "http://www.w3schools.com";
         },2000);
     }

 }