const quoteElement = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');

const endpoint = 'https://api.quotable.io/random';

function getQuote() {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
            const author = data.author;
            const fullQuote = `${quote} - ${author}`;
            quoteElement.textContent = fullQuote;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        });
}

newQuoteBtn.addEventListener('click', getQuote);

// Initial call to get a quote when the page loads
getQuote();
