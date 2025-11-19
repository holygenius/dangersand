// Simple Visitor Counter
function updateCounter() {
    let count = localStorage.getItem('visitorCount');
    if (!count) {
        count = 34821; // Start with a fake high number
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitorCount', count);
    document.getElementById('counter').innerText = count.toString().padStart(6, '0');
}

// Last Updated Date
function updateDate() {
    const date = new Date();
    const dateString = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    document.getElementById('last-updated').innerText = dateString;
}

// Initialize
window.onload = function() {
    updateCounter();
    updateDate();
    
    // Add a random alert for that authentic 90s feel (optional, maybe too annoying?)
    // alert("Welcome to Danger Sandwich! Prepare your stomach!");
};
