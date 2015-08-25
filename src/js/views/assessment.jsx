var React = require('react');

var RankingForm = require('./ranking_form.jsx');
var TherapistList = require('./therapist_list.jsx');
var AssessmentText = require('./assessment_text.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            show_assessment: false,
            show_therapists: false,
            show_thank_you: false,
            thank_you_therapist: ''
        };
    },

    assess: function(event) {
        event.preventDefault();

        var score = this.props.score.sum();

        this.setState({
            'show_assessment': true,
            'show_therapists': this.props.score.shouldSuggestTherapist(score)
        }, function() {
            window.scrollTo(0, document.body.scrollHeight);
        });
    },

    contactTherapist: function(event) {
        event.preventDefault();

        this.setState({
            'show_thank_you': true,
            'thank_you_therapist': event.target.dataset.name
        });
    },

    render: function()  {
        var class_name = 'assessment-container';

        if (this.state.show_thank_you) {
            return (
                <div className="thank-you">
                    <h2>Great!</h2>
                    <p>We&#39;ve sent out an email to {this.state.thank_you_therapist}. Expect to hear back within the next 48 hours.</p>
                </div>
            )
        }

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