const top_container = document.getElementById("top-container");
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu")


window.addEventListener("scroll", ()=>{
    updateImage();
});

function updateImage(){
    top_container.style.opacity = 1 - window.pageYOffset / 700;
    top_container.style.backgroundSize = 160 - window.pageYOffset/20 + "%";
}


updateClock();

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h -= 12;
        ampm = "PM";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h + ":";
    minuteE1.innerText = m + ":";
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}