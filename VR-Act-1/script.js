var loadScreen = document.getElementById('preload');
var wristbands = document.querySelector('#c1');
var glasses = document.querySelector('#c2');
var pills = document.querySelector('#c3');

var container = document.getElementById('container');
var messagebox = document.getElementById('message-box');
var wristband_message = document.getElementById('wristbands-message');

var wristband_close = document.getElementById('wr-close-button');
var m2_close = document.getElementById('wr-close-button');
var gus_close = document.getElementById('gus-close-button');

var m2 = document.getElementById('m2-message');
var counter = 0;

setTimeout(
  (hideScreen = () => {
    $('#preload').animate({ opacity: '0' }, 1000);
    setTimeout(function () {
      loadScreen.style.display = 'none';
    }, 2000);
  }),
  5000
);

wristbands.addEventListener('click', function () {
  wristband_message.style.display = 'block';
  messagebox.style.display = 'none';
  container.style.display = 'none';
  console.log('clicked!');
  counter += 1;
  console.log(counter);
  checkTime();
});

wristband_close.addEventListener('click', function () {
  wristband_message.style.display = 'none';
  messagebox.style.display = 'block';
  container.style.display = 'block';
  messagebox.innerHTML = 'Damn my phone be blowing up. 4 missed calls and... ';
  setTimeout(function () {
    m2.style.display = 'block';
    container.style.display = 'none';
  }, 4000);
});

m2.addEventListener('click', function () {
  m2.style.display = 'none';
  container.style.display = 'block';
  messagebox.innerHTML = 'You call her three times, with no answer';
  setTimeout(function () {
    messagebox.innerHTML =
      '<span style="font-style: italic;">Hint: Hover over objects to find clues</span>';
  }, 5000);
});

glasses.addEventListener('click', function () {
  messagebox.innerHTML =
    'Two glasses means there were two people here last night. Nicole was here.';
  console.log('clicked!');
  counter += 1;
  console.log(counter);
  checkTime();
  setTimeout(function () {
    messagebox.innerHTML =
      '<span style="font-style: italic;">Hint: Hover over objects to find clues</span>';
  }, 5000);
});

pills.addEventListener('click', function () {
  messagebox.innerHTML =
    "You don't remember anything from last night. You think it's the pills you took.";
  console.log('clicked!');
  counter += 1;
  console.log(counter);
  checkTime();
  setTimeout(function () {
    messagebox.innerHTML =
      '<span style="font-style: italic;">Hint: Hover over objects to find clues</span>';
  }, 5000);
});

function checkTime() {
  if (counter >= 3) {
    setTimeout(function () {
      document.getElementById('container').style.display = 'none';
      document.getElementById('message-gus').style.display = 'block';
    }, 2000);
  }
}
