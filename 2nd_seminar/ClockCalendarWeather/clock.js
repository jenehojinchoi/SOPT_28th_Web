const titleDate = document.querySelector('.date'),
    analogHour = document.querySelector('.analog_hour'),
    analogMinute = document.querySelector('.analog_minute'),
    analogSecond = document.querySelector('.analog_second');
    
let digitalClock = document.querySelector('.digital_clock'),
    digitalButton = document.querySelector('.digital_button');

let hour24 = true;

const fillZero = (num) => {
    num = num + "";
    if (num.length < 2){
        return "0"+num;
    } else {
        return num;
    }
}

const getDateToday = () => {
    const now = new Date();
    let year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate();
    return {now, date, month, year}
}

const getTimeNow = () => {
    const now = new Date();
    let hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    return {second, minute, hour}
}

const addDate = () => {
    let {now, date, month, year} = getDateToday();
    month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(now);
    titleDate.innerHTML = `Today is <span>${month} ${date}</span>, ${year}`;
}

const addDigitalTime = () => {
    let {second, minute, hour} = getTimeNow();
    let AMPM = '';
    if (!hour24) {
        if (hour >= 12) {
            hour = hour-12;
            AMPM = 'PM';
        } else {
            AMPM = 'AM'
        }
    }
    digitalClock.innerHTML = `${fillZero(hour)}:${fillZero(minute)}:${fillZero(second)} ${AMPM}`;
};

const changeTime = () => {
    if (hour24) {
        digitalButton.innerHTML = 'AM/PM';
        hour24 = false;
        
    } else {
        digitalButton.innerHTML = '24HR';
        hour24 = true;
    }
}

const drawAnalogClock = () => {
    const {second, minute, hour} = getTimeNow();
    const hourDegree = (hour + minute / 60) * (360 / 12) + 90,
        minuteDegree = (minute + second / 60) * (360 / 60) + 90,
        secondDegree = second * (360 / 60) + 90;

    analogHour.style.transform = `rotate(${hourDegree}deg)`;
    analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
    analogSecond.style.transform = `rotate(${secondDegree}deg)`;
}

const everySecond = () => {
    setInterval(drawAnalogClock, 1000);
    setInterval(addDigitalTime, 1000);
};

const drawClock = () => { 
    everySecond();
    addDate();
    digitalButton.addEventListener("click", changeTime);
    
}

drawClock();