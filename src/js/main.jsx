var React = require('react');

var Assessment = require('./views/assessment.jsx');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();

React.render(<Assessment score={score} />, document.getElementById('container'));