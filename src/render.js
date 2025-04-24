const stBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

stBtn.onclick = clickStart;

stopBtn.onclick = clickStop;

function clickStop(){
    //store timeLeft

    //stop current function

    //display start btn

    //countdown func again with new time
}

function clickStart(){

    const timerText = document.getElementById('timer');

    const targetTime = new Date().getTime() + 60000;

    countdown(targetTime, timerText);
}

function countdown(endTime, display){
    const intervalID = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft =  endTime - now;

        //hide start button

        stBtn.style.visibility = 'hidden';

        //display stop button

        stopBtn.style.visibility = 'visible';

        const stopBtn = document.getElementById('stopBtn');

        if(timeLeft <= 0){
            clearInterval(intervalID);

            display.textContent = "TIMES UP!";
            return;
            
            //display the times up div
        }

        const mins = Math.floor((timeLeft % (1000 * 60 * 60 )) / (1000 * 60));
        const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

        display.textContent = `${mins}:${secs}`;
    }, 1000);
}