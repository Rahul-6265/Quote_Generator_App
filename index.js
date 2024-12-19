const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextButton = document.getElementById("nextButton");

async function nextQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quote.innerText = `"${data.content}"`;
        author.innerText = `— ${data.author}`;
    } catch (error) {
        quote.innerText = "An error occurred while fetching a new quote.";
        author.innerText = "";
        console.error("Error fetching quote:", error);
    }
}

nextQuote();
