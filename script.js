// Get all buttons and message divs
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageDiv = document.getElementById("message");
const catImage = document.getElementById("catImage");
const congratsMessage = document.getElementById("congratsMessage");
const confettiContainer = document.getElementById("confettiContainer");

// Expanded message parts
const emotions = [
    "Please", "Really", "I beg you", "I'm serious", "You can't do this to me",
    "I can't take it", "Come on", "Don't break my heart", "I love you so much",
    "I'm waiting patiently", "You're everything to me", "Don't say no",
    "My heart can't take it", "I can't live without you", "Just say yes"
];
const requests = [
    "Will you be my Valentine?", "Are you ready to say yes?",
    "Will you end my wait?", "Will you say yes soon?", "Do you know this is a chance of a lifetime?",
    "Do I just need one answer from you?", "Isn't this the perfect moment to say yes?",
    "Are you ready to be mine?", "Will you make my dreams come true and say yes?",
    "Will you make me the happiest person today?", "Can you say yes and make this moment unforgettable?"
];
const reasons = [
    "You're the one I want.", "I can't imagine life without you.", "You're the only one for me.",
    "My heart is all yours.", "This is fate.", "We've been waiting for this moment.",
    "You complete me.", "You're the love of my life.", "I've been waiting forever for this.",
    "You're the missing piece.", "This is meant to be.", "You're the one I choose.",
    "No one else will do.", "You're everything I've been dreaming of."
];

const sadCatGifs = [
    "./images/sad1.gif",
    "./images/sad2.gif",
    "./images/sad3.gif",
    "./images/sad4.gif",
    "./images/sad5.gif",
    "./images/sad6.gif",
    "./images/sad7.gif",
    "./images/sad8.gif",
    "./images/sad9.gif",
    "./images/sad10.gif",
    "./images/sad11.gif",
    "./images/sad12.gif",
    "./images/sad13.gif"
];

const happyCatGifs = [
    "./images/hap1.gif",
    "./images/hap2.gif",
    "./images/hap3.gif",
    "./images/hap4.gif"
];

// Optimized function to generate a challenge message
function generateChallengeMessage() {
    const emotionIndex = Math.floor(Math.random() * emotions.length);
    const requestIndex = Math.floor(Math.random() * requests.length);
    const reasonIndex = Math.floor(Math.random() * reasons.length);

    return `${emotions[emotionIndex]}, ${reasons[reasonIndex]}. ${requests[requestIndex]} `;
}

// Function to create confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + '%'; // Random horizontal position
    const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.classList.add(randomColor);
    confettiContainer.appendChild(confetti);
    setTimeout(() => {
        confetti.remove(); // Remove after falling
    }, 3000);
}

// Event listener for "Yes" button
yesBtn.addEventListener("click", () => {
    messageDiv.style.display = "none"; // Hide the main question
    // congratsMessage.classList.remove('hidden');
    congratsMessage.style.display = 'block';
    confettiContainer.style.display = 'block';

    showCatGif(happyCatGifs);
    // Start generating confetti indefinitely after the user clicks "Yes"
    setInterval(createConfetti, 70); // Create a new piece of confetti every 100ms
});


// Event listener for "No" button
noBtn.addEventListener("click", () => {
    const newChallengeMessage = generateChallengeMessage();
    const messageHeader = messageDiv.querySelector("h1");
    messageHeader.textContent = newChallengeMessage;
    showCatGif(sadCatGifs);
    adjustButtonSize(yesBtn, noBtn);
});

// Adjust button sizes on click
function adjustButtonSize(yesBtn, noBtn) {
    // Get current scale of the buttons
    const yesBtnScale = parseFloat(getComputedStyle(yesBtn).transform.split(',')[3]) || 1;
    const noBtnScale = parseFloat(getComputedStyle(noBtn).transform.split(',')[3]) || 1;

    // Calculate 1% increase for Yes and 5% decrease for No
    const newYesBtnScale = yesBtnScale * 1.01; // Increase by 5%
    const newNoBtnScale = noBtnScale * 0.95; // Decrease by 5%

    // Apply new scale values
    yesBtn.style.transform = `scale(${newYesBtnScale})`;
    noBtn.style.transform = `scale(${newNoBtnScale})`;
}

function showCatGif(gifArray) {
    // Get a random GIF URL and message
    const randomGif = gifArray[Math.floor(Math.random() * gifArray.length)];
    // Set the GIF source and message text
    catImage.src = randomGif;
    // Display the image container
    // imageContainer.style.display = "block";
}
