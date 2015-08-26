var Therapists = function() {
    this.selected_therapist = 1;

    this.therapists = [
        {
            name: 'Carol Spivack',
            specialties: 'Depression, Anxiety, Substance Abuse',
        },
        {
            name: 'Graham Chopin',
            specialties: 'Anxiety, ADHD, Family Issues',
        },
        {
            name: 'Boris Pittman',
            specialties: 'Depression, Anxiety, Eating Disorders'
        }
    ];
};

Therapists.prototype = {
    getTherapists: function() {
        return this.therapists;
    },

    getSelectedTherapist: function() {
        return this.therapists[this.selected_therapist];
    },

    setSelectedTherapist: function(index) {
        this.selected_therapist = index;
    }
};

module.exports = Therapists;