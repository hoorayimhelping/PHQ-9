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

        this.setState({
            'show_assessment': this.props.score.shouldShowAssessment(score),
            'show_therapists': this.props.score.shouldSuggestTherapist(score)
        });

    },

    contactTherapist: function(event, i) {
        console.log('contact therapist', arguments);
    },

    render: function()  {
        var form = (
            <div>
                <RankingForm score={this.props.score} assess={this.assess} />
            </div>
        );

        var score_assessment = (
            <p>Based on the way you answered, your depression is <span className="final-assessment">{this.props.score.pretty(this.props.score.getScore(this.props.score.sum()))}</span></p>
        );

        var therapists = (
            <TherapistList therapists={this.props.therapists} handleClick={this.contactTherapist} />
        );

        var final_assessment = score_assessment;

        if (this.state.show_therapists) {
            final_assessment = (
                <div>
                    {score_assessment}
                    {therapists}
                </div>
            );
        }

        var final_form;
        if (this.state.show_assessment) {
            final_form = (
                <div>
                    {form}
                    {final_assessment}
                </div>
            );
        } else {
            final_form = (
                <div>
                    {form}
                </div>
            );
        }

        return final_form;
    }
});