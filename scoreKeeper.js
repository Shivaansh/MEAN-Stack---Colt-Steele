alert("connected!");

var score1 = 0;
var score2 = 0;
var winScore = 21;
var scoreLine = document.querySelector("h2");
var buttons = document.getElementsByTagName("button");
var numberInput = document.querySelector("input"); //the textbox
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");

var para = document.querySelector("p");
para.textContent = ("Playing to: " + winScore); 

numberInput.addEventListener("change", function(){
    //change event runs every time value is changed
    alert("Win score changed");
    winScore = numberInput.value; //value entered in box
    para.textContent = ("Playing to: " + String(winScore) ); 
    console.log(winScore);
});

buttons[0].addEventListener("click", function(){
    score1 = score1 + 1;
    scoreLine.textContent = (score1 + " to " + score2);
    if(score1 === winScore)
    {   
        //add winner class to element
        p1Display.classList.add("winner");
        alert("Team 1 wins!");
        reset();
    }
});

buttons[1].addEventListener("click", function(){
    score2 = score2 + 1;
    scoreLine.textContent = (score1 + " to " + score2);
    if(score2 === winScore)
    {
        //add winner class to element
        p2Display.classList.add("winner"); 
        //opposite is remove
        alert("Team 2 wins!");
        reset();
    }
});

buttons[2].addEventListener("click", reset);

function reset(){
    alert("Game reset!");
    score1 = 0;
    score2 = 0;
    p1Display.textContent = "0";
    p2Display.textContent = "0";
}