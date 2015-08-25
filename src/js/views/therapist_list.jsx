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
            <ul className={this.props.visible ? '' : 'hide' }>
                {therapists}
            </ul>
        );
    }
});