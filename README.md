##Implementation of a mobile-friendly [PHQ-9](https://en.wikipedia.org/wiki/Patient_Health_Questionnaire) questionnaire front-end in React

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

My approach from a product/usability standpoint was this:
