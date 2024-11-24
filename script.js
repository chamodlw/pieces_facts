const factText = document.getElementById('fact-text');
const factButton = document.getElementById('fact-button');

// Function to fetch and display a new friends fact
async function getFriendsFact() {
    try {
        factButton.disabled = true;
        factText.textContent = 'Loading...';
        
        const facts = [
            "Friends is a popular TV show that aired from 1994 to 2004.",
            "The show revolves around six friends living in New York City.",
            "The main characters are Ross, Rachel, Monica, Chandler, Joey, and Phoebe.",
            "Friends was created by David Crane and Marta Kauffman.",
            "The show has a total of 10 seasons and 236 episodes.",
            "Friends is known for its humor and memorable catchphrases.",
            "The show has a large and dedicated fan base.",
            "Friends has won numerous awards, including an Emmy for Outstanding Comedy Series.",
            "The show's theme song is 'I'll Be There for You' by The Rembrandts.",
            "Friends continues to be popular through reruns and streaming services."
        ];
        const randomIndex = Math.floor(Math.random() * facts.length);
        const data = { fact: facts[randomIndex] };
        factText.textContent = data.fact;
    } catch (error) {
        factText.textContent = 'Oops! Failed to fetch a friends fact. Please try again.';
    } finally {
        factButton.disabled = false;
    }
}

// Add click event listener to the button
factButton.addEventListener('click', getFriendsFact);

// Get initial fact when page loads
getFriendsFact();