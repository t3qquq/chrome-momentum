const blockInfo = document.querySelector('.time-block')


function blockMove()
{
    const time = new Date();
    const sec = time.getSeconds();
    if(sec<16){
        blockInfo.style.top =`${sec*6}vh`
        blockInfo.style.left =`0`
    }
    else if(sec>=16&&sec<31){
        blockInfo.style.left = `${(sec-15)*6}vh`
        blockInfo.style.top = `90vh`;
    }
    else if(sec>=31&&sec<46){
        blockInfo.style.left = `90vh`
        blockInfo.style.top = `${(45-sec)*6}vh`;
    }
    else{
        blockInfo.style.left = `${(60-sec)*6}vh`
        blockInfo.style.top = `0`; 
    }

}



function init(){
    blockMove
    setInterval(blockMove, 1000);
}






init();