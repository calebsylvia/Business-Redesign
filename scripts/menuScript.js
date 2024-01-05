let topBtn = document.getElementById("topBtn");
let topIcon = document.getElementById("topIcon");

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

window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width: 425px)').matches) {
        topIcon.classList.remove("fa-2xl");
        topIcon.classList.add("fa-lg");
    }

    if(window.matchMedia('(min-width: 426px').matches && topIcon.classList.contains("fa-lg")){
        topIcon.classList.remove("fa-lg");
        topIcon.classList.add("fa-2xl");
    }
});