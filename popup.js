document.getElementById("getProblemBtn").addEventListener("click", () => {
    const minTier = document.getElementById("minTier").value;
    const maxTier = document.getElementById("maxTier").value;

    // Send request to background.js to fetch a problem
    chrome.runtime.sendMessage(
        { action: "getRandomProblem", minTier, maxTier},
        (res) => {
            if (res?.data?.url) {
                chrome.tabs.update({ url: res?.data?.url }); // Redirect to problem page
            } else {
                document.getElementById("error-message").textContent = "No problem found.";
            }
        }
    );
});
