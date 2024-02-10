/* W05: Programming Tasks */

/* Declare a constant variable to reference the HTML div element */
const templesElement = document.getElementById('temples');

/* Global empty array variable to store the list of temples */
let templeList = [];

/* Function to display temples */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        
        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};

/* Function to get JSON temple data using fetch */
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json(); 
        
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* Function to clear the displayed list of temples */
const reset = () => {
    templesElement.innerHTML = '';
};

/* Function to filter temples */
const filterTemples = () => {
    reset();
    
    const filter = document.getElementById('filtered').value;
    
    switch (filter) {
        case 'utah':
            displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(templeList);
            break;
        default:
            displayTemples(templeList);
    }
};

/* Event listener for filter change */
document.getElementById('filtered').addEventListener('change', filterTemples);

/* Call getTemples function at the end of your JavaScript file */
getTemples();
