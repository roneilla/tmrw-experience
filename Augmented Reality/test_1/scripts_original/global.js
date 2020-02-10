  var renderer, scene, camera;
  var arToolkitContext, onRenderFcts, arToolkitSource, markerRoot, lastTimeMsec;

  var params = {
      opacity: 1
  };

  var pc = 0;

  // declare variables here

  // var fullVideo = new MarkerVideo('../videos/FULL.mp4');
  var imageTest = new MarkerImage('img/testimage.png');
  imageTest.setSize(1, 1, 1);
  imageTest.setPosition(0, 0, 0);

  //  fullVideo.setSize(1080, 1080);
  //  fullVideo.load();

  // marker variables
  var marker1, marker2;
