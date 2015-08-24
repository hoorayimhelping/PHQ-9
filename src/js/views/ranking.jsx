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
                <ul>
                    <li><p>{this.props.question}</p></li>
                    <li><input name={this.props.name} id={ids[0]} type="radio" onClick={this.props.onClick} value="0" /><label htmlFor={ids[0]}>Not at all</label></li>
                    <li><input name={this.props.name} id={ids[1]} type="radio" onClick={this.props.onClick} value="1" /><label htmlFor={ids[1]}>Several Days</label></li>
                    <li><input name={this.props.name} id={ids[2]} type="radio" onClick={this.props.onClick} value="2" /><label htmlFor={ids[2]}>More than Half the Days</label></li>
                    <li><input name={this.props.name} id={ids[3]} type="radio" onClick={this.props.onClick} value="3" /><label htmlFor={ids[3]}>Nearly Every Day</label></li>
                </ul>
            </fieldset>
        );
    }
});