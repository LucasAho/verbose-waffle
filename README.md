# Port2.1
This portfolio takes the layout of the original 2.0 and deploys it to a heroku server, allowing express routing and the use of nodemailer for my contact form. Checkout the deployed portfolio here: https://ancient-sands-70959.herokuapp.com/

## Description
While I was happy with the layout of Port2.0 (https://github.com/LucasAho/Port2.0), I had yet to implement a proper email form and update elements. I took this update as an opportunity to learn Nodemailer, adding an express server that could be run on Heroku and a MVC framework to organize my code. I also drew the thumbnails for the recent showcase elements, and removed some outdated projects. This express server will be especially helpful if I add the highscore tracker across my deployed games, which is my only remaining plan for improvment (at the moment).

## Plan for Improvement
* Highscore section that tracks scores on all portfolio games

## File Infrastructure

### Public
* images: holds thumbnails for app showcase and logos for nav bar. Also profile pricture and placeholder image.
* javascript: app.js runs front-end jquery/javascript for the portfolio, giving functionality to the home/contact page buttons and the contact form send button.
* style: holds basic css framing for text boxes and image sizing.
### Routes
* contactRoute: requires nodemailer and environment variables. Exports contact route, which runs nodemailer function for contact form
* htmlRoute: exports the route to the index handlebar and contact form handlebar. 404 is also located here. 
### Views
* layouts/main: HTML header and handlebars body call. Links bootstrap, jquery, front-end css and javascript, and a google font. 
* 404: Handles page requests for missing pages and sends user back to index.
* Contact: Holds contact form and handlebars insert for email response. Form contains minimal front-end verification
* Index: Default route, holds nav bar to social networks and the contact form, as well as a bio and showcase of deployed apps. Each app has a card with a link to its code and a link to its deployed site. 
### Server
* server.js: responsible for initiating express server. Server requires express, handlebars, cors, and my routing files. A listener event announced when the server is active on port 3000 or its env variable. 

## Resources used
* Express
* Handlebars
* Cors
* Nodemailer
* Heroku
