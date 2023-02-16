const curDate = document.getElementById("date");
const weatherCondition = document.getElementById('weathercon');
const input = document.getElementById('input');
const tempStatus = "cloud";

const getCurrentDay = () => {
    const weekDay = new Array();
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";

    let getTime = new Date();
    let day = weekDay[getTime.getDay()];
    return day;
}
getCurrentDay();

const getCurrentTime = () => {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const currentTime = new Date();
    const month = months[currentTime.getMonth()];
    const date = currentTime.getDate();

    let hour = currentTime.getHours();
    let mins = currentTime.getMinutes();

    let period = "AM";
    if (hour > 11) {
        period = "PM";
        if (hour > 12) hour -= 12;
    }
    if (mins < 10 || hour < 10) {
        mins = "0" + mins;
        hour = "0" + hour;
    }

    const year = currentTime.getFullYear();

    let fullDate = `${month}${date}${year} - ${hour}:${mins}:${period}`;
    return fullDate;

}

curDate.innerHTML = `${getCurrentDay()} -  ${getCurrentTime()}`;