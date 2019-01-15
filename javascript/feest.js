function timer(){
    setTimeout(write, 1000);
}

var i = 0;
var txt = 'Zombies!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function write() {
  if (i < txt.length) {
    document.getElementById("explain").innerHTML += txt.charAt(i);
    i++;
    setTimeout(write, speed);
  } else if (i = txt.length) {
        write2();
      }
}