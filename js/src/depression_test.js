var DepressionTest = function() {
    this.range = {
        'none': [0, 4],
        'mild': [5, 9],
        'moderate': [10, 14],
        'moderately-severe': [15, 19],
        'severe': [20-27]
    };

    this.pretty_range = {
        'none': 'None',
        'mild': 'Mild',
        'moderate': 'Moderatge',
        'moderately-severe': 'Moderately Severe',
        'severe': 'Severe'
    };
};

DepressionTest.prototype = {
    score: function() {
        return 42;
    }
};

module.exports = DepressionTest;