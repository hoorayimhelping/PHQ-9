var DepressionScore = function() {
    this.range = {
        'minimal': [0, 4],
        'mild': [5, 9],
        'moderate': [10, 14],
        'moderately-severe': [15, 19],
        'severe': [20, 27]
    };

    this.pretty_range = {
        'minimal': 'Minimal',
        'mild': 'Mild',
        'moderate': 'Moderate',
        'moderately-severe': 'Moderately Severe',
        'severe': 'Severe'
    };

    this.questions = [
        { text: "Had little interest or pleasure in doing things?", name: "no_interest", score: null },
        { text: "Felt down, depressed or hopeless?", name: "feeling_down", score: null },
        { text: "Had trouble falling or staying asleep, or sleeping too much?", name: "sleep", score: null },
        { text: "Felt tired or had little energy?", name: "no_energy", score: null },
        { text: "Experienced a poor appetite or overeating?", name: "appetite", score: null },
        { text: "Felt bad about yourself? Or that you are a failure or have let yourself or your family down?", name: "self_esteem", score: null },
        { text: "Had trouble concentrating on things, such as reading the newspaper or watching television?", name: "concentration", score: null },
        { text: "Been Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?", name: "restless", score: null },
        { text: "Had thoughts that you would be better off dead or of hurting yourself in some way?", name: "suicidal", score: null }
    ];
};

DepressionScore.prototype = {
    getScore: function(score) {
        for (var range in this.range) {
            if (score >= this.range[range][0] && score <= this.range[range][1]) {
                return range;
            }
        }

        throw "I couldn't find " + score + " in my range of values. Sorry";
    },

    setAnswer: function(i, value) {
        value = Math.max(0, Math.min(value, 3));
        this.questions[i].score = value;
    },

    sum: function() {
        return this.questions.map(function(question) {
            return question.score || 0;
        }).reduce(function(previous_score, current_score, i) {
            return previous_score + current_score;
        });
    },

    shouldSuggestTherapist: function(score) {
        return score >= this.range.moderate[0];
    },

    pretty: function(range) {
        return this.pretty_range[range];
    },

    getUnAnsweredQuestions: function() {
        return this.questions.filter(function(question) {
            return question.score === null;
        });
    }
};

module.exports = DepressionScore;