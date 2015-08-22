var test = require('tape');
var DepressionTest = require('../src/depression_test');
var depression_test = new DepressionTest;

test("score returns 42", function(t) {
    t.plan(1);

    t.equal(depression_test.score(), 42, "score should equal the score");
});