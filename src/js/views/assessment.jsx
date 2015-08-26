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
            React.findDOMNode(this.refs.assessment_text).scrollIntoView();
        });
    },

    contactTherapist: function(i) {
        event.preventDefault();

        this.props.therapists.setSelectedTherapist(i);

        this.setState({
            'show_thank_you': true
        });
    },

    render: function()  {
        var class_name = 'assessment-container';

        if (this.state.show_thank_you) {
            return (
                <div className="thank-you">
                    <h2>Great!</h2>
                    <p>We&#39;ve sent out an email to {this.props.therapists.getSelectedTherapist().name}. Expect to hear back within the next 48 hours.</p>
                </div>
            )
        }

        if (this.state.show_assessment) {
            if (this.state.show_therapists) {
                return (
                    <div className={class_name}>
                        <RankingForm score={this.props.score} assess={this.assess} />
                        <AssessmentText ref="assessment_text" text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
                        <TherapistList therapists={this.props.therapists.getTherapists()} handleClick={this.contactTherapist} />
                    </div>
                );
            }

            return (
                <div className={class_name}>
                    <RankingForm score={this.props.score} assess={this.assess} />
                    <AssessmentText ref="assessment_text" text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
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