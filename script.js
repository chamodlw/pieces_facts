const factText = document.getElementById('fact-text');
const factButton = document.getElementById('fact-button');

// Function to fetch and display a new friends fact
async function getFriendsFact() {
    try {
        factButton.disabled = true;
        factText.textContent = 'Loading...';
        
        const facts = [
            "Joey doesn't share food!",
            "We were on a break!",
            "Pivot! Pivot! Pivot!",
            "How you doin'?",
            "Smelly Cat, Smelly Cat, what are they feeding you?",
            "Could I BE wearing any more clothes?",
            "It's a moo point. It's like a cow's opinion; it doesn't matter.",
            "Seven! Seven! Seven!",
            "I'm not great at the advice. Can I interest you in a sarcastic comment?",
            "Welcome to the real world. It sucks. You’re gonna love it."
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