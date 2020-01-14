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
         'coral.patt');

     marker2 = new Marker(
         scene,
         arToolkitContext,
         'shark.patt');

     marker3 = new Marker(
         scene,
         arToolkitContext,
         'fish.patt');

     marker4 = new Marker(
         scene,
         arToolkitContext,
         'crab.patt');

     marker5 = new Marker(
         scene,
         arToolkitContext,
         'turtle.patt');

 }

 function addAssets() {
     marker1.root.add(coral.movieScreen);

 }

 function assetsReady() {
     coral.ready();
 }
