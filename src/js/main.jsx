var React = require('react');

var Assessment = require('./views/assessment.jsx');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();

var Therapists = require('./therapists')
var therapists = new Therapists();

React.render(<Assessment score={score} therapists={therapists} />, document.getElementById('container'));