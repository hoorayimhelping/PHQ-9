var React = require('react');

var RankingForm = require('./ranking_form.jsx');
var TherapistList = require('./therapist_list.jsx');
var AssessmentText = require('./assessment_text.jsx');

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

        this.setState({
            'show_assessment': true,
            'show_therapists': this.props.score.shouldSuggestTherapist(score)
        });
    },

    contactTherapist: function(event, i) {
        console.log('contact therapist', arguments);
    },

    render: function()  {
        if (this.state.show_assessment) {
            if (this.state.show_therapists) {
                return (
                    <div>
                        <RankingForm score={this.props.score} assess={this.assess} />
                        <AssessmentText text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
                        <TherapistList therapists={this.props.therapists} handleClick={this.contactTherapist} visible={this.state.show_therapists ? true : false } />
                    </div>
                );
            }

            return (
                <div>
                    <RankingForm score={this.props.score} assess={this.assess} />
                    <AssessmentText text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
                </div>
            );
        }

        return (
            <div>
                <RankingForm score={this.props.score} assess={this.assess} />
            </div>
        )
    }
});