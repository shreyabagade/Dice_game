var randomNumber1 = Math.floor(Math.random() *6 )+1;
var lhsimg ="images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",lhsimg);


var randomNumber2 = Math.floor(Math.random() *6 )+1;
var rhsimg ="images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",rhsimg);
 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Uh, It's a Draw!";
}