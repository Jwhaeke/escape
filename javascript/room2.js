function lightUp() {
    document.getElementById("toy").style.display = "block";
    document.getElementById("click1").style.display = "none";
    document.getElementById("clicker2").style.display = "block";

}

function timer() {
    setTimeout(timedAlert, 5000);
}

function timedAlert() {
    document.getElementById("txt").innerHTML = "";
    write();
}

var i = 0;
var txt = '...............waar...........is...........mijn.............popje............................................................'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function write() {
  if (i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(write, speed);
  } else if (i = txt.length) {
        document.getElementById("txt").innerHTML = "";
        document.getElementById("txt").style.fontSize = "30px"
        setTimeout(write2, 5000);
      }
  }


var b = 0;
var txt2 = '...............waar...........is.............mijn................popje.......'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function write2() {

    if (b < txt2.length) {  
        document.getElementById("txt").innerHTML += txt2.charAt(b);
        b++;
        setTimeout(write2, speed);
        } else if (b = txt2.length) {
            document.getElementById("txt").innerHTML = "";
            document.getElementById("txt").style.fontSize = "45px" 
            document.getElementById("clicker").style.display = "block";   
            setTimeout(write3, 5000);
            }
  }


var c = 0;
var txt3 = 'GEEF MIJN POPJE'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function write3() {
  if (c < txt3.length) {  
    document.getElementById("txt").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(write3, speed);
    } else if (c = txt.length) {
        document.getElementById("txt").innerHTML = "";
        document.getElementById("clicker").style.display = "block";
    }
}

function doll() {
    document.getElementById("dollShow").style.display = "block";
    document.getElementById("clicker2").style.display = "none";

    setTimeout(giveMe, 5000);
}

function giveMe(){
    document.getElementById("toy").src = "../img/black-and-white-close-up-dark-167964.jpg";
    document.getElementById("hand").style.display = "block";
}

function give(){
    document.getElementById("face").style.display = "block";
    setTimeout(delayedBye,5000);
    document.getElementById("dollShow").style.display = "none";

}

function allowDrop(event) {
    event.preventDefault();
}

function delayedBye(){
    alert("En nu mijn huis uit!");
    setTimeout(function(){document.location.href = "../pages/corridor.html"},500);
}