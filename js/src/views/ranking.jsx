var React = require('react');

module.exports = React.createClass({
    render: function()  {
        return (
            <div>
                <input name={this.props.question} type="radio" />
                <input name={this.props.question} type="radio" />
                <input name={this.props.question} type="radio" />
                <input name={this.props.question} type="radio" />
            </div>
        );
    }
});