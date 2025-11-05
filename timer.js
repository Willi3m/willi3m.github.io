document.getElementById("start").addEventListener("click", () => {

hours = document.getElementById("hour").value;
seconds = document.getElementById("seconds").value;
minutes = document.getElementById("minutes").value;

})

const myInterval = setInterval(() => {
  if (seconds < 0) {
      seconds = 59;
      minutes--;
  }
  if(minutes < 0){
    minutes = 59;
    hours--;
  }
  if(hours < 0){
    clearInterval(myInterval);
    document.getElementById("count").innerText = "done";
    return;
  }
  document.getElementById("count").innerText = hours + "h" 
  + minutes + "m" + seconds + "s"; 
  seconds--; 
}, 1000);
