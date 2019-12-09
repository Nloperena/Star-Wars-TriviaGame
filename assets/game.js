

var quizCard = $('#quiz-card');
var countStart = 30;
//===========================================================================
//===========================================================================
// ca is an abreviation for correct answer
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
//===========================================================================
//===========================================================================
//===========================================================================


var game = {
    questions: questions,
    counter: countStart,
    questionIndex: 0,
    correct: 0,
    incorrect: 0,

    //===========================================================================

    loadQuestion: function () {
        timer = setInterval(this.countdown.bind(this), 1000);

        quizCard.html('<h3>' + questions[this.questionIndex].q + '</h3>');

        for(var i = 0; i < questions[this.questionIndex].a.length; i++) {
            quizCard.append('<button class ="btn-large" id = "button" data-name="' + questions[this.questionIndex].a[i] + '">' + questions[this.questionIndex].a[i] + '</button>');
        }
    },

    //===========================================================================

    countdown: function () {
        this.counter--
        $('#timer').text(this.counter);
        if (this.counter === 0) {
            console.log('Times up!')
            this.timeOut();

        }
    },

    //===========================================================================
    result: function () {
        clearInterval(window.timer);
        quizCard.html('<h4> Questions complete! </h4>');
        //need to make a function that appends the timer still
        $('#counter').text(this.counter)
        quizCard.append('<h3> Correct Answer is ' + this.ca + '</h3>')
        quizCard.append("<br><button id = 'start-over'> Start Over?</button>");
    },

    //============================================================================
    timeOut: function () {
        clearInterval(window.timer);
        quizCard.html('<h1> TIME OUT! </h1>');
        quizCard.append('<h2> The correct answer was: ' + questions[this.questionIndex].ca);

        if (this.questionIndex === questions.length - 1) {
            setTimeout(this.result, 3 * 1000);
        } else {
           
        }
    },
    
}


//===========================================================================
//===========================================================================
//===========================================================================
//GAME START
//===========================================================================
//===========================================================================
//===========================================================================


$(document).on('click', '#start-game', function () {
    $('#wrap').prepend('<h5>Time Remaining: <span id = "counter-number">30</span> Seconds</h5>')
    game.loadQuestion.bind(game);
})