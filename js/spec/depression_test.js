'use strict';

var test = require('tape');
var DepressionTest = require('../src/depression_test');
var depression_test = new DepressionTest;

test("when calculating the score", function(t) {
    test("when the score is out of range", function(t) {
        t.plan(2);

        var out_of_range_score = 257;
        var error_message = "I couldn't find " + out_of_range_score + " in my range of values. Sorry";

        t.throws(function() {
            depression_test.score(out_of_range_score);
        }, error_message);

        out_of_range_score = -1;
        error_message = "I couldn't find " + out_of_range_score + " in my range of values. Sorry";

        t.throws(function() {
            depression_test.score(out_of_range_score);
        }, error_message);
    });

    t.end();
});