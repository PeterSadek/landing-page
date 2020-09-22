# Landing Page Project
First of all, I added the fourth section to the index.html file and added a script element to the bottom of the HTML file to attach the external JS file.
Then I headed over to the app.js file and started writing my JS code:
I started by selecting all the section elements using the querySelectorAll method and assigned them to a variable because I'm going to loop over them.
I also selected the unordered list using the querySelector method and assigned it to a variable. 
then I created a function that will hold all the sections.
then I used a forEach method to loop over all the sections.
then I assigned the id of the sections to a variable to use it later.
then I used the dataset property to access the data attribute on the section elements.
then I used template literals that will allow the user to navigate to the specified section after clicking on it in the navigation bar.
then I added the whole thing to the unordered list and added a function call to run the createList function which contains the code.

Then I move on to the next specification.
I start off by creating a function that will get the size and the position of the element.
Inside of that function, I used the Math.floor function and pass the getBoundingClientRect() method to it which will return the size of the element and its position.
Then I added two more functions that will determine whether I want to remove the active class or add it. I passed the section element to both of them. and I used the classList property that will return the class name of the section.
Then I created a function that loops over the sections using the forEach method then I created a variable that will store the value received from the positioning function. then I'm gonna run a test on the condition of adding the active class.
Then I called the remove active class function and the add active class function and passed the condition to it.
and finally, I added a addEventListener method that will listen for a scroll on the page and implement theactivaeSection function.
## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
