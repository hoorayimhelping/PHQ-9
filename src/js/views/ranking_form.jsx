var React = require('react');

var Ranking = require('./ranking.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            needs_validation: {}
        };
    },

    validate: function(event) {
        event.preventDefault();

        var unanswered_questions = this.props.score.getUnAnsweredQuestions();

        // this passes validation, we can assess the responses
        if (unanswered_questions.length === 0) {
            this.props.assess(event);
            return;
        }

        var needs_validation = {};
        unanswered_questions.forEach(function(question, i) {
            needs_validation[question.name] = true;
        }, this);

        // scroll to the first node that needs validation
        this.setState({
            needs_validation: needs_validation
        }, function() {
            React.findDOMNode(this.refs[unanswered_questions[0].name]).scrollIntoView();
        });
    },

    handleChange: function(i, event) {
        var needs_validation = this.state.needs_validation;
        var question_name = this.props.score.questions[i].name;

        // ran out of time before being able to properly test these kinds of interactions
        if (typeof needs_validation[question_name] !== undefined) {
            delete(needs_validation[question_name]);
            this.setState({
                needs_validation: needs_validation
            });
        }

        this.props.score.setAnswer(i, event.target.value);
    },

    render: function()  {
        var depression_form = this.props.score.questions.map(function(question, i) {
            var needs_validation = typeof this.state.needs_validation[question.name] !== 'undefined';
            return (
                <Ranking ref={question.name} name={question.name} order={i} question={question.text} framing_question={this.props.framing_question} key={i} onChange={this.handleChange.bind(this, i)} needs_validation={needs_validation} />
            );
        }, this);

        return (
            <form>
                {depression_form}
                <fieldset>
                    <input type="submit" value="Assess the severity of your depression" onClick={this.validate} />
                </fieldset>
            </form>
        );
    }
});