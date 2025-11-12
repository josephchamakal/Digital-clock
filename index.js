"use strict";

function updateTime() {
  // Get current time
  let now = new Date();
  let currentHour = now.getHours();
  let currentMin = now.getMinutes();
  let currentSec = now.getSeconds();

  //   Pad with leading zeros
  currentHour = currentHour.toString().padStart(2, "0");
  currentMin = currentMin.toString().padStart(2, "0");
  currentSec = currentSec.toString().padStart(2, "0");
  //   Update the HTML elements
  document.querySelector(".hour").textContent = currentHour;
  document.querySelector(".min").textContent = currentMin;
  document.querySelector(".sec").textContent = currentSec;
}
// Update time every second
setInterval(updateTime, 1000);
updateTime();
