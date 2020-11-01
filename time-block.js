const timeBlocks = document.querySelectorAll('.time-block');
let blockLoc;

function setBlockLoc(){

    for(count=0;count<60;count++){
        if(count<16){
            //0~15번
            timeBlocks[count].classList.add(`loc-0-${count}`);
            blockLoc = document.querySelector(`.loc-0-${count}`);
            blockLoc.style.left = `0`
            blockLoc.style.top = `${count*6}vh`;
        }
        else if(count>=16&&count<31){
            //16~30
            timeBlocks[count].classList.add(`loc-${count-15}-15`);
            blockLoc = document.querySelector(`.loc-${count-15}-15`);
            blockLoc.style.left = `${(count-15)*6}vh`
            blockLoc.style.top = `90vh`;
        }
        else if(count>=31&&count<46){
            //31~45
            timeBlocks[count].classList.add(`loc-15-${45-count}`);
            blockLoc = document.querySelector(`.loc-15-${45-count}`);
            blockLoc.style.left = `90vh`
            blockLoc.style.top = `${(45-count)*6}vh`;
        }
        else{
            //46~59
            timeBlocks[count].classList.add(`loc-${60-count}-0`);
            blockLoc = document.querySelector(`.loc-${60-count}-0`);
            blockLoc.style.left = `${(60-count)*6}vh`
            blockLoc.style.top = `0`;
        }
    }
}

function flipBlock(){
    const time = new Date();
    const sec = time.getSeconds();
  
    if(sec>0&&sec<16){
        timeBlocks[sec].classList.add('time-block--flipped-left');
        timeBlocks[sec-1].classList.remove('time-block--flipped-left');
    }
    else if(sec>15&&sec<31){
        timeBlocks[sec].classList.add('time-block--flipped-bottom');
        timeBlocks[sec-1].classList.remove('time-block--flipped-bottom');
    }
    else if(sec>30&&sec<46){
        timeBlocks[sec].classList.add('time-block--flipped-right');
        timeBlocks[sec-1].classList.remove('time-block--flipped-right');
    }
    else if(sec>45){
        timeBlocks[sec].classList.add('time-block--flipped-up');
        timeBlocks[sec-1].classList.remove('time-block--flipped-up');
    }
    else if(sec===0){
        timeBlocks[0].classList.add('time-block--flipped-up');
        timeBlocks[59].classList.remove('time-block--flipped-up');
    }

    if(sec===16){
        timeBlocks[15].classList.remove('time-block--flipped-left');
    }
    else if(sec===31){
        timeBlocks[30].classList.remove('time-block--flipped-bottom');
    }
    else if(sec===46){
        timeBlocks[45].classList.remove('time-block--flipped-right');
    }
    else if(sec===1){
        timeBlocks[0].classList.remove('time-block--flipped-up')
    }

}

function init(){
    setBlockLoc();  //좌표에 해당하는 클래스 부여, 위치 설정
    setInterval(flipBlock, 1000);
}
init();