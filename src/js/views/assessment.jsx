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

        var score = this.props.score.sum();

        this.setState({
            'show_assessment': true,
            'show_therapists': this.props.score.shouldSuggestTherapist(score)
        });
    },

    contactTherapist: function(event, i) {
        console.log('contact therapist', arguments);
    },

    render: function()  {
        var class_name = 'assessment-container';
        if (this.state.show_assessment) {
            if (this.state.show_therapists) {
                return (
                    <div className={class_name}>
                        <RankingForm score={this.props.score} assess={this.assess} />
                        <AssessmentText text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
                        <TherapistList therapists={this.props.therapists} handleClick={this.contactTherapist} />
                    </div>
                );
            }

            return (
                <div className={class_name}>
                    <RankingForm score={this.props.score} assess={this.assess} />
                    <AssessmentText text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
                    <div style={{height: '200px'}}>&nbsp;</div>
                </div>
            );
        }

        return (
            <div className={class_name}>
                <RankingForm score={this.props.score} assess={this.assess} />
            </div>
        )
    }
});