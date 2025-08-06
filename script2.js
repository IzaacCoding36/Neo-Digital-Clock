// Modern 24-Hour Digital Clock
function displayTime() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();

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