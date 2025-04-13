function openSide(evt, sideName) {
    var i, sidecontent, sidelinks;

    sidecontent = document.getElementsByClassName("sidecontent");
    for(i = 0; i < sidecontent.length; i++) {
        sidecontent[i].style.display = "none";
    }

    sidelinks = document.getElementsByClassName("sidelinks");
    for(i = 0; i < sidelinks.length; i++) {
        sidelinks[i].className = sidelinks[i].className.replace(" active", "");
    }
    document.getElementById(sideName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});
