var calendar = document.querySelector('#calendar');
var marcie_poster = document.querySelector('#marcie-poster');
var paint_jar = document.querySelector('#paint-jar');
var italy_card = document.querySelector('#italy-card');
var spain_card = document.querySelector('#spain-card');
var vitamin_bottle = document.querySelector('#vitamin-bottle');

var container = document.getElementById('container');

var landingpage = document.getElementById('landing-page');
var landingbutton = document.getElementById('land-button');

var conv = document.getElementById('preload');
var conv_wrapper = document.getElementById('preload-message');

var conv_btn = document.getElementById('preload-button');

var selected = 0;
var selected2 = 0;

var messagebox = document.getElementById('message-box');

var finalscreen = document.getElementById('finalscreen');

var completed = 0;

var conversation1 = [
  "You: I'm so sorry I wasn't there for you last night. I shouldn't have gone that far. Had I known... ",
  "Nicole: Yeah... you shouldn't have left. But it's ok. I think I just smoked some bad weed.",
  'Nicole: Just a really bad night.',
  '...',
  'Nicole: Anyways...',
  "You: Um your mom texted me asking where you were this morning. I told her you were on your way home after when I thought you had slept over at my apartment before I found out you didn't.",
  "You: So what exactly happened yesterday? What did you mean by 'She's alive' in your message?",
  'Nicole: I thought I saw my sister.',
  "You: What? I didn't even know you had a sister?",
  'Nicole: Yeah, had.',
  'Nicole: She died two months ago in a car accident...',
  "You: I'm so sorry...",
  "Nicole: I've never told anyone that.",
  'You: You know I am here for you and our friends are here for you, and your family. Anything you need, I am listening.',
  'Nicole: Thanks Andrew, I appreciate that.',
  "Nicole: It's been hard.",
  'Nicole: It was especially hard on my mom.',
  "Nicole: I've just been trying to keep a brave face.",
  "You: It's okay to be upset. What you went through was traumatic.",
  'You: What can I do to help?',
  'Nicole: Can I tell you about her?',
  '...',
];

var conversation2 = [
  'Nicole: She was such a fun,  person to be around, my friend and my sister.',
  'Andrew: Is there anything else I can do?',
  'Nicole: Just be here.',
];

landingbutton.addEventListener('click', function () {
  $('#landing-page').animate({ opacity: '0' }, 1000);
  setTimeout(function () {
    landingpage.style.display = 'none';
  }, 1000);
  conv_wrapper.innerHTML = conversation1[selected];
});

conv_btn.addEventListener('click', function () {
  selected++;
  conv_wrapper.innerHTML = conversation1[selected];
  console.log(selected);
  if (selected == 21) {
    $('#preload').animate({ opacity: '0' }, 1000);
    container.style.display = 'block';
    setTimeout(function () {
      conv.style.display = 'none';
    }, 1000);
  }
});
var message_select = [
  "Nicole: Wow it hasn't even changed. Did you know she was on the way to pick me up when she died? ",
  "Nicole: That this was the night we were supposed to grab dinner after she told me she missed me. It was just any normal boring day, and then that happened. And I... I don't understand how it happened? ",
  'Nicole: I mean I know.',
  "Nicole: I know some asshole didn't look before switching lanes on the highway. She's taken that highway countless times... And I knew something was wrong because she had told me before she left the house. After I didn't hear back from her  I called mom to see if she actually left and she had. ",
  "Nicole: I just remember feeling uneasy, but tried not to overthink it. I thought she could've went to go pick up coffee or run an errand or something. But the thing is, she would've told me if she had.",
  'Nicole: And then the worst happened. The police came to tell us that she... was in an accident.',
  "Nicole: If I had just told her to wait for me to come home instead... or not even gone out at all that day, she would've still been alive...",
  "Nicole: This was the last thing she said to me. <br> <a href='https://tinyurl.com/TMRW-lastwrds'>Last Texts from a Loved One</a>",
];

var select1 = 0;

