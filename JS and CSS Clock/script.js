let secondHand = document.querySelector('.second-hand')
let minuteHand = document.querySelector('.min-hand')
let hourHand = document.querySelector('.hour-hand')
let hourDisplay = document.querySelector('.hour h1')

function displayTime() {
    currentDate = new Date();
    hours = currentDate.getHours();
    mins = currentDate.getMinutes();
    seconds = currentDate.getSeconds();

    secondsToDegrees = ((seconds / 60) * 360) + 90;
    minutesToDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    hoursToDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;

    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

    hourDisplay.innerHTML = currentDate.toLocaleTimeString();
}
displayTime();

hourDisplay.innerHTML = currentDate.toLocaleTimeString();


setInterval(displayTime, 1000);

