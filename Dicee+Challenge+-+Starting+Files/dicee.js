// document.query
var p1dice = Math.floor(Math.random()*6 + 1);
var p2dice = Math.floor(Math.random()*6 + 1);

var p1src = "images/dice" + p1dice + ".png";
var p2src = "images/dice" + p2dice + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", p1src);
document.getElementsByClassName("img2")[0].setAttribute("src", p2src);

if (p1dice > p2dice) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (p1dice < p2dice) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Even Steven!";
}