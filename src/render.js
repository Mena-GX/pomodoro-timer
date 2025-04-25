const stBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const tomato = document.getElementById('tomato');

let timeFinish = 0;
let check = 0;
let intervalID;

stBtn.onclick = clickStart;

stopBtn.onclick = clickStop;

function clickStop(){

    //stop current function

    check = 1;

    //hide stop button

    stopBtn.style.height = '0px';
    stopBtn.style.width = '0px';
    stopBtn.style.visibility = 'hidden';

    //display start btn
    
    stBtn.style.height = '40px';
    stBtn.style.width = '120px';
    stBtn.style.visibility = 'visible';

    tomato.src = "/Users/menagdd/Desktop/pomodorotimer/idle_Tomato.gif";

    //change start button function to startAgain

    stBtn.onclick = startAgain;
}

function startAgain(){
    check = 0; 

    const timerText = document.getElementById('timer');

    const targetTime = new Date().getTime() + timeFinish;

    countdown(targetTime, timerText);
}

function clickStart(){

    const timerText = document.getElementById('timer');

    const targetTime = new Date().getTime() + 60000;

    countdown(targetTime, timerText);
}

function countdown(endTime, display){
    var intervalID = setInterval(function() {
        if(check == 1){
            clearInterval(intervalID);

            return;
        }

        const now = new Date().getTime();
        timeFinish =  endTime - now;

        //hide start button

        stBtn.style.visibility = 'hidden';
        stBtn.style.width = '0px';
        stBtn.style.height = '0px';

        //display stop button

        stopBtn.style.width = '120px';
        stopBtn.style.height = '40px';
        stopBtn.style.visibility = 'visible';

        tomato.src = "/Users/menagdd/Desktop/pomodorotimer/Tomato_GIF.gif";


        if(timeFinish <= 0){
            clearInterval(intervalID);

            display.textContent = "TIMES UP!";

            //display the times up div
            return;
            
        }

        

        const mins = Math.floor((timeFinish % (1000 * 60 * 60 )) / (1000 * 60));
        const secs = Math.floor((timeFinish % (1000 * 60)) / 1000);

        display.textContent = `${mins}:${secs}`;
    }, 1000);
}