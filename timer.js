let timerInterval;
let startTime;

function startTimer() {
    // Reset the timer when a new problem page is loaded
    if (localStorage.getItem("bojTimerStart") === null || isNewProblem()) {
        localStorage.setItem("bojTimerStart", Date.now());
    }

    startTime = parseInt(localStorage.getItem("bojTimerStart"));
    clearInterval(timerInterval); // Clear any existing intervals
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    let timerElement = document.getElementById("bojTimer");
    if (!timerElement) {
        timerElement = document.createElement("div");
        timerElement.id = "bojTimer";
        timerElement.style.position = "fixed";
        timerElement.style.top = "10px";
        timerElement.style.right = "10px";
        timerElement.style.background = "black";
        timerElement.style.color = "white";
        timerElement.style.padding = "10px";
        timerElement.style.borderRadius = "5px";
        timerElement.style.fontSize = "16px";
        document.body.appendChild(timerElement);
    }

    timerElement.textContent = `⏳ Time: ${hours}h ${minutes}m ${seconds}s`;
}

// Function to determine if the current page is a new problem
function isNewProblem() {
    const currentUrl = window.location.href;
    const storedUrl = localStorage.getItem("bojProblemUrl");

    // If the current URL is different from the stored URL, it's a new problem
    if (currentUrl !== storedUrl) {
        localStorage.setItem("bojProblemUrl", currentUrl);
        return true;
    }
    return false;
}

// Start timer when script is injected
startTimer();
