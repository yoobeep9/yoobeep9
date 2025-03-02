let candlesBlownOut = 0;

function blowOutCandle(candle) {
  // Check if the candle is already blown out
  if (!candle.classList.contains('blown-out')) {
    candle.classList.add('blown-out');
    candlesBlownOut++;
    if (candlesBlownOut === 3) {
      document.getElementById("celebrationMessage").style.display = "block";
    }
  }
}

function celebrate() {
  alert("Yay! It's your special day! 🎉");
}