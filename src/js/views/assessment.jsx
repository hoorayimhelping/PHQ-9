var React = require('react');

var RankingForm = require('./ranking_form.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return { show_assessment: false };
    },

    assess: function(event) {
        event.preventDefault();
        var score = this.props.score.getScore(this.props.score.sum());
        this.setState({
            'show_assessment': this.props.score.shouldSuggestTherapist(score)
        });
    },

    render: function()  {
        if (this.state.show_assessment) {
            return (
                <div>
                    <h1>Sorry bro, you&quot;re depressed</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <RankingForm score={this.props.score} assess={this.assess} />
                </div>
            );
        }
    }
});