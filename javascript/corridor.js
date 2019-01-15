function timer(){
    setTimeout(walkOn,2000);
}


function walkOn() {
    alert("Vrijheid! Licht aan het eind van de tunnel!");
    setTimeout(butWait, 2000);
}

function butWait(){
    alert("Hm... dat klinkt niet goed...");
    setTimeout(function(){document.location.href = "../pages/feest.html"},2000);
}