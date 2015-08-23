var React = require('react');

module.exports = React.createClass({
    render: function()  {
        var ids = [
            this.props.question + '-' + 0,
            this.props.question + '-' + 1,
            this.props.question + '-' + 2,
            this.props.question + '-' + 3,
        ];

        return (
            <div>
                <input name={this.props.question} id={ids[0]} type="radio" /><label htmlFor={ids[0]}>Not at all</label>
                <input name={this.props.question} id={ids[1]} type="radio" /><label htmlFor={ids[1]}>Several Days</label>
                <input name={this.props.question} id={ids[2]} type="radio" /><label htmlFor={ids[2]}>More than Half the Days</label>
                <input name={this.props.question} id={ids[3]} type="radio" /><label htmlFor={ids[3]}>Nearly Every Day</label>
            </div>
        );
    }
});