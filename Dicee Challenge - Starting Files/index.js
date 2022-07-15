var randomnumber1 = Math.floor(Math.random() * 6) + 1; // number 1-6

var randomDiceimage1 = "dice" + randomnumber1 + ".png"; // image from dice1.png to dice2.png

var randomdicesource1 = "/Dicee Challenge - Starting Files/images/" + randomDiceimage1;

document.querySelectorAll("img")[0].setAttribute("src",randomdicesource1);

var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceimage2 = "dice" + randomnumber2 + ".png";

var randomdicesource2 = "/Dicee Challenge - Starting Files/images/" + randomDiceimage2;

document.querySelectorAll("img")[1].setAttribute("src",randomdicesource2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}