let totalSeconds = 10; 
let totalMinutes = 0;
let totalHours = 1;
const myInterval = setInterval(() => {
  if (totalSeconds < 0) {
      totalSeconds = 59;
      totalMinutes--;
  }
  if(totalMinutes < 0){
    totalMinutes = 59;
    totalHours--;
  }
  if(totalHours < 0){
    clearInterval(myInterval);
    document.getElementById("count").innerText = "done";
    return;
  }
  document.getElementById("count").innerText = totalHours + "h" 
  + totalMinutes + "m" + totalSeconds + "s"; 
  totalSeconds--; 
}, 1000);
