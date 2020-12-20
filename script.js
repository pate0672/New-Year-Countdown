// PULLING THE DOM 
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Getting the current year
const currentYear = new Date().getFullYear();

// Getting new year
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {

    const currentTime = new Date();
    const diff = newYear - currentTime;

    console.log(diff);

    // convert miliseconds

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;

    const m = Math.floor(diff / 1000 / 60) % 60;

    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}

setInterval(updateCountdown, 1000);
