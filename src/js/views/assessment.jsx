var React = require('react');

var RankingForm = require('./ranking_form.jsx');
var TherapistList = require('./therapist_list.jsx');

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

    contactTherapist: function(event, i) {
        console.log('contact therapist', arguments);
    },

    render: function()  {
        var form = (
            <div>
                <RankingForm score={this.props.score} assess={this.assess} />
            </div>
        );

        var therapists = (
            <div>
                <TherapistList therapists={this.props.therapists} handleClick={this.contactTherapist} />
            </div>
        );

        var final_form;
        if (this.state.show_assessment) {
            final_form = (
                <div>
                    {form}
                    {therapists}
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