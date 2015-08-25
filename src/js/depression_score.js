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
        { text: "Had little interest or pleasure in doing things?", name: "no_interest", score: 0 },
        { text: "Felt down, depressed, or hopeless?", name: "feeling_down", score: 0 },
        { text: "Had rouble falling or staying asleep, or sleeping too much?", name: "sleep", score: 0 },
        { text: "Felt tired or had little energy?", name: "no_energy", score: 0 },
        { text: "Experienced a poor appetite or overeating?", name: "appetite", score: 0 },
        { text: "Felt bad about yourself - or that you are a failure or have let yourself or your family down?", name: "self_esteem", score: 0 },
        { text: "Had trouble concentrating on things, such as reading the newspaper or watching television?", name: "concentration", score: 0 },
        { text: "Been Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?", name: "restless", score: 0 },
        { text: "Had thoughts that you would be better off dead, or of hurting yourself in some way?", name: "suicidal", score: 0 }
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
            return question.score;
        }).reduce(function(previous_score, current_score, i) {
            return previous_score + current_score;
        });
    },

    shouldSuggestTherapist: function(score) {
        return score >= this.range.moderate[0];
    },

    pretty: function(range) {
        return this.pretty_range[range];
    }
};

module.exports = DepressionScore;