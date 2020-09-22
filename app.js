/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const mainSections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createList() {
    let listContainer = '';
// using forEach method to loop over the sections    
    mainSections.forEach(section => {
        const sectionId = section.id;
        const dataNav = section.dataset.nav;
// using template literals to be able to navigate to the spicified section        
        listContainer = listContainer + `<li><a href="#${sectionId}">${dataNav}</a></li>`
    });
//  adding all the elements to the navigation bar  
    navList.innerHTML = listContainer;
};
// calling the createList function to implement the code inside it
createList();

// Add class 'active' to section when near top of viewport

//detemining the position and size of the element
function positioning(section) {
    return Math.floor(section.getBoundingClientRect().top);
};
//for adding the active class
function addActiveClass(condi, section) {
    if(condi){
        section.classList.add('your-active-class');
    };
};
//for removing the active class
function delActiveClass(section) {
    section.classList.remove('your-active-class');
};
//this is where the value recevied from the postioning function is stored
function activateSection() {
    mainSections.forEach(section => {
        const positioningElement = positioning(section);
//testing the add active class condition       
        inviewport = () => positioningElement < 170 && positioningElement >= -170;
// calling the add and remove active class functions        
        delActiveClass(section);
        addActiveClass(inviewport(),section);
    });
};
//to listen for scrolling the page and implementing the activateSection function
window.addEventListener('scroll' ,activateSection);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


