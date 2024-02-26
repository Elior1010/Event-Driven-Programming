// Declare a variable to store the interval ID for the movement of the meme image
let moveInterval = null;
// Get a reference to the meme image element for manipulation
const memeImage = document.getElementById('memeImage');

// Function to randomly position the meme image on the screen
function moveMeme() {
    // Generate a random Y position within the viewport's height
    memeImage.style.top = Math.random() * window.innerHeight + 'px';
    // Generate a random X position within the viewport's width
    memeImage.style.left = Math.random() * window.innerWidth + 'px';
}

// Function to initiate the meme's movement
function startMoving() {
    // Disable the 'Start' button to prevent multiple clicks
    document.getElementById('startBtn').disabled = true;
    // Enable the 'Stop' button allowing the user to halt the movement
    document.getElementById('stopBtn').disabled = false;
    // Start moving the meme at a regular interval (e.g., every 500 milliseconds)
    moveInterval = setInterval(moveMeme, 500);
}

// Function to stop the meme's movement
function stopMoving() {
    // Re-enable the 'Start' button to allow movement to be restarted
    document.getElementById('startBtn').disabled = false;
    // Disable the 'Stop' button since it's not needed when the meme is not moving
    document.getElementById('stopBtn').disabled = true;
    // Clear the interval to stop the meme's movement
    clearInterval(moveInterval);
}

// Attach event listeners to the 'Start' and 'Stop' buttons
document.getElementById('startBtn').onclick = startMoving;
document.getElementById('stopBtn').onclick = stopMoving;
