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
                    <li className="framing-question"><p>In the past two weeks have you...</p></li>
                    <li><p>{this.props.question}</p></li>
                    <li><input defaultChecked name={this.props.name} id={ids[0]} type="radio" onClick={this.props.onClick} value="0" /><label htmlFor={ids[0]} style={{backgroundColor: 'hsla(126, 18%, 70%, 1)'}}>Not at all</label></li>
                    <li><input name={this.props.name} id={ids[1]} type="radio" onClick={this.props.onClick} value="1" /><label htmlFor={ids[1]} style={{backgroundColor: 'hsla(76, 18%, 70%, 1)'}}>Several Days</label></li>
                    <li><input name={this.props.name} id={ids[2]} type="radio" onClick={this.props.onClick} value="2" /><label htmlFor={ids[2]} style={{backgroundColor: 'hsla(41, 18%, 70%, 1)'}}>More than Half the Days</label></li>
                    <li><input name={this.props.name} id={ids[3]} type="radio" onClick={this.props.onClick} value="3" /><label htmlFor={ids[3]} style={{backgroundColor: 'hsla(10, 18%, 70%, 1)'}}>Nearly Every Day</label></li>
                </ul>
            </fieldset>
        );
    }
});