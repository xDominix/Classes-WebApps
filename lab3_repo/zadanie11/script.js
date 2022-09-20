var startButton = document.getElementById("startButton");
startButton.addEventListener('click',startGame);

var zombieParent = document.getElementById("zombieContainer");
var gameInterval;
var oldZombie;
function startGame()
{
    startButton.disabled = true;
    
    gameInterval = setInterval(() => {
        if(Math.floor(Math.random() * 5)==2)
        {
            if(oldZombie!=null) setObject(oldZombie);
            var newzombie = document.createElement("div");
            newzombie.id = "zombie";
            zombieParent.appendChild(newzombie);
            startAnimation(newzombie);
            oldZombie = newzombie;
        }
        
        },100);
        
    
        
}

function stopGame()
{
    clearInterval(gameInterval);
    gameInterval = null;
    while (zombieParent.firstChild) {
        zombieParent.removeChild(zombieParent.firstChild);
    }

}

document.body.onmousedown = function(evt) { 
    if(gameInterval!=null)
   {
        var elem = document.elementFromPoint(event.clientX, event.clientY);
   
        if(elem.id == "zombie")
        {
            elem.remove();
            addScore(12);
        }
        else if(score>5)
        {
            addScore(-6);
        }
   }
  }

function startAnimation(obj) {
    //styling
    
    obj.style.bottom = (Math.floor(Math.random() * 10)*10+30).toString()+"px";
    
    var size = (Math.floor(Math.random() * 2)+2);
    var h= (156 *size ), w = (100 *size);
    obj.style.height = h.toString()+"px";
    obj.style.width = w.toString()+"px";
    obj.style.backgroundSize = "auto 100%";

    var speed = Math.floor(Math.random() * 4)+2;
    var type = Math.floor(Math.random() * 3);
    if(type==0) obj.style.transition = "left "+speed.toString()+"s linear";
    else if(type==1) obj.style.transition = "left "+speed.toString()+"s ease-in";
    else if(type==2) obj.style.transition = "left "+speed.toString()+"s ease-out";
    

    var widthOfSpriteSheet = w*10;
    var widthOfEachSprite = w;
    var position = widthOfEachSprite;
    var diff = widthOfEachSprite;
    var animationInterval = setInterval(() => {
        
        if(zombieParent.contains(obj))
        {
            obj.style.backgroundPosition = `-${position}px 0px`;
            
            if (position < widthOfSpriteSheet) {
                position = position + diff;
            } else {
                position = widthOfEachSprite;
            }
        }
        else
        {
            
            clearInterval(animationInterval);
            
        }
    }, 100);
} 

function setObject(obj)
{
    obj.style.left="-10%";
    obj.addEventListener('transitionend',minusOneHp);
    obj.addEventListener('transitionend',obj.remove);
}

var hp=3;
function minusOneHp()
{
    document.getElementById("hearts").firstElementChild.remove();
    hp-=1;
    if(hp==0)
    {
        stopGame();
    }

}

var score = 0;
function addScore(val)
{
    score+=val;
    document.getElementById("score").innerText= score.toString().padStart(4, "0");
}
