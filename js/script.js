
const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');
const clockElement = document.querySelector('#clock');
const audio = document.querySelector('audio');

let min;
let seg;
let status;

function clock() {
  
  if((min > 0) || (seg > 0)){	
    status = true;			
    if(seg == 0){					
      seg = 59;					
      min = min - 1	
    }				
    else{					
      seg = seg - 1;				
    }				
    if(min.toString().length == 1){					
      min = "0" + min;				
    }				
    if(seg.toString().length == 1){					
      seg = "0" + seg;				
    }				
    clockElement.innerHTML = min + ":" + seg;	
    setTimeout('clock()', 1000);		
  }			
  else{				
    clockElement.innerHTML= "00:00";	
    audio.play();
    status = false;		
  }
}

btnStart.addEventListener('click', function () {
  min = 25;
  seg = 1;
  if (!status)
    clock();
});

btnStop.addEventListener('click', function () {
  if (status) {
    clockElement.innerHTML= "00:00";	
    status = false;	
    min = 0;
    seg = 0;
  }
    
});