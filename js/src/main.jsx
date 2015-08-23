var React = require('react');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();

var Ranking = require('./views/ranking.jsx');

var questions = [
    { text: "Little interest or pleasure in doing things", name: "no_interest" },
    { text: "Feeling down, depressed, or hopeless?", name: "feeling_down" },
    { text: "Trouble falling or staying asleep, or sleeping too much?", name: "sleep" },
    { text: "Feeling tired or having little energy?", name: "no_energy" },
    { text: "Poor appetite or overeating?", name: "appetite" },
    { text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?", name: "self_esteem" },
    { text: "Trouble concentrating on things, such as reading the newspaper or watching television?", name: "concentration" },
    { text: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?", name: "restless" },
    { text: "Thoughts that you would be better off dead, or of hurting yourself in some way?", name: "suicidal" }
];

var handleClick = function(event) {
    console.log(event);
};

var RankingForm = React.createClass({
    render: function()  {
        var depression_form = this.props.questions.map(function(question, i) {
            var key = question.name + ("" + i);
            return (
                <Ranking name={question.name} order={i} question={question.text} key={key} />
            );
        });

        return (
            <form>
                {depression_form}
            </form>
        );
    }
});

React.render(<RankingForm questions={questions} />, document.getElementById('container'));