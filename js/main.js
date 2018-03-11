
function toggleStyle()
{
    var menu = document.getElementById("menu");
    
    if(menu.className === "menuHide")
    {
        menu.className = "menuShow";     
        document.getElementById("clickMe").className = "clickMeAfter";   
    }
    else
    {
        menu.className = "menuHide";
        document.getElementById("clickMe").className = "clickMeBefore";
    }
}

function makeCurrent()
{
    var listItems = document.getElementsByTagName("li");

    for(let i = 0; i < listItems.length; ++i)
    {
        
        listItems[i].classList.remove("menuCurrent");
        listItems[i].classList.add("menuInactive");
        
    }

    this.classList.add("menuCurrent");
}

window.onload = function()
{
    document.getElementById("menu").className = "menuHide";
    var clickMe = document.getElementById("clickMe");    
    clickMe.className += " clickMeBefore";
    clickMe.addEventListener("click", toggleStyle, false);    

    var listItems = document.getElementsByTagName("li");
    for(let i = 0; i <listItems.length; ++i)
    {
        listItems[i].addEventListener("click", makeCurrent, false);    
    }
}