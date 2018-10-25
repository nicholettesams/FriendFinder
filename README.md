# Friend Finder - Node and Express Servers

## Assignment

Build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## Solution
I used Express to handle routing to HTML and API routes on the server.  All friends are stored in an array of objects.  The friends added by the user do not persist after the server has been restarted.   

## Technologies
HTML, Bootstrap, JavaScript, JQuery, Node, Express, Path, Heroku

## How to Use
Browse to the [Heroku Link](https://friendfindersams.herokuapp.com/) to get started.

Click on the "Take Survey" button and enter your name, photo and answer 10 questions.  All questions are on a scale of 1 - 5. 1 being "Strongly Disagree" to 5 being "Strongly Agree". WHen all fields are filled out, click the Submit button to see your results!

The application will search existing friends and find the closes match to your answers.  You will then be added to the list of friends to be potentially matched to future users of the application. If you click Submit more than once, you will not be added to the friends list more than once (if all the fields are the same from the previous submit).  It will also not match you to yourself if you try to submit more than once (if all fields are the same).

There are links to the API Friends List to view the raw JSON list of friends and also a link to my GitHub Repository in the footter of both pages.