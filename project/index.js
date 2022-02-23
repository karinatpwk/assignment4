//Click
$("h1").click(function(){
  $("h1").css("color","#699eee");
});
//Mouseover
$(document).ready(function(){
  $("h2").mouseover(function(){
    $("h2").css("background-color", "#dde8fe");
  });
  $("h2").mouseout(function(){
    $("h2").css("background-color", "#FFF8F3");
  });
});
//Keydown
$(document).ready(function(){
  $("input").keydown(function(){
    $("input").css("background-color", "#e1edfb");
  });
  $("input").keyup(function(){
    $("input").css("background-color", "#faddbf");
  });
});
//Animation
teenagers.onclick = function() {
     let start = Date.now();

     let timer = setInterval(function() {
       let timePassed = Date.now() - start;

       teenagers.style.left = timePassed / 5 + 'px';

       if (timePassed > 2000) clearInterval(timer);

     }, 20);
   }
//Sound
function play(){
  var audio = new Audio('sounds/10e1076dfd6c701 (1).mp3');
  audio.play();
};

//Snippet1
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'

//Snippet2
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
