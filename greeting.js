const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings')


function paintGreeting(text){
    form.classList.remove('showing')
    greeting.classList.add('showing')
    greeting.innerText= `${text} 님, 환영합니다.`;
}

function saveName(text){
    localStorage.setItem('currentUser',text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add('showing')
    form.addEventListener('submit', handleSubmit)
}

function loadName(){
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser===null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();