var React = require('react');

var DepressionTest = require('./depression_test');
new DepressionTest();

var Helloworld = require('./views/test.jsx');

React.render(<Helloworld name="pants" />, document.getElementById('container'));

console.log("and that's the waaaaaaaaaaayyyyyyy the news goes");