calendar.addEventListener('click', function () {
  messagebox.innerHTML = message_select[0];
  changeText1();
  completed++;
  ifComplete();
});

function changeText1() {
  calendarInt = setInterval(() => {
    select1++;
    messagebox.innerHTML = message_select[select1];
    if (select1 == 8) {
      messagebox.innerHTML =
        '<span style="font-style: italic; color: #888;">Hint: Hover over objects to interact</span>';
      clearInterval(calendarInt);
    }
  }, 7000);
}

var message_select2 = [
  "Nicole: She was a huge fan, thats why when I saw her last night; I don't know why, but I started freaking out. And that's never happened before. If I had known she was playing there, I wouldn't have gone I think. And then this girl offered me her joint to try and calm me down... I took it.",
  'Nicole: Ha if Jordan knew I got to hang out with Marcie, she would be so jealous. Although, not under these circumstances...',
  "Nicole: She loved music, constantly making playlist and going to concerts. She really would've loved it.",
];

var select2 = 0;

marcie_poster.addEventListener('click', function () {
  messagebox.innerHTML = message_select2[0];
  changeText2();
  completed++;
  ifComplete();
});

function changeText2() {
  posterInt = setInterval(() => {
    select2++;
    messagebox.innerHTML = message_select2[select2];
    if (select2 == 3) {
      messagebox.innerHTML =
        '<span style="font-style: italic; color: #888;">Hint: Hover over objects to interact</span>';
      clearInterval(posterInt);
    }
  }, 5000);
}

paint_jar.addEventListener('click', function () {
  messagebox.innerHTML =
    "Nicole: Hahaha she tried to take up painting because she said she needed hobbies. She literally hated it, but kept doing it for I don't even know why. I think she just wanted to impress or like relate to this artsy boy she had a crush on. It's weird being here. Everything is exactly the same as it always is, except she's not here. And she never will be again.";
  setTimeout(function () {
    messagebox.innerHTML =
      '<span style="font-style: italic; color: #888;">Hint: Hover over objects to interact</span>';
  }, 10000);
  completed++;
  ifComplete();
});

italy_card.addEventListener('click', function () {
  messagebox.innerHTML =
    "Nicole: She went on an European exchange a few years ago and always talked about going back. It's just so unfair... Guess she never will...";
  setTimeout(function () {
    messagebox.innerHTML =
      '<span style="font-style: italic; color: #888;">Hint: Hover over objects to interact</span>';
  }, 5000);
  completed++;
  ifComplete();
});

vitamin_bottle.addEventListener('click', function () {
  messagebox.innerHTML =
    'Nicole: Oh yeah haha. Jordan was a big health nut. Constantly trying to get at the best products her minimum wage ass could afford. Honestly, impressive. I wish I could be like that.';
  setTimeout(function () {
    messagebox.innerHTML =
      '<span style="font-style: italic; color: #888;">Hint: Hover over objects to interact</span>';
  }, 10000);
  completed++;
  ifComplete();
});

// window.addEventListener('click', function () {
//   messagebox.innerHTML =
//     'Nicole: She used to sneak out through the window all the time to go to parties on school nights. And this one time our mom caught her and sneaking back in, she was furious. Grounded Jordan for a month.';
//   setTimeout(function () {
//     messagebox.innerHTML =
//       '<span style="font-style: italic; color: #888;">Hint: Hover over objects to interact</span>';
//     completed++;
//   }, 5000);
//   ifComplete();
// });

function ifComplete() {
  if (completed >= 5) {
    setTimeout(function () {
      container.style.display = 'none';
      conv.style.opacity = '1';
      conv.style.display = 'block';
      conv_wrapper.innerHTML = conversation2[selected2];
      conv_btn.addEventListener('click', function () {
        selected2++;
        conv_wrapper.innerHTML = conversation2[selected2];
        if (selected2 == 3) {
          $('#preload').animate({ opacity: '0' }, 1000);
          finalscreen.style.display = 'block';
        }
      });
    }, 5000);
  }
}
