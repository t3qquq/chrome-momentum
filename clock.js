const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
const AMPM = clockContainer.querySelector('h2');

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
 
    if(hours<12 || hours===24)
    AMPM.innerText = "AM";
    else
    AMPM.innerText = "PM";


    clockTitle.innerText= `${hours<12?hours:hours-12} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();