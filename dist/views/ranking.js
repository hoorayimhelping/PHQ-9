var React = require('react');

module.exports = React.createClass({displayName: "exports",
    render: function()  {
        return (
            React.createElement("div", null, 
                React.createElement("input", {name: this.props.name, type: "radio"}), 
                React.createElement("input", {name: this.props.name, type: "radio"}), 
                React.createElement("input", {name: this.props.name, type: "radio"}), 
                React.createElement("input", {name: this.props.name, type: "radio"})
            )
        );
    }
});