console.log(document.getElementById("clock"))

function updateclock() {
    const now = new Date();
    let hour = now.getHours();
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = (hour % 12 || 12).toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hour}:${min}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;
}
setInterval(updateclock, 1000);
updateclock();