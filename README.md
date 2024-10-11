## Description
In this project I have been tasked with creating an app capable of saving and using data with node.js via MongoDB 

## Deployment Link
Git hub pages

## Image of Homepage
    [Image of a website homepage](urlLink)

## Code Installation
    Explain how a reader can access my code

## Time Frame / Solo 
This project all in all took me 8 days to complete, from the planning phase to the deployment phase.

## Technologies Used
    - Node.js
    - MongoDB

    - Dependencies
        - Express
        - ejs
        - bcryptjs
        - connect-mongo
        - dotenv
        - express-session
        - method-override
        - mongoose
        - morgan
        -multer
        
    ERD diagram (dbdiagram,io)
    FIGMA
    NOTION


## Brief
For this project we were told that we need to build a Node/Express/MongoDB application with full CRUD.
The project would be entirely our own with our own themes, however the project requirements stated that we must
follow the requirements given to us if we were to pass.
These include; Following RESTful routing conventions, using full CRUD, error handling, it is styled and more. 

## Planning
![A layed out Kanban plan of the project](/public/Images/Notion%20Planning.png)
    For this project I ended up planning extensively behind the scene to allow a seamless coding experienceI.
    I found this process extremely useful as it allows me to visualise the code and understand the process.

## Build Process
    - Initially I planned the structure of the code with Wireframes, ERDs, Routing Tables and the User Story
    - I then built the homepage along with the buttons to sign in or sign up
        - I also created a nav bar that would not be present in the finial rendering of the code but to help me navigate while building the app
    - Then I proceed to create the model for the user
    - Then onto the sign up process. Ensure the model details would be unique and not match any previous users
        - I redirected the  users to the homepage for now
    - Then I created the sign in page. Checking if the user exists and the password matches the user
        - Redirected to homepage
    - I then built the 'user homepage'. This is the area the user is redirected to after login which show the possible routes the user could go
    - I adjusted the redirecting to the user homepage
    - Rendering my 'fitness logger' section of the app(new.ejs) I created a starting set of fields for the user to see upon loading the page.
    - The user will be presented with 4 fields to write their workouts in - one button as a '+' to add more field inputs to add more exercises - a button labelled 'SAVE WORKOUT'
    - To add more fields I had to run a function and link the pages to a Javascript file in the Public folder and then link it to a button.
    - Then onto the 'social page' (Index.ejs). This route is going to have each workout pushed to this file and rendered in a column style to allow users to scroll down and see other peoples sessions.
    - 

## Challenges
- Having the middleware in the wrong order which didn't allow me to define a user on an .ejs file
- Linking the nav bar to the pages was more of a pain than a struggle as I had the paths wrong
- Creating the middleware to access the user details in alternative controllers
- A HUGE challenge I faced was getting the edit function to work. This was due to the fact that I was attempting to update a Sub Document, not the model itself (this was a 2am finisher..)

## Wins
The speed at which I've completed this projects MVP and how much LESS stressed I've been completing it

## Bugs
    What bugs are currently present that someone else might be able to debug
    
## Future Improvements / Stretch
1. Adding a 'history' tab to allow the user to look back at their workouts and see their progress
2. creating 'CARDS' within the fitness logger section with transitions to allow vertical scrolling to be more interesting
3. Adding a profile section with 'photos, PBs and favourite exercises'
3. Save other session to your profile
4. Allowing other users to view your profile
5. Add Labels to the for input
6. Add the ability to 'add' new exercise during session EDIT.EJS