var React = require('react');

var RankingForm = require('./ranking_form.jsx');

module.exports = React.createClass({
    assess: function(event) {
        event.preventDefault();
        console.log(this.props.score.pretty(this.props.score.getScore(this.props.score.sum())));
    },

    render: function()  {
        return (
            <div>
                <RankingForm score={this.props.score} assess={this.assess} />
            </div>
        );
    }
});