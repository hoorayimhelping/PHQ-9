var React = require('react');

var Assessment = require('./views/assessment.jsx');

var DepressionScore = require('./model/depression_score');
var score = new DepressionScore();

var Therapists = require('./model/therapists')
var therapists = new Therapists();

React.render(<Assessment score={score} therapists={therapists} />, document.getElementById('container'));