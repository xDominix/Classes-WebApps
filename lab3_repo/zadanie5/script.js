var chatElem = document.getElementById("chat");
var scoreElem = document.getElementById("score");
var score;

var stopPropagation=false;
var propButton = document.getElementById("propButton");
var resetButton = document.getElementById("resetButton");

var bigElem = document.getElementById("big");
var mediumElem = document.getElementById("medium");
var smallElem = document.getElementById("small");

var smallColor = document.getElementById("small").style.backgroundColor;
var mediumColor = document.getElementById("medium").style.backgroundColor;

propButton.addEventListener("click", changePropagation);
resetButton.addEventListener('click',setScene);

setScene();

function setScene()
{
    score = 0;
    updateScore();

    bigElem.addEventListener('click',bigClick,false);
    mediumElem.addEventListener('click',mediumClick,false);
    smallElem.addEventListener('click',smallClick,false);

    chatElem.innerText = "-";

    smallElem.style.backgroundColor = smallColor;
    mediumElem.style.backgroundColor = mediumColor;
}


function changePropagation()
{
    if(stopPropagation) propButton.innerText="Start Propagation";
    else propButton.innerText="Stop Propagation";

    stopPropagation = !stopPropagation;
}

function bigClick()
{
    score+= 1;
    chatElem.innerText = "You clicked gray (1pt)";
    if(stopPropagation) event.stopPropagation();
    updateScore();  
}

function mediumClick()
{
    score+= 3;
    chatElem.innerText = "You clicked red (3pt)";
    if(stopPropagation) event.stopPropagation();
    updateScore();
}

function smallClick()
{
    score+= 5;
    chatElem.innerText = "You clicked yellow (5pt)";
    if(stopPropagation) event.stopPropagation();
    updateScore();
}

function updateScore()
{
    scoreElem.innerText=score;
    if(score>50)
    {
        smallElem.removeEventListener('click',smallClick);
        smallElem.style.backgroundColor = "rgba(255, 255, 106,0.5)";
    }
    else if(score>30)
    {
        mediumElem.removeEventListener('click',mediumClick);
        mediumElem.style.backgroundColor = "rgba(255, 92, 92, 0.5)";
    }
}