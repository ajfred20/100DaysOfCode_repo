const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {

    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * degree;
    const ss = date.getSeconds() * degree;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});

// script.js

// Function to update the time on the clock
function updateClock() {
    // Get current time
    var now = new Date();
    
    // Get hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Update clock hands
    document.getElementById('hr').style.transform = 'rotate(' + (hours % 12 + minutes / 60) * 30 + 'deg)';
    document.getElementById('min').style.transform = 'rotate(' + (minutes + seconds / 60) * 6 + 'deg)';
    document.getElementById('sec').style.transform = 'rotate(' + seconds * 6 + 'deg)';
    
    // Set the time in the digital format
    document.getElementById('digital-time').innerText = formatTime(hours, minutes);
}

// Function to format time in 12-hour format
function formatTime(hours, minutes) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();
