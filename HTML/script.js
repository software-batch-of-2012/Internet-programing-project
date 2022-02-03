
var menulist = document.getElementById("menulist");
//var nav = document.getElementsById("nav");
menulist.style.maxHeight= "0px";

    function togglemenu(){
        if(menulist.style.maxHeight == "0px"){
            menulist.style.maxHeight = "130px";

        }
        else{
            menulist.style.maxHeight = "0px";
        }

        
    }

    window.addEventListener("scroll" , function(){
        var nav = document.getElementById("nav");
        
        nav.classList.toggle("sticky" ,window.scrollY > 0)
    })