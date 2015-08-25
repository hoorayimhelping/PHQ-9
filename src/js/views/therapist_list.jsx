var React = require('react');

module.exports = React.createClass({
    render: function() {
        var therapists = this.props.therapists.map(function(therapist, i) {
            return (
                <li key={i}>
                    <h3>{therapist.name}</h3>
                    <h4>{therapist.specialties}</h4>

                    <a onClick={this.props.handleClick}>Send an introductory email on my behalf</a>
                </li>
            );
        }, this);

        return (
            <div className="therapists">
                <p>Don&#39;t worry. Here&#39;s a list of therapists we think would be a good match for you.</p>
                <ul>
                    {therapists}
                </ul>
            </div>
        );
    }
});