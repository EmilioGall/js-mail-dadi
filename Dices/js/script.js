// Define Play&Cancel Button constant

const playBtn = document.getElementById("play-btn"); // object | null

console.log(playBtn, typeof playBtn);

const cancelBtn = document.getElementById("cancel-btn"); // object | null

console.log(cancelBtn, typeof cancelBtn);

// Define User&CPU Dices variables

const userDice = document.getElementById("user-dice"); // object | null

console.log(userDice);

const cpuDice = document.getElementById("cpu-dice"); // object | null

console.log(cpuDice);

// Define Message variable

const messageOutput = document.getElementById("message"); // object | null

console.log(messageOutput);

// Add Event listener to Play Button

playBtn.addEventListener("click", function() {

    // Define user dice value variable

    let userDiceNum = Math.floor(Math.random() * 6) + 1;

    console.log(userDiceNum, typeof userDiceNum);

    userDice.innerHTML = userDiceNum;

    // Define cpu dice value variable

    let cpuDiceNum = Math.floor(Math.random() * 6) + 1;

    console.log(cpuDiceNum, typeof cpuDiceNum);

    cpuDice.innerHTML = cpuDiceNum;

    // Clean Message

    messageOutput.classList.remove("border-success");

    messageOutput.classList.remove("text-success");

    messageOutput.classList.remove("border-danger");

    messageOutput.classList.remove("text-danger");

    messageOutput.classList.remove("border-black");

    messageOutput.classList.remove("text-black");

    if(userDiceNum > cpuDiceNum) {

        console.log("You Win!");

        messageOutput.innerHTML = "You Win!";

        messageOutput.classList.add("border-success");

        messageOutput.classList.add("text-success");

    } else if (userDiceNum < cpuDiceNum) {

        console.log("You Lose...");

        messageOutput.innerHTML = "You Lose...";

        messageOutput.classList.add("border-danger");

        messageOutput.classList.add("text-danger");

    } else if (userDiceNum === cpuDiceNum) {

        console.log("It's a Tie.");

        messageOutput.innerHTML = "It's a Tie.";

        messageOutput.classList.add("border-black");

        messageOutput.classList.add("text-black");

    }

    messageOutput.classList.remove("hidden");

});

// Add Event listener to Cancel Button

cancelBtn.addEventListener("click", function() {

    // Clean Dices

    userDice.innerHTML = "/";

    cpuDice.innerHTML = "/";

    // Hide Message

    messageOutput.classList.add("hidden");

});