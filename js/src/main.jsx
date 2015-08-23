var React = require('react');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();

var Ranking = require('./views/ranking.jsx');

var handleClick = function(event) {
    console.log(event);
};

var RankingForm = React.createClass({
    render: function()  {
        return (
            <form>
                <Ranking name="pencilvester" order="0" question="Little interest or pleasure in doing things" type="radio" onClick={handleClick} />
                <Ranking name="pencilvester" order="1" question="Feeling down, depressed, or hopeless?" type="radio" />
                <Ranking name="pencilvester" order="2" question="Trouble falling or staying asleep, or sleeping too much?" type="radio" />
                <Ranking name="pencilvester" order="3" question="Feeling tired or having little energy?" type="radio" />
                <Ranking name="pencilvester" order="4" question="Poor appetite or overeating?" type="radio" />
                <Ranking name="pencilvester" order="5" question="Feeling bad about yourself - or that you are a failure or have let yourself or your family down?" type="radio" />
                <Ranking name="pencilvester" order="6" question="Trouble concentrating on things, such as reading the newspaper or watching television?" type="radio" />
                <Ranking name="pencilvester" order="7" question="Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?" type="radio" />
                <Ranking name="pencilvester" order="8" question="Thoughts that you would be better off dead, or of hurting yourself in some way?" type="radio" />
            </form>
        );
    }
});

React.render(<RankingForm />, document.getElementById('container'));