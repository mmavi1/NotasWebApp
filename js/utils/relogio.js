
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);

function toggleDark() {
    document.body.classList.toggle('dark');
}