const stBtn = document.getElementById('startBtn');

stBtn.onclick = clickStart;

function clickStart(){

    const timerText = document.getElementById('timer');

    const targetTime = new Date().getTime() + 60000;

    countdown(targetTime, timerText);
}

function countdown(endTime, display){
    const intervalID = setInterval(function() {
        // display.style.visibility = "visible";
        const now = new Date().getTime();
        const timeLeft =  endTime - now;

        //hide start button

        //display stop button

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