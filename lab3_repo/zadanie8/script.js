var emoji = document.getElementById("emoji");

var emojiSize = 100;
var minEmojiSize = 40;
var maxEmojiSize = 500;
updateSize();

window.addEventListener("keydown", checkArrows);

function checkArrows(ev) {
    if (ev.keyCode == '38') {
        ev.preventDefault();

        emojiSize *= 1.1;
        updateSize();
        updateStats();
        if(emojiSize>maxEmojiSize)
        {
            window.removeEventListener("keydown", checkArrows);
            emoji.innerText = "💥";
        }
    }
    else if (ev.keyCode == '40') {
        ev.preventDefault();

        if(emojiSize>minEmojiSize)
        {
            emojiSize *= 0.9;
            updateSize();
            updateStats();
        }
        
    }
    

}
function updateSize()
{
    emoji.style.fontSize = String(emojiSize)+"px";
}


var stats = document.getElementById("stats");
emoji.addEventListener('contextmenu', showStats,false);

function showStats(ev) {
    if(ev.ctrlKey)
    {
        ev.preventDefault();
        stats.style.display = 'block';
        updateStats();
        emoji.removeEventListener('contextmenu',showStats);
    }
}

function updateStats()
{
    stats.innerText = "Emoji size: "+String(emojiSize).split('.')[0]+"px";
}