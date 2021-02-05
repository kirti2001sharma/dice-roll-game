// for left image
var randomNo1 = (Math.floor(Math.random()*6)) + 1;
var imageSource = "images/dice" + randomNo1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);


// for right image
var randomNo2 = (Math.floor(Math.random()*6)) + 1;
var imageSource2 = "images/dice" + randomNo2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);


// For result message
if(randomNo1>randomNo2){
  document.querySelector("h1").innerHTML = "⛳Player 1 Wins"
}
else if (randomNo1<randomNo2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins⛳"
}
else{
  document.querySelector("h1").innerHTML = "Draw🙅‍♀️"

}
