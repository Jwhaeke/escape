var i = 0;
var txt = 'Probeer te ontsnappen uit mijn kamers'; /* The text */
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

var t = 0;
var txt2 = 'Heel veel succes'; /* The text */

function write2() {
  if (t < txt.length) {
    document.getElementById("writeMore").innerHTML += txt2.charAt(t);
    t++;
    setTimeout(write2, speed);
  } else if (i = txt.length) {
        showButton();
      }
}

function showButton() {
    document.getElementById("buttonOne").style.display = "block";
}

