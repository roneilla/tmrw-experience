  var renderer, scene, camera;
  var arToolkitContext, onRenderFcts, arToolkitSource, markerRoot, lastTimeMsec;

  var params = {
      opacity: 1
  };

  var pc = 0;

  // declare variables here

  //   var fullVideo = new MarkerVideo('../videos/FULL.mp4');
  var imageTest1 = new MarkerImage('img/over-ar-01.png');
  imageTest1.setSize(3, 2, 2);
  imageTest1.setPosition(0, 0, 0);

  //  fullVideo.setSize(1080, 1080);
  //  fullVideo.load();

  // marker variables
  var marker1, marker2, marker3;
