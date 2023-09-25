# interactive-form-v3

<!-- ABOUT THE PROJECT -->

## About The Project

![Product screenshot](<Screenshot 2023-09-22 at 1.39.50 PM.png>)

This project is part of the curriculum for Treehouse's Full Stack JavaScript Techdegree.

In this project I used JavaScript to enhance an interactive regfistration form for a fictional Full Stack conference.

Using the supplied HTML and CSS files, I added JavaScript to make the form more user-friendly by:

- Adding customized and conditional behavior and interactivity;
- Validating user input and providing helpful error messages when the user enters invalid information into the form fields.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- 
Form fields that have real time validation and conditional error messages are detailed in the project’s README.me file.
I would highly recommend being a little more specific here. List exactly which fields are real time and what the conditional errors are. Here’s an example using one field for what I would expect for all fields!
- EMAIL ADDRESS FIELD
  - Real Time Validation
  - empty field: “This field cannot be empty”
  - incorrectly formatted: “Email address must be formatted correctly”
I would also recommend putting this information at the TOP of your README file to make sure that your reviewer sees it!
-->

<!-- FEATURES -->

## Features

### real-time error messages and conditional error messages

With the real time feature we get instant validation and error messages for the required input fields (marked with the \* ) if the user enters invalid input.
The conditional feature displays error messages with more information about what is wrong.
- NAME FIELD
  - Real Time Validation
  - empty or blank field: “This field cannot be empty”
- EMAIL ADDRESS FIELD
  - Real Time Validation
  - empty field: “This field cannot be empty”
  - incorrectly formatted (Several characters for the username, preceded by "@", followed by another set of characters, ending with a "." and a couple more characters for the domain name): “Email address must be formatted correctly”
- REGISTER FOR ACTIVITIES SECTION
  - Real Time Validation
  - empty section: “Choose at least one activity”
- CREDIT CARD SECTION (ONLY IF CREDIT CARD IS THE SELECTED PAYMENT METHOD)
  - Real Time Validation
  - "card number" is invalid: "Credit card number must be between 13 - 16 digits"
  - "card number" empty field: “This field cannot be empty”
  - "zip code" is invalid: "Zip Code must be 5 digits"
  - "zip code" empty field: “This field cannot be empty”
  - "cvv" is invalid: "CVV must be 3 digits"
  - "cvv" empty field: “This field cannot be empty”
Meeting all the requirements, the error will disapear and the green symbol will display to indicate it is a valid input.


<!-- BUILT WITH -->

### Built With

HTML, CSS and JavaScript

<p align="center"> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a></p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Getting started with the project files
- [x] Name field
- [x] Job role section
- [x] T-shirt info section
- [x] Activities section
- [x] Payment info section
- [x] Form validation
- [x] The activities section
- [x] Visual validation errors
- [x] Finish the project
  - [x] code comments
  - [x] code readability
  - [x] quality assurance testing
  - [x] cross browser consistency
- [x] Extra credit
  - [x] conflicting activity times
  - [x] real-time error messages
    - [x] detail this specific feature in README.md file
  - [x] conditional error message
    - [x] detail this specific feature in README.md file

<p align="right">(<a href="#readme-top">back to top</a>)</p>