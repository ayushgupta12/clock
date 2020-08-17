const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide()

////////////////////////////////////////////////////////////

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (h > 12) { h = parseInt(h) - 12};
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

////////////////////////////////////////////////////////////

let timerOn = true;

let audio = new Audio('alarm.mp3');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let blinkOn = null;

function play() {
  audio.play();
}

///////////////////////////////////////////////////////////

function blink(){
    let timer = document.querySelector('#timer');
    if (timer.style.visibility === 'hidden'){
        timer.style.visibility = 'visible';
    }
    else{
        timer.style.visibility = 'hidden';
    }
    play();
}

function addDigit(value){
    var timer = document.querySelector("#timer").innerHTML;
    value = value.toString();
    timer = timer.replaceAt(0, timer[1]);
    timer = timer.replaceAt(1, timer[3]);
    timer = timer.replaceAt(3, timer[4]);
    timer = timer.replaceAt(4, timer[6]);
    timer = timer.replaceAt(6, timer[7]);
    timer = timer.replaceAt(7, value);
    document.querySelector('#timer').innerHTML = timer;
    timerOn = true;
}

async function startTimer(){
    var timer = document.querySelector("#timer").innerHTML;
    if (timerOn == true){
        if (timer == "00:00:00"){
            resetTimer();
            blink();
            blinkOn = window.setInterval(blink, 200)
            return
        }
        if (timer[7] == 0 && timer[6] == 0 && timer[4] == 0 && timer[3] == 0 && timer[1] == 0){
            var value = parseInt(timer[0]) - 1;
            timer = timer.replaceAt(0, value.toString());
            timer = timer.replaceAt(1, "9");
            timer = timer.replaceAt(3, "5");
            timer = timer.replaceAt(4, "9");
            timer = timer.replaceAt(6, "5");
            timer = timer.replaceAt(7, "9");
            document.querySelector('#timer').innerHTML = timer;
            await sleep(980);
        }
        else if (timer[7] == 0 && timer[6] == 0 && timer[4] == 0 && timer[3] == 0){
            var value = parseInt(timer[1]) - 1;
            timer = timer.replaceAt(1, value.toString());
            timer = timer.replaceAt(3, "5");
            timer = timer.replaceAt(4, "9");
            timer = timer.replaceAt(6, "5");
            timer = timer.replaceAt(7, "9");
            document.querySelector('#timer').innerHTML = timer;
            await sleep(980);
        }
        else if (timer[7] == 0 && timer[6] == 0 && timer[4] == 0){
            var value = parseInt(timer[3]) - 1;
            timer = timer.replaceAt(3, value.toString());
            timer = timer.replaceAt(4, "9");
            timer = timer.replaceAt(6, "5");
            timer = timer.replaceAt(7, "9");
            document.querySelector('#timer').innerHTML = timer;
            await sleep(980);
        }
        else if (timer[7] == 0 && timer[6] == 0){
            var value = parseInt(timer[4]) - 1;
            timer = timer.replaceAt(4, value.toString());
            timer = timer.replaceAt(6, "5");
            timer = timer.replaceAt(7, "9");
            document.querySelector('#timer').innerHTML = timer;
            await sleep(980);
        }

        else if (timer[7] == 0){
            var value = parseInt(timer[6]) - 1;
            timer = timer.replaceAt(6, value.toString());
            timer = timer.replaceAt(7, "9");
            document.querySelector('#timer').innerHTML = timer;
            await sleep(980);
        }
        var value = parseInt(timer[7]) - 1;
        timer = timer.replaceAt(7, value.toString());
        document.querySelector('#timer').innerHTML = timer;
        setTimeout(startTimer, 980);
    }
    else{
        timerOn = true;
    }
}

function resetTimer(){
    var timer = "00:00:00";
    document.querySelector('#timer').innerHTML = timer;
    timerOn = false;
    clearInterval(blinkOn);
    var timer = document.querySelector('#timer');
    timer.style.visibility = 'visible';
    audio.pause();
}

function stopTimer(){
    timerOn = false;
    clearInterval(blinkOn);
    var timer = document.querySelector('#timer');
    timer.style.visibility = 'visible';
    audio.pause();
}

////////////////////////////////////////////////////////////////////

