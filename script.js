const h = document.querySelector('#h');
const m = document.querySelector('#m');
const s = document.querySelector('#s');
const cs = document.querySelector('#cs');

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let centSecs = 0;
let secs = 0;
let hrs = 0;
let mins = 0;
let id = null;

function startWatch(){
    if(mins>=60){
        hrs++;
        h.innerText = hrs<10?`0${hrs}`:hrs;
        mins = 0;
        console.log(mins)
      }

    if(secs>=60){
        mins++;
        m.innerText = mins<10?`0${mins}`:mins;
        secs = 00;
        
      }

      if(centSecs>=100){
        secs ++;
        s.innerText = secs<10?(`0${secs}`):secs;
        centSecs = 0;
      }
      
      centSecs++;
      cs.innerText = centSecs<10?`0${centSecs}`:centSecs;
    
 

}


start.addEventListener('click',()=>{
    id = setInterval(startWatch, 10);

})

stop.addEventListener('click',()=>{
    clearInterval(id)
})

reset.addEventListener('click',()=>{
    clearInterval(id);
    hrs = 0;
    mins = 0;
    secs = 0;
    centSecs = 0; 
    h.innerText = '00';
    m.innerText = '00';
    s.innerText = '00';
    cs.innerText = '00';
})