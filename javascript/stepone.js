var trigger = 0;

function showPainting() {
    document.getElementById("spooky").style.visibility = "visible";
    document.getElementById("click1").style.visibility = "hidden";
    document.getElementById("txt").innerHTML = "Dat is best een lelijk schilderij. Niet gek dat die zo in het donker hangt!";
    trigger ++;
    check();
}

function highFive() {
    document.getElementById("txt").innerHTML = "High Five!";
    document.getElementById("click2").style.display = "none";
    trigger ++;
    check();
}

function sit() {
    document.getElementById("txt").innerHTML = "Dit is geen moment om te gaan zitten";
    document.getElementById("click3").style.display = "none";
    trigger ++;
    check();
}

function check() {
    if (trigger == 3) {
        document.getElementById("firePlace").style.display = "block";
    }
}

function getKey1() {
    alert("Goed idee om te graaien in de gloeiende as!");
    alert("Je vindt een sleutel!");
    document.getElementById("ash1").style.display = "none";
    document.getElementById("txt").innerHTML = "<img src='../img/key1.png' alt='' height='150px' width='150px'>";    
    document.getElementById("final1").style.display = "block";
    alert("Tijd om terug te gaan naar de kamer")
}


function locked() {
    document.getElementById("clicker").style.display= "block";
    document.getElementById("clicker2").style.display= "block";
    document.getElementById("clicker3").style.display= "block";
    document.getElementById("locked1").style.display= "none";

    alert("De deur zit op slot! Zonder de sleutel kan je er niet uit...");
    document.getElementById("sound").play();
}
  