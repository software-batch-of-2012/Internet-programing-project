    window.addEventListener("scroll" , function(){
        var nav = document.getElementById("nav");
        
        nav.classList.toggle("sticky" ,window.scrollY > 0)
    })

    var ul = document.getElementById("menulist");
    var lbut=document.getElementById("l");
    var xbut = document.getElementById("x");
    
    function togglemenu(){
        ul.style.left = "0px";
        lbut.style.display = "none";
        xbut.style.display = "inline";
    }

    function cancel(){
        ul.style.left = "-1230px";
        lbut.style.display = "inline";
        xbut.style.display = "none";
    }
