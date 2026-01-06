const quotes = [
    '"A room without books is like a body without a soul." – Cicero',
    '"Books are a uniquely portable magic." – Stephen King',
    '"A reader lives a thousand lives before he dies." – J.R.R. Martin'
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex];
}