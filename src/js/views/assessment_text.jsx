var React = require('react');

module.exports = React.createClass({
    render: function()  {
        return (
            <h3 className="assessment">Based on the way you answered, your depression appears to be <span className="final-assessment">{this.props.text}.</span></h3>
        );
    }
});