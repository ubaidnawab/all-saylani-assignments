function imageClick(image) {
    var popupId = document.getElementById("popup");
    popupId.classList.remove("popup-display-none");
    popupId.classList.add("popup-display-block");
    document.getElementById("popupImg").style.backgroundImage = 'url('+image+')';

    }
function popupClose(){
    var popupId = document.getElementById("popup");
    popupId.classList.remove("popup-display-block");
    popupId.classList.add("popup-display-none");
}