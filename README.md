# Universe Social A sample React App Twitter Clone

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

pull the source and run the following from the source directory

### `npm install`

then you can host the project locally by running the following:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# About

This is the first React Application I've worked on in a number of years, so hopefully I'm not to out of touch
with modern React patterns. Read through a number of tutorials on React and picked a number of tools to get a sample project out.

This project used the following [guidelines](https://github.com/onuniverse/sample-project-guidelines/blob/master/React.md) 

This project uses a few tools to speed up the development.

for content it uses : [jsonplaceholder](https://jsonplaceholder.typicode.com)

It uses Create React App to bootstrap the project
It uses [react-router](https://reactrouter.com/docs/en/v6) for managing routing state and transitioning between views

It uses [materialize](https://materializecss.com/) for styling, it's a simple material.io sass styling library
It also uses SASS for styling mostly because I tend to use it by default on most of my frontend projects

## Basic Architecture

In Models, there is a really basic store and model classes.
the store abstracts away loading the models, however it's pretty basic, I started adding some
simple caching but it's questionable at best, I left it as is in the interest of time, but at the 
end of the day if I wanted to get more complex I would probably look at using something like
react-orm.

The views are stored in the main src directory and are roughly structed in the following way:

App -> TitleBar

    -> ContentBody -> Posts - list of all posts

                   -> PostDetails - Post Details with comments

                   -> Profile - Authors "profile" page

Navigation between the posts authors / post details is done by the green buttons on the bottom of the
post (Comments / User Profile)

#TODO
 - Have better caching in the store
 - Better testing, i focused on testing the store and low level components, but ran out of time to do much functional level tests on the high level components
 - More time on styling, relied a lot on just basic look of materialize.
 - more function level documentation
