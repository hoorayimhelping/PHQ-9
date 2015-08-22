'use strict';

var test = require('tape');
var DepressionTest = require('../src/depression_test');
var depression_test = new DepressionTest;

test("when calculating the score", function(t) {
    test("when the score is out of range", function(t) {
        t.plan(2);

        var out_of_range_score = 28;
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

    // this block of tests is intentinally hand-written in the hopes that it's very clear what is being tested
    test("when the score is in range [inclusive]", function(t) {
        test("when the score is in the range of 0-4, the assessment should be none", function(t) {
            t.plan(5);

            t.equals(depression_test.score(0), 'none');
            t.equals(depression_test.score(1), 'none');
            t.equals(depression_test.score(2), 'none');
            t.equals(depression_test.score(3), 'none');
            t.equals(depression_test.score(4), 'none');
        });

        test("when the score is in the range of 5-9, the assessment should be mild", function(t) {
           t.plan(5);

            t.equals(depression_test.score(5), 'mild');
            t.equals(depression_test.score(6), 'mild');
            t.equals(depression_test.score(7), 'mild');
            t.equals(depression_test.score(8), 'mild');
            t.equals(depression_test.score(9), 'mild'); 
        });

        test("when the score is in the range of 10-14, the assessment should be moderate", function(t) {
           t.plan(5);

            t.equals(depression_test.score(10), 'moderate');
            t.equals(depression_test.score(11), 'moderate');
            t.equals(depression_test.score(12), 'moderate');
            t.equals(depression_test.score(13), 'moderate');
            t.equals(depression_test.score(14), 'moderate'); 
        });

        test("when the score is in the range of 15-19, the assessment should be moderately-severe", function(t) {
           t.plan(5);

            t.equals(depression_test.score(15), 'moderately-severe');
            t.equals(depression_test.score(16), 'moderately-severe');
            t.equals(depression_test.score(17), 'moderately-severe');
            t.equals(depression_test.score(18), 'moderately-severe');
            t.equals(depression_test.score(19), 'moderately-severe'); 
        });

        test("when the score is in the range of 20-27, the assessment should be severe", function(t) {
           t.plan(8);

            t.equals(depression_test.score(20), 'severe');
            t.equals(depression_test.score(21), 'severe');
            t.equals(depression_test.score(22), 'severe');
            t.equals(depression_test.score(23), 'severe');
            t.equals(depression_test.score(24), 'severe');
            t.equals(depression_test.score(25), 'severe');
            t.equals(depression_test.score(26), 'severe');
            t.equals(depression_test.score(27), 'severe');
        });

        t.end();
    });

    t.end();
});