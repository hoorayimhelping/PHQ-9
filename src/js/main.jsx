var React = require('react');

var Assessment = require('./views/assessment.jsx');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();
var therapists = [
    {
        name: 'Carol Spivack',
        specialties: 'Depression, Anxiety, Substance Abuse',
    },
    {
        name: 'Graham Chopin',
        specialties: 'Anxiety, ADHD, Family Issues',
    },
    {
        name: 'Boris Pittman',
        specialties: 'Depression, Anxiety, Eating Disorders'
    }
];

React.render(<Assessment score={score} therapists={therapists} />, document.getElementById('container'));