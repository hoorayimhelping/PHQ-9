var React = require('react');

var DepressionTest = require('./depression_test');
new DepressionTest();

var Ranking = require('./views/ranking.jsx');

var RankingForm = React.createClass({
    render: function()  {
        return (
            <form>
                <Ranking question="pencilvester" type="radio" />
            </form>
        );
    }
});

React.render(<RankingForm />, document.getElementById('container'));