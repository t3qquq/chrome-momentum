const blockInfo = document.querySelector('.time-block')


function blockMove()
{
    const time = new Date();
    const sec = time.getSeconds();
    if(sec<16){
        blockInfo.classList.add('time-block--flipped-left');
        blockInfo.style.top =`${sec*6}vh`;
        blockInfo.style.left =`0`
    }
    else if(sec>=16&&sec<31){
        blockInfo.classList.add('time-block--flipped-bottom');
        blockInfo.style.left = `${(sec-15)*6}vh`;
        blockInfo.style.top = `90vh`;
    }
    else if(sec>=31&&sec<46){
        blockInfo.classList.add('time-block--flipped-right');
        blockInfo.style.left = `90vh`
        blockInfo.style.top = `${(45-sec)*6}vh`;
    }
    else{
        blockInfo.classList.add('time-block--flipped-up');
        blockInfo.style.left = `${(60-sec)*6}vh`;
        blockInfo.style.top = `0`; 
    }

    if(sec===16){
        blockInfo.classList.remove('time-block--flipped-left');
    }
    else if(sec===31){
        blockInfo.classList.remove('time-block--flipped-bottom');
    }
    else if(sec===46){
        blockInfo.classList.remove('time-block--flipped-right');
    }
    else if(sec===1){
        blockInfo.classList.remove('time-block--flipped-up')
    }
 
}



function init(){
    blockMove();
    setInterval(blockMove, 1000);
}






init();