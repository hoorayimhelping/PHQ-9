var React = require('react');

var Ranking = require('./ranking.jsx');

module.exports = React.createClass({
    handleClick: function(i, event) {
        this.props.score.setAnswer(i, event.target.value);
    },

    assess: function(event) {
        event.preventDefault();
        console.log(this.props.score.pretty(this.props.score.getScore(this.props.score.sum())));
    },

    render: function()  {
        var depression_form = this.props.score.questions.map(function(question, i) {
            return (
                <Ranking name={question.name} order={i} question={question.text} key={i} onClick={this.handleClick.bind(this, i)} />
            );
        }, this);

        return (
            <form>
                {depression_form}
                <input type="submit" value="Estimate the severity of your depression" onClick={this.assess} />
            </form>
        );
    }
});