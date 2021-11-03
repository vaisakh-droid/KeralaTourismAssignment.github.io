// FOR NAV BAR

var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";
document.querySelector('.fa-times').style.display ="none";
function togglemenu(){
    if(menuList.style.maxHeight == "0px"){

        menuList.style.maxHeight = "180px";
        
        document.querySelector('.fa-bars').style.display ="none";
        document.querySelector('.fa-times').style.display ="block";
       

    }
    else{

        document.querySelector('.fa-bars').style.display ="block";
        document.querySelector('.fa-times').style.display ="none";
        menuList.style.maxHeight = "0px";
    }
}

// FOR NAV BAR

// FOR CHANGING TITLE 

var text = ["If it was shared on twitter or facebook then it must be true.", "Don't believe everything you read on internet just because there is a picture with a quote next to it. ", "If most of the news we read is fake, imagine how bad history is.", "The further a society drifts from truth the more it will hate those who speak it."];
var counter = 0;
var elem = $("#greeting");
setInterval(change, 5000);

function change() {
    elem.fadeOut(function() {
        elem.html(text[counter]);
        counter++;
        if (counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}

// FOR CHANGING TITLE 


// FOR LOGIN

document.querySelector('.login').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-login').style.display = "flex";

});

document.querySelector('.close-login').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-login').style.display = "none";

});

// FOR LOGIN


// FOR SIGNUP

document.querySelector('.signup').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-signup').style.display = "flex";

});

document.querySelector('.close-signup').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-signup').style.display = "none";

});
