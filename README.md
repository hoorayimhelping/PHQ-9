##Implementation of a mobile-friendly [PHQ-9](https://en.wikipedia.org/wiki/Patient_Health_Questionnaire) questionnaire front-end in React

### How to read this code
The entry point into the app is `src/js/main.jsx`
The app is built using [gulpjs](http://gulpjs.com/). The configuration for building is located in the gulpfile `./gulpfile.js`

###Stories:
1) As a patient I want to take the PHQ-9 depression screener through my phone (mobile-friendly site) and get the assessment score and what that means.

2) As a patient, if I score moderate depression or higher, I want to be presented with three options for therapists that I can select from.

### [View the test here](http://hoorayimhelping.github.io/PHQ-9/)

### Installation:

```
git clone git@github.com:hoorayimhelping/PHQ-9.git && \
cd PHQ-9 && \
npm install && \
gulp \
open index.html
```
#### Run default task (lint, test, build)
`gulp [default]`

#### Run Tests
`gulp test `

#### Run Linter (JS Static analysis performed by JSHint)
`gulp lint`

#### Build jsx and browserify require modules
`gulp build`

*I am not a designer!*

### Context on development
To keep things simple, I worked under the assumption that the user has a fairly modern browser, either on their phone or desktop. This allowed me to focus on the design of the system (from a software point of view) rather than boxing with the browser.

Based on my own experience with the PHQ-9, I designed the interactions under some specific assumptions: Depression clouds our cognition, problem solving, judgement, self esteem, and reasoning abilities, so the questions should be simple to understand and answer. A lot of the PHQ-9 tests I've taken had awkwardly worded questions and answers which made me unsure how I was responding. To help allieviate these issues, I color coded the possible responses from green to red* (I'm working under the assumption this is going out to a largely American audience). I also tried to make it easy to take action when the lists of therapists are shown.

From the software side of things, I took an iterative approach and was guided philosphically by YAGNI. The scoring system to determine if the depression is severe enough to talk to a therapist about was some of the earliest code I wrote. It's the only real domain logic, so that's where all the tests live. I'm still new to React, and I'm pretty sure this could use some tweaking by someone with a bit more experience.

*I'm not a designer, and these are simple designs that would obviously need to be iterated on. The idea is what I'm trying to convey.
