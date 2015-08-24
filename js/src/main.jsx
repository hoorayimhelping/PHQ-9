var React = require('react');

var RankingForm = require('./views/ranking_form.jsx');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();

React.render(<RankingForm score={score} />, document.getElementById('container'));