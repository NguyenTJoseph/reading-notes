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

var z = 0
var stars = document.getElementById("stars")
function submit() {
  if (z<1){
    var rating = document.getElementById("userRating").value;
    for (var x = 0; x < rating; x++) {
      var img = document.createElement("img");  
      var recipeRating = document.getElementById("Stars");
      img.src = "Resources/star.png";
      recipeRating.appendChild(img);
      (z++)
    } 
  } else {
    alert('You can only submit one rating')
    }

}


var a = 0
var stars2 = document.getElementById("stars2")
function submit2() {
  if (a<1){
    var rating2 = document.getElementById("userRating2").value;
    for (var y = 0; y < rating2; y++) {
      var img = document.createElement("img");  
      var recipeRating2 = document.getElementById("Stars2");
      img.src = "Resources/star.png";
      recipeRating2.appendChild(img);
      (a++)
    } 
  } else {
    alert('You can only submit one rating')
    }

}




