let totalseconds = 0;
let myInterval = null;

const hourBox = document.getElementById("hour");
const minuteBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

document.getElementById("start").addEventListener("click", () => {
  if (totalseconds === 0) {
      timeSet();
  }
  Timer();
});

hourBox.addEventListener("change", timeSet)

minuteBox.addEventListener("change",timeSet)

secondsBox.addEventListener("chnage",timeSet)

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
        document.getElementById("count").innerText = "00: 00: 00";
        return;
      }

      const hours = Math.floor(totalseconds / 3600);
      const minutes = Math.floor((totalseconds % 3600) / 60);
      const seconds = totalseconds % 60;

      document.getElementById("count").innerText =
      String(hours).padStart(2, '0') + ": " + String(minutes).padStart(2, '0') + ": "
      + String(seconds).padStart(2, '0');

      totalseconds--;
    }, 1000);
  }
}

document.getElementById("stop").addEventListener("click", () => {
  pauseTimer();
});

document.getElementById("reset").addEventListener("click", () => {
  totalseconds = 0;
  Timer();
})

