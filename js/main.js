'use strict'
{

  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
 
  let startTime;
  let currentTime;
  let timeoutId;
  let stopedTime = 0;

  function countUp() {
    currentTime = Date.now();
    const d = new Date(currentTime - startTime + stopedTime);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');
    timer.textContent = `${m}:${s}.${ms}`;
    timeoutId = setTimeout(countUp,10);
  }

  start.addEventListener('click',() => {
    if (start.classList.contains('inactive')) {
      return;
    }
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click',() => {
    if (stop.classList.contains('inactive')) {
      return;
    }
    stopedTime += Date.now() - startTime;
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
    clearTimeout(timeoutId);
  })

  reset.addEventListener('click',() => {
    if (reset.classList.contains('inactive')) {
      return;
    }
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
    timer.textContent = '00:00.000';
  })
  
}


