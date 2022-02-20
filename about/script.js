
var menulist = document.getElementById("menulist");
//var nav = document.getElementsById("nav");
menulist.style.maxHeight= "0px";
var x = document.getElementById("x");

var inav = document.getElementsByClassName("h1");

x.style.display = "none";
var list = document.getElementById("l");
    function togglemenu(){
        if(menulist.style.maxHeight == "0px"){
            menulist.style.maxHeight = "180px";
            list.style.display="none";
            x.style.display = "inline";
            inav.style.color ="#FFF"
        }
        else{
            menulist.style.maxHeight = "0px";
            x.style.display = "none";
            list.style.display="inline";
        }
    }

    window.addEventListener("scroll" , function(){
        var nav = document.getElementById("nav");
        
        nav.classList.toggle("sticky" ,window.scrollY > 0)
    })