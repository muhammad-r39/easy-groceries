function startCountdown(targetDate, addTo) {
  function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.querySelector(addTo).innerHTML = "00:00:00:00";
      clearInterval(countdownInterval);
      return;
    }

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(addTo).innerHTML = `
      <div>
        <span class="unit">Days</span>
        <span class="time">${days.toString().padStart(2, "0")}</span>
      </div> : 
      <div>
        <span class="unit">Hours</span>
        <span class="time">${hours.toString().padStart(2, "0")}</span>
      </div> : 
      <div>
        <span class="unit">Minutes</span>
        <span class="time">${minutes.toString().padStart(2, "0")}</span>
      </div> : 
      <div>
        <span class="unit">Seconds</span>
        <span class="time">${seconds.toString().padStart(2, "0")}</span>
      </div>`;
  }

  updateCountdown(); // Initial call
  let countdownInterval = setInterval(updateCountdown, 1000);
}
