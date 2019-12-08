var quizCard = $('#quiz');
var countStart = 30;
//=====================================
var questions = {

    question1: {
        q: 'question1',
        a: ['a', 'b', 'c', 'd'],
        ca: 'b'
    },

    question2: {
        q: 'question2',
        a: ['a', 'b', 'c', 'd'],
        ca: 'a'
    },
    question3: {
        q: 'question3',
        a: ['a', 'b', 'c', 'd'],
        ca: 'b'
    },
    question4: {
        q: 'question4',
        a: ['a', 'b', 'c', 'd'],
        ca: 'c'
    },
    question5: {
        q: 'question5',
        a: ['a', 'b', 'c', 'd'],
        ca: 'd'
    }

};
//=====================================


var game = {
    questions: questions,
    counter: countStart,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,

    countdown: function(){
        this.counter--
        $('#timer').text(this.counter);
        if(this.counter === 0) {
            console.log('Times up!')
        }
    }
}