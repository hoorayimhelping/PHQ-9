var test = require('tape');
var DepressionScore = require('../src/depression_score');
var depression_score = new DepressionScore();

test("when calculating the score", function(t) {
    test("when the score is out of range", function(t) {
        t.plan(2);

        var out_of_range_score = 28;
        var error_message = "I couldn't find " + out_of_range_score + " in my range of values. Sorry";

        t.throws(function() {
            depression_score.score(out_of_range_score);
        }, error_message);

        out_of_range_score = -1;
        error_message = "I couldn't find " + out_of_range_score + " in my range of values. Sorry";

        t.throws(function() {
            depression_score.score(out_of_range_score);
        }, error_message);
    });

    // this block of tests is intentinally hand-written in the hopes that it's very clear what is being tested
    test("when the score is in range [inclusive]", function(t) {
        test("when the score is in the range of 0-4, the assessment should be none", function(t) {
            t.plan(5);

            t.equals(depression_score.score(0), 'none');
            t.equals(depression_score.score(1), 'none');
            t.equals(depression_score.score(2), 'none');
            t.equals(depression_score.score(3), 'none');
            t.equals(depression_score.score(4), 'none');
        });

        test("when the score is in the range of 5-9, the assessment should be mild", function(t) {
           t.plan(5);

            t.equals(depression_score.score(5), 'mild');
            t.equals(depression_score.score(6), 'mild');
            t.equals(depression_score.score(7), 'mild');
            t.equals(depression_score.score(8), 'mild');
            t.equals(depression_score.score(9), 'mild'); 
        });

        test("when the score is in the range of 10-14, the assessment should be moderate", function(t) {
           t.plan(5);

            t.equals(depression_score.score(10), 'moderate');
            t.equals(depression_score.score(11), 'moderate');
            t.equals(depression_score.score(12), 'moderate');
            t.equals(depression_score.score(13), 'moderate');
            t.equals(depression_score.score(14), 'moderate'); 
        });

        test("when the score is in the range of 15-19, the assessment should be moderately-severe", function(t) {
           t.plan(5);

            t.equals(depression_score.score(15), 'moderately-severe');
            t.equals(depression_score.score(16), 'moderately-severe');
            t.equals(depression_score.score(17), 'moderately-severe');
            t.equals(depression_score.score(18), 'moderately-severe');
            t.equals(depression_score.score(19), 'moderately-severe'); 
        });

        test("when the score is in the range of 20-27, the assessment should be severe", function(t) {
           t.plan(8);

            t.equals(depression_score.score(20), 'severe');
            t.equals(depression_score.score(21), 'severe');
            t.equals(depression_score.score(22), 'severe');
            t.equals(depression_score.score(23), 'severe');
            t.equals(depression_score.score(24), 'severe');
            t.equals(depression_score.score(25), 'severe');
            t.equals(depression_score.score(26), 'severe');
            t.equals(depression_score.score(27), 'severe');
        });

        t.end();
    });

    t.end();
});