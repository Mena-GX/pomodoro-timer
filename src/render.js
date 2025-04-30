const stBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const tomato = document.getElementById('tomato');
const settingsBtn = document.getElementById('settings');

let timeFinish = 0;
let check = 0;
let intervalID;

let counter = 4; //standard amount of intervals

let length = 1500000; //standard amount of time - 25 minutes

let breakLngth = 300000; //standard amount of time for breaks - 5 minutes

stBtn.onclick = clickStart;

stopBtn.onclick = clickStop;

settingsBtn.onclick = openSettings;

function openSettings(){
    
}


//change the length of the work time
function changeLength(){

}

//change the length of the break time
function changeBreak(){

}

//change the amount of interations
function changeCounter(){

}

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

    const targetTime = new Date().getTime() + length;

    countdown(targetTime, timerText);

    //4 intervals

    //loop for 4 intervals
        //start first round
        //finish first round
        //start break
        //finish break
        //increment count
        //loop
    
    //once 4 
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