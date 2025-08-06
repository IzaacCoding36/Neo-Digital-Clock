// Modern Digital Clock with Enhanced Features
function displayTime() {
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const sessionElement = document.getElementById('session');

    // Determine AM/PM
    if (hrs >= 12) {
        sessionElement.textContent = 'PM';
    } else {
        sessionElement.textContent = 'AM';
    }

    // Convert to 12-hour format
    if (hrs > 12) {
        hrs = hrs - 12;
    } else if (hrs === 0) {
        hrs = 12; // Handle midnight as 12 AM
    }

    // Add zero padding for single digits
    const formattedHrs = hrs.toString().padStart(2, '0');
    const formattedMin = min.toString().padStart(2, '0');
    const formattedSec = sec.toString().padStart(2, '0');

    // Update display
    document.getElementById('hours').textContent = formattedHrs;
    document.getElementById('minutes').textContent = formattedMin;
    document.getElementById('seconds').textContent = formattedSec;
}

// Initialize clock
displayTime();

// Update every second with more accurate timing
setInterval(displayTime, 1000);