const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
const AMPM = clockContainer.querySelector('h2');
const dayInfo = document.querySelector('.js-day');

function getTime(){
    const time = new Date();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const seconds = time.getSeconds();

    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const year = time.getFullYear();

    if(hours===12){
        clockTitle.innerText= `12 : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`
    }
    else if(hours===24){
        clockTitle.innerText= `0 : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`
    }else{
        clockTitle.innerText= `${hours<12?hours:hours-12} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`
    }

    if(hours<12 || hours===24)
    AMPM.innerText = "오전";
    else
    AMPM.innerText = "오후";
    
    switch(day){
        case 0:
            dayInfo.innerText = `${month+1}월 ${date}일 일요일, ${year}`;
            break;
        case 1:
            dayInfo.innerText = `${month+1}월 ${date}일 월요일, ${year}`;
            break;
        case 2:
            dayInfo.innerText = `${month+1}월 ${date}일 화요일, ${year}`;
            break;
        case 3:
            dayInfo.innerText = `${month+1}월 ${date}일 수요일, ${year}`;
            break;
        case 4:
            dayInfo.innerText = `${month+1}월 ${date}일 목요일, ${year}`;
            break;
        case 5:
            dayInfo.innerText = `${month+1}월 ${date}일 금요일, ${year}`;
            break;
        case 6:
            dayInfo.innerText = `${month+1}월 ${date}일 토요일, ${year}`;
            break;
    }
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();