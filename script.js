// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Store the number of attempts
let attempt = 0;

// Get the HTML elements
let attemptDisplay = document.querySelector("#attempts");
let guess = document.querySelector("#guessInput");
let reset = document.getElementById("resetButton");
let message = document.getElementById("message");
let button = document.getElementById("guessButton");

// Check the user's guess
function work() {

    let guessNumber = Number(guess.value);

    if (guessNumber === secretNumber) {
        message.innerHTML = "You Won";

    } else if (guessNumber > secretNumber) {
        message.innerHTML = "You are too high";

    } else if (guessNumber < secretNumber) {
        message.innerHTML = "You are too low";

    } else {
        message.innerHTML = "Invalid guess";
    }

    // Increase and display the attempt count
    attempt++;
    attemptDisplay.innerHTML = attempt;
}

// Reset the game
function restart() {

    attempt = 0;

    // Generate a new secret number
    secretNumber = Math.floor(Math.random() * 10) + 1;

    guess.value = "";

    message.innerHTML = "Make your guess";

    attemptDisplay.innerHTML = attempt;
}

// Handle button clicks
button.addEventListener("click", work);

reset.addEventListener("click", restart);