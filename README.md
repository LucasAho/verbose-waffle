# Port2.0
The updated and much improved version of my portfolio

## Description
This website was made as an update to my previous portfolio, which was made with much less coding experience. The portfolio is built more on my own creativity than a homework assignment, and displays mobile responsive, concise coding. While continued improvements will be made to this portfolio, it will be the base for my future career in web development. The site contains a header with nav links to LinkedIn, Twitter, Github, and a contact page.
It also holds a small about me section and profile image, followed by three columns of links to past projects.
The contact page stores user inputted info in my own firebase database until I'm able to set up a better system.

## Plan for Improvement
* Highscore section that tracks scores on all portfolio games
* Make nav more intuitive
* Fix contact section to actually send emails, rather than storing them. 

## File Infrastructure

### HTML
* Index.html: Contains main site content and most of the formatting with bootstrap. Holds links to all neccessary languages and other sites. 
* Contact.html: Layout for user contact form. Info is stored in firebase and features home button back to main page.

### CSS
* style.css: While most of the site formatting is down via bootstrap, fonts and a few specific display elements are set within css

### JS
* app.js: App.js currently only runs firebase connection and email input verification from contact field, but expansion is planned with highscore tracking.
