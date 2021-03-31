var pageGreeting = document.getElementById("pageGreeting");
var popup = document.getElementById("popup");
var clock = document.getElementById("clock");
window.onload = displayClock();

function signIn() {
    var userName = document.getElementById("myInput").value;
    popup.innerHTML = ('<h1>' + userName + '</h1>');
}


function displayClock(){
  var display = new Date().toLocaleTimeString();
  clock.innerHTML = display;
  setTimeout(displayClock, 1000); 
}