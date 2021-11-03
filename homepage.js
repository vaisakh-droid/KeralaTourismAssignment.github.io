
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

$(function() {

    var mainbottom = $('#main').offset().top + $('#main').height()/15;
   
    $(window).on('scroll',function(){

        stop = Math.round($(window).scrollTop());
     
        if (stop > mainbottom) {
            $(".navbar").css('background-color', '#141414');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
});


var text = ["Kerala, God’s Own Country – The Land of Beauty and Wonders!", "How can one forget Ayurveda? For getting a holistic Ayurveda spa treatment, Kerala could be the destination.", "If you love to learn about culture, heritage, and hundreds of years of history then, God’s Own Country has them all.", "Kerala has got its Kochi. The great port of Kochi is something that is a magnet for visitors and history lovers alike.","The backwaters are not just the back waterways, in fact, these are the most vibrant and vying for visitors with houseboats and homestays."];
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



document.querySelector('.login').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-login').style.display = "flex";

});

document.querySelector('.close-login').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-login').style.display = "none";

});


document.querySelector('.signup').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-signup').style.display = "flex";

});

document.querySelector('.close-signup').addEventListener("click",function(){
    
    document.querySelector('.bg-modal-signup').style.display = "none";

});
