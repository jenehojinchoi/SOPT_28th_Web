const calendar = document.querySelector(".calendar"),
  calendarHeader = document.querySelector(".calendar_header"),
  calendarWeekday = document.querySelector(".calendar_weekday"),
  calendarDate = document.querySelector(".calendar_date");

const lastDateInMonth = (month, year) => {
    return new Date(year, month+1, 0).getDate();
};

const firstWeekdayInMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

const drawDate = (year, month, date) => {
  const lastDate = lastDateInMonth(month, year),
    startWeekDay = firstWeekdayInMonth(month, year);
  
  let weekDiv = document.createElement('div');
  for (let num = 1; num <= startWeekDay + lastDate; num++) {
    let dateDiv = document.createElement('div');
    weekDiv.appendChild(dateDiv);

    if (num > startWeekDay) {
      dateDiv.innerHTML = num-startWeekDay;
    } 
    if ((num % 7 === 0) || (num === startWeekDay + lastDate)) {
      calendarDate.appendChild(weekDiv);
      weekDiv = document.createElement('div');
    } 
    if (num - startWeekDay === date){
      dateDiv.style.backgroundColor = "skyblue";
    } 
  }
};

const drawWeekDay = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  weekDays.forEach((weekday) => {
    const weekdayDiv= document.createElement("div");
    weekdayDiv.innerText = weekday;
    calendarWeekday.appendChild(weekdayDiv);
  });
};

const drawHeader = (now) => {
  let monthString = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(now);
  calendarHeader.innerHTML = `${monthString}`;
};

const drawCalendar = () => {
  const {now, date, month, year} = getDateToday();
  drawHeader(now);
  drawWeekDay();
  drawDate(year, month, date);
};

drawCalendar();