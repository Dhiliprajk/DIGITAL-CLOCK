dispCurrentTime = () => {
    let currDate = new Date();
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes(); // 24 hour - 12 hours
    let seconds = currDate.getSeconds();
    let session = "AM";
    if (hours > 12) {
        hours = hours - 12;
        session = "PM"
    }
    if (hours == 0) {
        hours = 12; // 0:03 - 1:03
    }
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let time = `${hours}:${minutes}:${seconds} ${session}`;
    document.getElementById("timeDisp").innerHTML = `${time}`;
}
dispCurrentDate = () => {
    let currDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInAWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let date = currDate.getDate();
    let day = daysInAWeek[currDate.getDay()];
    let month = monthNames[currDate.getMonth()];
    let year = currDate.getFullYear();
    let dateDisplay = `${date} ${day} ${month} ${year}`;
    document.getElementById("dateDisp").innerHTML = `${dateDisplay}`;
}
let liveTime = setInterval(function () {
    dispCurrentTime();
    dispCurrentDate();
}, 1000)