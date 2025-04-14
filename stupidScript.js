function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});

function move() {
    const outdoorVaule = document.querySelector('input[name="outdoor"]:checked')?.value;
    const foodVaule = document.querySelector('input[name="food"]:checked')?.value;
    const readingVaule = document.querySelector('input[name="reading"]:checked')?.value;
    const gameVaule = document.querySelector('input[name="games"]:checked')?.value;
    const SportsVaule = document.querySelector('input[name="Sports"]:checked')?.value;
    console.log(gameVaule);
    console.log(SportsVaule);
    localStorage.setItem("outdoor", outdoorVaule);
    localStorage.setItem("food", foodVaule);    
    localStorage.setItem("reading", readingVaule);
    console.log(localStorage.getItem('outdoor'));
   // window.location.href = "C:\Users\linso\ourSpace\hackMHS25\ourSpace.html";
    window.location.href = "people.html" ;
}