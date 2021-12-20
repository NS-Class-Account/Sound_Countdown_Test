var startingSeconds = 11;
var time = startingSeconds - 1;
var iscountdownactive = false;
var countdownEl = document.getElementById('countdown');
setInterval(updatecountdown, 1000); 

function updatecountdown() {
    if(!iscountdownactive) return;
    countdownEl.textContent= time;
    if (time < 5 && time > -1) {
        countdownEl.textContent=time + "s until launch!";
    } 
    else if(time < 0){
        countdownEl.textContent= "Blast Off!";
    }
    time= time-1;
}
function startcountdown() {
    iscountdownactive= true;
    time = startingSeconds - 1;
    }
function stopcountdown() {
    iscountdownactive= false;
    }
        