let stopwatchOn = true;

async function startStopwatch(){
    var stopwatch = document.querySelector("#stopwatch").innerHTML
    if (stopwatchOn == true){

        if (stopwatch[10] == 9 && stopwatch[9] == 5 && stopwatch[7] == 9 && stopwatch[6] == 5 && stopwatch[4] == 9 && stopwatch[3] == 9 && stopwatch[1] == 9){
            var value = parseInt(stopwatch[0]) + 1;
            stopwatch = stopwatch.replaceAt(0, value.toString());
            stopwatch = stopwatch.replaceAt(1, "0");
            stopwatch = stopwatch.replaceAt(3, "0");
            stopwatch = stopwatch.replaceAt(4, "0");
            stopwatch = stopwatch.replaceAt(6, "0");
            stopwatch = stopwatch.replaceAt(7, "0");
            stopwatch = stopwatch.replaceAt(9, "0");
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }

        else if (stopwatch[10] == 9 && stopwatch[9] == 5 && stopwatch[7] == 9 && stopwatch[6] == 5 && stopwatch[4] == 9 && stopwatch[3] == 9){
            var value = parseInt(stopwatch[1]) + 1;
            stopwatch = stopwatch.replaceAt(1, value.toString());
            stopwatch = stopwatch.replaceAt(3, "0");
            stopwatch = stopwatch.replaceAt(4, "0");
            stopwatch = stopwatch.replaceAt(6, "0");
            stopwatch = stopwatch.replaceAt(7, "0");
            stopwatch = stopwatch.replaceAt(9, "0");
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }

        else if (stopwatch[10] == 9 && stopwatch[9] == 5 && stopwatch[7] == 9 && stopwatch[6] == 5 && stopwatch[4] == 9){
            var value = parseInt(stopwatch[3]) + 1;
            stopwatch = stopwatch.replaceAt(3, value.toString());
            stopwatch = stopwatch.replaceAt(4, "0");
            stopwatch = stopwatch.replaceAt(6, "0");
            stopwatch = stopwatch.replaceAt(7, "0");
            stopwatch = stopwatch.replaceAt(9, "0");
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }
        else if (stopwatch[10] == 9 && stopwatch[9] == 5 && stopwatch[7] == 9 && stopwatch[6] == 5){
            var value = parseInt(stopwatch[4]) + 1;
            stopwatch = stopwatch.replaceAt(4, value.toString());
            stopwatch = stopwatch.replaceAt(6, "0");
            stopwatch = stopwatch.replaceAt(7, "0");
            stopwatch = stopwatch.replaceAt(9, "0");
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }
        else if (stopwatch[10] == 9 && stopwatch[9] == 5 && stopwatch[7] == 9){
            var value = parseInt(stopwatch[6]) + 1;
            stopwatch = stopwatch.replaceAt(6, value.toString());
            stopwatch = stopwatch.replaceAt(7, "0");
            stopwatch = stopwatch.replaceAt(9, "0");
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }
        else if (stopwatch[10] == 9 && stopwatch[9] == 5){
            var value = parseInt(stopwatch[7]) + 1;
            stopwatch = stopwatch.replaceAt(7, value.toString());
            stopwatch = stopwatch.replaceAt(9, "0");
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }

        else if (stopwatch[10] == 9){
            var value = parseInt(stopwatch[9]) + 1;
            stopwatch = stopwatch.replaceAt(9, value.toString());
            stopwatch = stopwatch.replaceAt(10, "0");
            document.querySelector('#stopwatch').innerHTML = stopwatch;
            await sleep(10);
        }

        var value = parseInt(stopwatch[10]) + 1;
        stopwatch = stopwatch.replaceAt(10, value.toString());
        document.querySelector('#stopwatch').innerHTML = stopwatch;
        setTimeout(startStopwatch, 10);
    }
    else{
        stopwatchOn = true;
    }
}

function resetStopwatch(){
    var stopwatch = "00:00:00:00";
    document.querySelector('#stopwatch').innerHTML = stopwatch;
    stopwatchOn = false;
    var stopwatch = document.querySelector('#stopwatch');
}

function stopStopwatch(){
    stopwatchOn = false;
    var stopwatch = document.querySelector('#stopwatch');
}
