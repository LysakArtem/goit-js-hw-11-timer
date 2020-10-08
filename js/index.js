
const targetDate = new Date('May 22, 2021').getTime()
const daysSpanRef = document.querySelector('[data-value="days"]');
const hoursSpanRef = document.querySelector('[data-value="hours"]');
const minsSpanRef = document.querySelector('[data-value="mins"]');
const secsSpanRef = document.querySelector('[data-value="secs"]');


setInterval(() => {
    const currerntDate = Date.now();
    const deltaTime = targetDate-currerntDate;
    updateClockFace(deltaTime);
}, 1000);

const  updateClockFace = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    daysSpanRef.textContent = days;
    hoursSpanRef.textContent = hours;
    minsSpanRef.textContent = mins;
    secsSpanRef.textContent = secs;
}

const pad = (value) => {
    return String(value).padStart(2, '0')
}