var React = require('react');

module.exports = React.createClass({
	componentDidMount: function() {
        window.scrollTo(0, document.body.scrollHeight);
    },

    render: function()  {
        return (
            <h3 className="assessment">Based on the way you answered, your depression appears to be <span className="final-assessment">{this.props.text}</span></h3>
        );
    }
});