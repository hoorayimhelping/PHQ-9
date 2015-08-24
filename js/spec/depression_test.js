var test = require('tape');
var DepressionScore = require('../src/depression_score');

test("when calculating the score", function(t) {
    var score = new DepressionScore();

    test("when the score is out of range", function(t) {
        t.plan(2);

        var out_of_range_score = 28;
        var error_message = "I couldn't find " + out_of_range_score + " in my range of values. Sorry";

        t.throws(function() {
            score.score(out_of_range_score);
        }, error_message);

        out_of_range_score = -1;
        error_message = "I couldn't find " + out_of_range_score + " in my range of values. Sorry";

        t.throws(function() {
            score.score(out_of_range_score);
        }, error_message);
    });

    // this block of tests is intentinally hand-written in the hopes that it's very clear what is being tested
    test("when the score is in range [inclusive]", function(t) {
        test("when the score is in the range of 0-4, the assessment should be minimal", function(t) {
            t.plan(5);

            t.equals(score.getScore(0), 'minimal');
            t.equals(score.getScore(1), 'minimal');
            t.equals(score.getScore(2), 'minimal');
            t.equals(score.getScore(3), 'minimal');
            t.equals(score.getScore(4), 'minimal');
        });

        test("when the score is in the range of 5-9, the assessment should be mild", function(t) {
           t.plan(5);

            t.equals(score.getScore(5), 'mild');
            t.equals(score.getScore(6), 'mild');
            t.equals(score.getScore(7), 'mild');
            t.equals(score.getScore(8), 'mild');
            t.equals(score.getScore(9), 'mild');
        });

        test("when the score is in the range of 10-14, the assessment should be moderate", function(t) {
           t.plan(5);

            t.equals(score.getScore(10), 'moderate');
            t.equals(score.getScore(11), 'moderate');
            t.equals(score.getScore(12), 'moderate');
            t.equals(score.getScore(13), 'moderate');
            t.equals(score.getScore(14), 'moderate');
        });

        test("when the score is in the range of 15-19, the assessment should be moderately-severe", function(t) {
           t.plan(5);

            t.equals(score.getScore(15), 'moderately-severe');
            t.equals(score.getScore(16), 'moderately-severe');
            t.equals(score.getScore(17), 'moderately-severe');
            t.equals(score.getScore(18), 'moderately-severe');
            t.equals(score.getScore(19), 'moderately-severe');
        });

        test("when the score is in the range of 20-27, the assessment should be severe", function(t) {
           t.plan(8);

            t.equals(score.getScore(20), 'severe');
            t.equals(score.getScore(21), 'severe');
            t.equals(score.getScore(22), 'severe');
            t.equals(score.getScore(23), 'severe');
            t.equals(score.getScore(24), 'severe');
            t.equals(score.getScore(25), 'severe');
            t.equals(score.getScore(26), 'severe');
            t.equals(score.getScore(27), 'severe');
        });

        t.end();
    });

    t.end();
});

test("when setting the answer", function(t) {
    var score = new DepressionScore();

    t.plan(8);

    score.setAnswer(0, -1);
    t.equals(score.questions[0].score, 0, "it clamps negative scores to 0");

    score.setAnswer(1, -55);
    t.equals(score.questions[1].score, 0, "it clamps extremely negative scores to 0");

    score.setAnswer(2, 4);
    t.equals(score.questions[2].score, 3, "it clamps large scores to 3");

    score.setAnswer(3, 55);
    t.equals(score.questions[3].score, 3, "it clamps extremely large scores to 3");

    score.setAnswer(4, 0);
    t.equals(score.questions[4].score, 0);

    score.setAnswer(5, 1);
    t.equals(score.questions[5].score, 1);

    score.setAnswer(6, 2);
    t.equals(score.questions[6].score, 2);

    score.setAnswer(7, 3);
    t.equals(score.questions[7].score, 3);

    t.end();
});

test("when summing the score", function(t) {
    var score = new DepressionScore();

    t.plan(3);

    t.equals(score.sum(), 0, 'score is initialized to 0 for all answers');

    score.setAnswer(0, 1);
    score.setAnswer(1, 3);
    t.equals(score.sum(), 4);

    score.setAnswer(2, 0);
    score.setAnswer(3, 2);
    score.setAnswer(4, 3);
    score.setAnswer(5, 1);
    score.setAnswer(6, 2);
    score.setAnswer(7, 1);
    score.setAnswer(8, 1);

    t.equals(score.sum(), 14);

    t.end();
});