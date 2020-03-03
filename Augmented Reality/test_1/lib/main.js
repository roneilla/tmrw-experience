 function init() {
     initialize();
     createMarkers();
     addAssets();
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
         'pattern-club62-logo-01.patt');
     marker2 = new Marker(
         scene,
         arToolkitContext,
         'pattern-club62-logo-02.patt');
     marker3 = new Marker(
         scene,
         arToolkitContext,
         'pattern-club62-logo-03.patt');
 }

 function addAssets() {
     // marker1.root.add(coral.movieScreen);
     marker1.root.add(imageTest1.sprite);
 }

 function assetsReady() {
     // only needed for videos
     //  imageTest.ready(); 
 }

 function visibilityCheck() {
     if (marker1.root.visible === true) {
         setTimeout(function () {
             window.location.href = "http://ixd0076.firebird.sheridanc.on.ca/assignments/Semester-6/Interactive-Narrative/Geolocation";
         }, 2000);
     }
 }
