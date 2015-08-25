var React = require('react');

var RankingForm = require('./ranking_form.jsx');
var TherapistList = require('./therapist_list.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            show_assessment: false,
            show_therapists: false
        };
    },

    assess: function(event) {
        event.preventDefault();

        var score = this.props.score.getScore(this.props.score.sum());

        score = 15;
        this.setState({
            'show_assessment': true,
            'show_therapists': this.props.score.shouldSuggestTherapist(score)
        });
    },

    contactTherapist: function(event, i) {
        console.log('contact therapist', arguments);
    },

    render: function()  {
        return (
            <div>
                <RankingForm score={this.props.score} assess={this.assess} />
                <p className={this.state.show_assessment ? '' : 'hide' }>Based on the way you answered, your depression is <span className="final-assessment">{this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))}</span></p>
                <TherapistList therapists={this.props.therapists} handleClick={this.contactTherapist} visible={this.state.show_therapists ? true : false } />
            </div>
        );
    }
});