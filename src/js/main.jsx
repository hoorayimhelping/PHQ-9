var React = require('react');

var Assessment = require('./views/assessment.jsx');

var DepressionScore = require('./model/depression_score');
var score = new DepressionScore();

var Therapists = require('./model/therapists')
var therapists = new Therapists();

// Assessment is the entry point to the application.
// Trying to do a little bit of IoC here by passing the already defined domain to the main application
React.render(<Assessment score={score} therapists={therapists} />, document.getElementById('container'));