const quotes = [
    '"A room without books is like a body without a soul." – Cicero',
    '"I have always imagined that Paradise will be a kind of library." – Jorge Luis Borges',
    '"Books are a uniquely portable magic." – Stephen King',
    '"Read the best books first, or you may not have a chance to read them at all." – Henry David Thoreau'
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex];
}

// Add a simple fade-in effect when page loads
window.onload = () => {
    document.body.style.opacity = "1";
};