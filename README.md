# simpleFullStackApp
Simple Full Stack App using Node.js with Express, MySQL, HTML, CSS, and Javascript

Simple Full Stack Web App

- Download XAMPP which is going to run our local mySQL server
- Build the HTML and CSS in the client folder
- Javascript: add some event handlers for when the page loads. When the page loads we want to grab all the data that is coming from the database and if there is no data we want to show that there is “No data”

Now let’s go back to our back-end
- Go into the server folder and in terminal type: $ npm init -y (so we have a package.json file)
- Make sure you have Node.js installed
- Then type $npm install express. Express is a back end web app framework for Node.js.
- Then type $npm install mysql (interface for mysql server and make queries)
- Then type $npm install dotenv (so we have a place to store all of our configurations for our data base like password and username) so that whenever you push your code to a repository you are not actually sending your configurations there as well)
- Then type $npm install nodemon —save-dev (module that every time we make changes to our script we don’t have to restart the server, it will watch it for us and load it for us)
- The type $npm install cars (that way we can make API calls from our front end to our back end)
- In the package.json file rename main to app.js
- In the server folder create a file called app.js
- Create a .env file: back end local host for our server

To make sure the app is running type $npx nodemon app
- localhost:5000/getAll on the browser and ‘test’ will be printed on the console so we know our back-end is working
