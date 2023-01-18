
// variables

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;
  
let seconds = '00'

// display
window.onload =() {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start time
function start() {
    // change the time
    seconds = 59;

    let workminutes = workTime - 1;
    let breakminutes = breakTime - 1;

    breakcount = 0;

    // countdow
    let timerFunction = () {
        //change the display
        document.getElementById('minutes').innerHTML = workminutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0){
            workminutes = workminutes - 1;
            if(workminutes === -1){
                if(breakcount % 2 === 0){
                    // start break
                    workminutes = breakminutes;
                    breakcount++
                }else{
                    // continue work
                    workminutes = workTime;
                    breakcount

                    //change the painel 
                    breakTittle.classList.remove('active');
                    workttle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction,1000); // 1000 = 1s
}