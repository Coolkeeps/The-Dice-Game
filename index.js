var RandomNumber1 = Math.floor(Math.random() * 6)+ 1;
var NewImage = "Images/dice" + RandomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",NewImage);

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var NewImage2 = "Images/dice"+RandomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",NewImage2);


if (RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won! "
}
else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won! "
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!! "
}