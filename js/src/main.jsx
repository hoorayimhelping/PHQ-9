var React = require('react');

var DepressionScore = require('./depression_score');
var score = new DepressionScore();

var Ranking = require('./views/ranking.jsx');

var tallyUp = function(event) {
    event.preventDefault();

    console.log(score.pretty(score.getScore(score.sum())));
};

var RankingForm = React.createClass({
    handleClick: function(i, event) {
        score.setAnswer(i, event.target.value);
    },

    render: function()  {
        var depression_form = this.props.questions.map(function(question, i) {
            return (
                <Ranking name={question.name} order={i} question={question.text} key={i} onClick={this.handleClick.bind(this, i)} />
            );
        }, this);

        return (
            <form>
                {depression_form}
                <input type="submit" value="Estimate the severity of your depression" onClick={tallyUp} />
            </form>
        );
    }
});

React.render(<RankingForm questions={score.questions} />, document.getElementById('container'));