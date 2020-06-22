# Would you rather app - This app allows users to play the would you rather game which consists of users posting questions with two options then users can vote among the two.

## How to run the APP

1. Clone the repo using this link [here](https://github.com/mystere10/would-you-rather.git)
2. run npm install
3. run npm start to start the app

## Functions consumed

Here below are a list of functions consumed and what they are supposed to do

### Backend

`getInitialData()`
This function returns all initial data to start with which includes users and questions

`saveQuestionAnswer()`
This function is called to save a user answer to a given question, it takes three arguments, the loggedin user, the question id and the answer

`saveQuestion()`
This function save a created question. It takes three arguments, the loggedin user and two options

### Front-end
This app uses react as a frontend framework, here below is the structure of the app

Inside the src folder we have the following sub-folders

1. actions
2. components
3. middleware
4. reducers
5. utils


