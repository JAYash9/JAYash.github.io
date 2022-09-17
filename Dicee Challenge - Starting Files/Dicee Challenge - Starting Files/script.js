var randomNumber1;
 randomNumber1=Math.floor((Math.random()*6)+1);
var randomdice="dice"+randomNumber1+".png"
var randomdimage="images/"+randomdice
let a=document.querySelector(".img1")
a.setAttribute('src',randomdimage)
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomdice2="dice"+randomNumber2+".png"
var randomdimage2="images/"+randomdice2
let b=document.querySelector(".img2")
b.setAttribute('src',randomdimage2)
console.log(b)
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
 else{
    document.querySelector("h1").innerHTML="Draws";

 }
