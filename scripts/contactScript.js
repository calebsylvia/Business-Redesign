let chatDots = document.getElementById("chatDots");

window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width: 768px)').matches) {
        chatDots.classList.remove("ps-3");
        chatDots.classList.add("ps-1");
    }

    if(window.matchMedia('(min-width: 769px').matches && chatDots.classList.contains("ps-1")){
        chatDots.classList.remove("ps-1");
        chatDots.classList.add("ps-3");
    }
})