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
         'pattern-club62-1.patt');
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
         console.log("omg! it works hehe");
     }

 }