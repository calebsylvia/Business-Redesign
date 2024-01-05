let callToAction = document.getElementById("callToAction");
let caterTxt = document.getElementById("caterTxt");

window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width: 768px)').matches) {
        callToAction.classList.remove("w-50");
        callToAction.classList.add("w-100");
    }

    if(window.matchMedia('(min-width: 769px').matches && callToAction.classList.contains("w-100")){
        callToAction.classList.remove("w-100");
        callToAction.classList.add("w-50");
    }

    if(window.matchMedia('(max-width: 425px)').matches){
        caterTxt.classList.add("text-center");
    }

    if(window.matchMedia('(min-width: 426px)').matches && caterTxt.classList.contains("text-center")){
        caterTxt.classList.remove("text-center");
    }
});