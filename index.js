var randomNumber1= Math.floor((Math.random()*6)+1); //generating random no. from 1 to 6
var randomImage = "dice"+randomNumber1+".png"; //writing string as "dice1.png-dice6.png"

var randomImageDisplay="images/"+randomImage; //writing as images/dice1/2/3/4/5/6.png
var image1 = document.querySelectorAll("img")[0]; //selecting dice no. 1(index 0) out of 2dice images

image1.setAttribute("src", randomImageDisplay); //changing 1st image 

var randomNumber2= Math.floor((Math.random()*6)+1);
var randomImage2="dice"+randomNumber2+".png";
var randomImageDisplay2="images/"+randomImage2;
var image2=document.querySelectorAll("img")[1]; // selecting dice no. 2 out of 2dice images

image2.setAttribute("src", randomImageDisplay2); //changing 2nd images with randomly selected nos.


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent=" 🚩Player 1 wins!!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins!! 🚩";
}
else{
    document.querySelector("h1").textContent="It's draw!! ";
}


const button=document.querySelector("button");
button.addEventListener("click",() => {
    window.location.reload();
});