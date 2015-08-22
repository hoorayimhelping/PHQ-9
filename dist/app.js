(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var DepressionTest = function() {
    this.range = {
        'none': [0, 4],
        'mild': [5, 9],
        'moderate': [10, 14],
        'moderately-severe': [15, 19],
        'severe': [20, 27]
    };

    this.pretty_range = {
        'none': 'None',
        'mild': 'Mild',
        'moderate': 'Moderatge',
        'moderately-severe': 'Moderately Severe',
        'severe': 'Severe'
    };

    this.answers = [];
    for (var i = 0; i < 9; i++) {
        this.answers.push(0);
    }
};

DepressionTest.prototype = {
    score: function(score) {
        for (var range in this.range) {
            if (score >= this.range[range][0] && score <= this.range[range][1]) {
                return range;
            }
        }

        throw "I couldn't find " + score + " in my range of values. Sorry";
    }
};

module.exports = DepressionTest;
},{}],2:[function(require,module,exports){
var DepressionTest = require('./depression_test');
new DepressionTest();

console.log("and that's the waaaaaaaaaaayyyyyyy the news goes");
},{"./depression_test":1}]},{},[2]);
