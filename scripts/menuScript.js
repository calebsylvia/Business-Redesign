let topBtn = document.getElementById("topBtn");
window.onscroll = function() {scrollToTop()};

function scrollToTop(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}

function toTop(){
    document.documentElement.scrollTop = 0;
}