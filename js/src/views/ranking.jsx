var React = require('react');

module.exports = React.createClass({
    render: function()  {
        var ids = [
            this.props.name + '-' + 0,
            this.props.name + '-' + 1,
            this.props.name + '-' + 2,
            this.props.name + '-' + 3,
        ];

        return (
            <fieldset>
                <p>{this.props.question}</p>
                <input name={this.props.name} id={ids[0]} type="radio" onClick={this.props.onClick} /><label htmlFor={ids[0]}>Not at all</label>
                <input name={this.props.name} id={ids[1]} type="radio" /><label htmlFor={ids[1]}>Several Days</label>
                <input name={this.props.name} id={ids[2]} type="radio" /><label htmlFor={ids[2]}>More than Half the Days</label>
                <input name={this.props.name} id={ids[3]} type="radio" /><label htmlFor={ids[3]}>Nearly Every Day</label>
            </fieldset>
        );
    }
});