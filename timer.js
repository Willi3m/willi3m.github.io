let totalseconds = 0;
let myInterval = null;
let initialTime = 0;
let isChanged = false;
let isEmpty = false;
const hourBox = document.getElementById("hour");
const minuteBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

document.getElementById("start").addEventListener("click", () => {
  if (totalseconds === 0) {
      timeSet();
  }
  Timer();
});

hourBox.addEventListener("change", function(event){
  isChanged = true;
  const value = hourBox.value;
  if(value.trim() == ''){
    //do nothing
  }else{
    inputCheck();
  }
})

minuteBox.addEventListener("change", function(event){
   isChanged = true;
   const value = minuteBox.value;
  if(value.trim() == ''){
    //do nothing
  }else{
    inputCheck();
  }
})

secondsBox.addEventListener("change", function(event){
   isChanged = true;
   const value = secondsBox.value;
   if(value.trim() == ''){
    //do nothing
   }else{
    inputCheck();
   }
})

function inputCheck(){
  if(isChanged === true){
    timeSet();
  }
}

function timeSet(){
  const hours = Number(document.getElementById("hour").value);
  const minutes = Number(document.getElementById("minutes").value);
  const seconds = Number(document.getElementById("seconds").value);
  totalseconds = hours * 3600 + minutes * 60 + seconds;
  initialTime = totalseconds;
}

function pauseTimer(){
  clearInterval(myInterval);
  myInterval = null; 
}

function Timer() {
  if (!myInterval) {
    myInterval = setInterval(() => {
      if (totalseconds <= 0) {
        clearInterval(myInterval);
        myInterval = null;
        document.getElementById("count").innerText = "Completed";
        return;
      }

      const hours = Math.floor(totalseconds / 3600);
      const minutes = Math.floor((totalseconds % 3600) / 60);
      const seconds = totalseconds % 60;

      document.getElementById("count").innerText =
        hours + "h " + minutes + "m " + seconds + "s";

      totalseconds--;
    }, 1000);
  }
}

document.getElementById("stop").addEventListener("click", () => {
  pauseTimer();
});

document.getElementById("reset").addEventListener("click", () => {
  totalseconds = initialTime;
  Timer();
})
