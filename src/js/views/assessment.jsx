var React = require('react');

var RankingForm = require('./ranking_form.jsx');
var TherapistList = require('./therapist_list.jsx');
var AssessmentText = require('./assessment_text.jsx');

/**
 * This object is sort of the controller or marshall for views. Not sure the most reactive way to handle this, but I can
 * imagine this object growing very quickly and getting very large if care isn't taken to keep it from happening.
 * I've tried to keep it so that this object delegates basically all but the rendering logic to composed objects
 */
module.exports = React.createClass({
    getInitialState: function() {
        return {
            show_assessment: false,
            show_therapists: false,
            show_thank_you: false,
            validation_errors: []
        };
    },

    assess: function(event) {
        event.preventDefault();

        var score = this.props.score.sum();

        this.setState({
            'show_assessment': true,
            'show_therapists': this.props.score.shouldSuggestTherapist(score)
        }, function() {
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

    /**
     * Three basic states of the app:
     * Initial: App just loaded, OR the patient is answering questions but hasn't gotten an assessment yet
     * Assessment: Patient has answered questions and submitted the form and now has an assessment and optionally, contact information
     * Thank you: Patient has gotten the assessment and chosen a therapist to talk to
     */
    render: function()  {
        var class_name = 'assessment-container';

        var ranking_form = (
            <RankingForm score={this.props.score} assess={this.assess} />
        );

        var assessment_text = (
            <AssessmentText ref="assessment_text" text={this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))} />
        );

        // patient has chosen a therapist to contact
        if (this.state.show_thank_you) {
            return (
                <div className="thank-you">
                    <h2>Great!</h2>
                    <p>We&#39;ve sent out an email to {this.props.therapists.getSelectedTherapist().name}. Expect to hear back within the next 48 hours.</p>
                </div>
            )
        }

        // patient has submitted the form and wants an asssement
        if (this.state.show_assessment) {
            // patient has moderate depression or worse
            if (this.state.show_therapists) {
                return (
                    <div className={class_name}>
                        {ranking_form}
                        {assessment_text}
                        <TherapistList therapists={this.props.therapists.getTherapists()} handleClick={this.contactTherapist} />
                    </div>
                );
            }

            // patient has submitted the form and has mild or minimal depression
            // adding the div with a height of 200 px so that when the patient submits the test,
            // the results aren't hard to see at the very bottom of the page. This moves the results up a little bit higher
            return (
                <div className={class_name}>
                    {ranking_form}
                    {assessment_text}
                    <div style={{height: '200px'}}>&nbsp;</div>
                </div>
            );
        }

        // initial state
        return (
            <div className={class_name}>
                {ranking_form}
            </div>
        )
    }
});