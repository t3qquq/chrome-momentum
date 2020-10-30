const timeBlocks = document.querySelectorAll('.time-block');
let blockLoc;

function setBlockLoc(){

    for(count=0;count<60;count++){
        if(count<16){
            //0~15번
            timeBlocks[count].classList.add(`loc-0-${count}`);
            blockLoc = document.querySelector(`.loc-0-${count}`);
            blockLoc.style.left = `0`
            blockLoc.style.top = `${count*6.25}vh`;
        }
        else if(count>=16&&count<31){
            //16~30
            timeBlocks[count].classList.add(`loc-${count-15}-15`);
            blockLoc = document.querySelector(`.loc-${count-15}-15`);
            blockLoc.style.left = `${(count-15)*6.25}vh`
            blockLoc.style.top = `93.75vh`;
        }
        else if(count>=31&&count<46){
            //31~45
            timeBlocks[count].classList.add(`loc-15-${45-count}`);
            blockLoc = document.querySelector(`.loc-15-${45-count}`);
            blockLoc.style.left = `93.75vh`
            blockLoc.style.top = `${(45-count)*6.25}vh`;
        }
        else{
            //46~59
            timeBlocks[count].classList.add(`loc-${60-count}-0`);
            blockLoc = document.querySelector(`.loc-${60-count}-0`);
            blockLoc.style.left = `${(60-count)*6.25}vh`
            blockLoc.style.top = `0`;
        }
    }
}



function init(){
    setBlockLoc();  //좌표에 해당하는 클래스 부여, 위치 설정
}
init();