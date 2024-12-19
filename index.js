const quote = document.getElementById("quote");
const author = document.getElementById("author");

const fallbackQuotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" }
];

async function nextQuote() {
    try {
        const response = await fetch("https://api.quotable.dev/random");
        if (!response.ok) throw new Error("API request failed");
        const data = await response.json();
        quote.innerText = `"${data.content}"`;
        author.innerText = data.author ? `— ${data.author}` : "— Unknown";
    } catch (error) {
        // Use fallback quotes if the API fails
        console.error("Error fetching quote:", error);
        const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        quote.innerText = `"${randomFallback.text}"`;
        author.innerText = `— ${randomFallback.author}`;
    }
}

nextQuote();
