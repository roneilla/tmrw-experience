  var renderer, scene, camera;
  var arToolkitContext, onRenderFcts, arToolkitSource, markerRoot, lastTimeMsec;

  var params = {
      opacity: 1
  };

  var btext = document.getElementsByTagName("BUTTON")[1].textContent;

  var pc = 0;


  // declare video variables here

  var coral = new markerVideo('videos/CORAL.mp4');
  var fish = new markerVideo('videos/FISH.mp4');
  var crab = new markerVideo('videos/CRAB.mp4');
  var turtle = new markerVideo('videos/TURTLE.mp4');
  var shark = new markerVideo('videos/SHARK.mp4');
  var fullVideo = new markerVideo('videos/FULL.mp4');

  coral.setSize(236, 214);
  coral.load();

  crab.setSize(96, 96);
  crab.load();

  fish.setSize(402, 418);
  fish.load();

  turtle.setSize(278, 278);
  turtle.load();

  shark.setSize(134, 136);
  shark.load();

  fullVideo.setSize(1080, 1080);
  fullVideo.load();

  // marker variables
  var marker1, marker2, marker3, marker4, marker5, marker6;
