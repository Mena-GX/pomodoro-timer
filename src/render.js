const stBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const tomato = document.getElementById('tomato');
const settingsBtn = document.getElementById('settings');
const closeBtn = document.getElementById('close');
const settingsNav = document.getElementById('settingsBar');
const saveBtn = document.getElementById('saveBtn');
const roundInput = document.getElementById('interval');
const lengthInput = document.getElementById('runTime');
const breakInput = document.getElementById('breakTime');
const breakNav = document.getElementById('timesUp');
const startBrk = document.getElementById('startBreak');

let timeFinish = 0;
let check = 0;
let intervalID;
let breakOrNot = false;

let counter = 4; //standard amount of intervals

let length = 1500000; //standard amount of time - 25 minutes

let breakLngth = 300000; //standard amount of time for breaks - 5 minutes

let currentRound = 0;

stBtn.onclick = clickStart;

stopBtn.onclick = clickStop;

settingsBtn.onclick = openSettings;
closeBtn.onclick = closeSettings;

saveBtn.onclick = saveSettings;

startBrk.onclick = startBreak;

function startBreak(){
    breakOrNot = true;

    //hides the break screen
    breakNav.style.width = '0px';
    breakNav.style.height = '0px';
    breakNav.style.visibility = 'hidden';

    const timerText = document.getElementById('timer');

    const targetTime = new Date().getTime() + breakLngth;

    //starts the break
    countdown(targetTime, timerText);
}

//this saves the settings and changes the standards
function saveSettings(){
    //store the new values
    var x = roundInput.value;
    var y = lengthInput.value;
    var z = breakInput.value;

    //change the standards to the new values
    //lengths are in terms of milliseconds
    counter = x;
    length = y * 60000;
    breakLngth = z * 60000;
}

//does not save settings when closed
function closeSettings(){
    settingsNav.style.width = '0px';
    settingsNav.style.height = '0px';
    settingsNav.style.visibility = 'hidden';

    roundInput.value = counter;
    lengthInput.value = length / 60000;
    breakInput.value = breakLngth / 60000;
}

function openSettings(){
    settingsNav.style.width = '240px';
    settingsNav.style.height = '270px';
    settingsNav.style.visibility = 'visible';
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

    //if there are still rounds left
    //do another round
    if(currentRound < counter){
        if(breakNav.style.visibility = 'visible'){
            breakNav.style.width = '0px';
            breakNav.style.height = '0px';
            breakNav.style.visibility = 'hidden';
            startBrk.onclick = startBreak;
        }

        const timerText = document.getElementById('timer');

        const targetTime = new Date().getTime() + length;

        countdown(targetTime, timerText);

    //else go back to starting screen
    }

    return;
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

            //finish a round that is a break
            if(breakOrNot === true){
                if(currentRound == counter - 1){
                    clearInterval(intervalID);
                    startBrk.style.height = '0px';
                    startBrk.style.width = '0px';
                    startBrk.style.visibility = 'hidden';
                    breakNav.style.width = '235px';
                    breakNav.style.height = '200px';
                    breakNav.style.visibility = 'visible';
                    document.getElementById('textBreak').innerHTML = "All Done!" 

                    setTimeout(function() {
                        // Code to be executed after the delay

                        breakNav.style.width = '235px';
                        breakNav.style.height = '200px';
                        breakNav.style.visibility = 'hidden';
                        startBrk.onclick = startBreak;

                        tomato.src = "/Users/menagdd/Desktop/pomodorotimer/thetomato.png";
                        display.textContent = ``;
                        
                        stopBtn.style.height = '0px';
                        stopBtn.style.width = '0px';
                        stopBtn.style.visibility = 'hidden';

                        stBtn.style.height = '40px';
                        stBtn.style.width = '120px';
                        stBtn.style.visibility = 'visible';
                      }, 2000); // 2000 milliseconds = 2 seconds

                      currentRound = 0;
                }else{
                    clearInterval(intervalID);
            
                    //displays the break's over screen
                    breakNav.style.width = '235px';
                    breakNav.style.height = '200px';
                    breakNav.style.visibility = 'visible';
                    document.getElementById('textBreak').innerHTML = "Break's Over!" 

                    breakOrNot = false;

                    currentRound++;
                    
                    startBrk.onclick = clickStart;

                    return;
                }

            //finish a round that is not a break
            } else{
                clearInterval(intervalID);

                breakNav.style.width = '235px';
                breakNav.style.height = '200px';
                breakNav.style.visibility = 'visible';
                document.getElementById('textBreak').innerHTML = "Break Time!" 

                return;
            }
            
        }

        const mins = Math.floor((timeFinish % (1000 * 60 * 60 )) / (1000 * 60));
        const secs = Math.floor((timeFinish % (1000 * 60)) / 1000);

        display.textContent = `${mins}:${secs}`;
    }, 1000);
}