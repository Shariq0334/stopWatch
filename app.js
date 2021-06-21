var timer = document.getElementById("stopwatch")
var hr = 0;
var min = 0;
var sec = 0 ;
var stopTime = true;

function startTimer (){
    var startBtn = document.getElementById("reset");
    startBtn.disabled  = true
        timerCycle();
    
}

function stopTimer (){
    var startBtn = document.getElementById("reset");
    startBtn.disabled  = false
 clearInterval(counter)
}

var counter ;
function timerCycle (){
    counter = setInterval(function () {
                sec = sec + 1
                console.log(sec)

                if (sec == 60) {
                    min = min + 1;
                    sec = 0;
                  }
                else if (min == 60) {
                    hr = hr + 1;
                    min = 0;
                    sec = 0;
                  }
              
                //   if (sec < 10) {
                //     sec = '0' + sec;
                //   }
                //   if (min < 10 || min == 0) {
                //     min = '0' + min;
                //   }
                //   if (hr < 10 || hr == 0) {

                //     hr = '0' + hr;
                //   }
                  timer.innerHTML = hr + ':' + min + ':' + sec + "s"
            }, 1000)

   
}

function clearCounter(){
   
    hr = 0;
     min = 0;
     sec = 0 ;
    timer.innerHTML = "00:00:00"
    
}
