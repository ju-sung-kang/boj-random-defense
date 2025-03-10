chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getRandomProblem") {
        getRandomProblem(message.minTier, message.maxTier)
            .then((data)=>sendResponse({success: true, data}))
            .catch((error)=>{
                console.log(error)
                sendResponse({success: false, error})
            })
    }
    return true
});

// Fetch a random problem from solved.ac API
async function getRandomProblem(minTier, maxTier) {
    const query = `tier:${minTier}..${maxTier}`;
    const url = `https://solved.ac/api/v3/search/problem?direction=asc&query=${query}&sort=random`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch problem");

    const data = await response.json();
    if (data.count > 0) {
        const problemId = data.items[0].problemId;
        return { url: `https://www.acmicpc.net/problem/${problemId}` };
    } else {
        return true;
    }
}
