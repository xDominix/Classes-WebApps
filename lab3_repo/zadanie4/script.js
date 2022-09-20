document.getElementById("add").addEventListener("click", add);
document.getElementById("remove").addEventListener("click", remove);

var haveListener = false;
var clicks = 0;

function add()
{
    if(!haveListener)
    {
        haveListener = true;
        document.getElementById("counter").addEventListener("click", count);
        document.getElementById("clicks").innerHTML = "Listener added";
    }
    
}

function remove()
{
    if(haveListener)
    {
        haveListener = false;
        clicks = 0;
        document.getElementById("counter").removeEventListener("click", count);
        document.getElementById("clicks").innerHTML = "Listener removed";
    }
    
}

function count() 
{
    clicks += 1;
    document.getElementById("clicks").innerHTML = "Clicks: "+ clicks;
};