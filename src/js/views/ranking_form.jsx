var React = require('react');

var Ranking = require('./ranking.jsx');

module.exports = React.createClass({
    handleChange: function(i, event) {
        this.props.score.setAnswer(i, event.target.value);
    },

    render: function()  {
        var depression_form = this.props.score.questions.map(function(question, i) {
            return (
                <Ranking name={question.name} order={i} question={question.text} framing_question={this.props.framing_question} key={i} onChange={this.handleChange.bind(this, i)} />
            );
        }, this);

        return (
            <form>
                {depression_form}
                <fieldset>
                    <input type="submit" value="Assess the severity of your depression" onClick={this.props.assess} />
                </fieldset>
            </form>
        );
    }
});