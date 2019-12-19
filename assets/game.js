var card = $("#quiz-area");
var countStartNumber = 10;
var start = $('#start');
var questiondude = $('#question-holder');


// Question set
var questions = [{
  question: "Who is the main antagonist of Episode IV?",
  answers: ["Darth Maul", "Darth Vader", "Darth Jar Jar", "Luke Skywalker"],
  correctAnswer: "Darth Vader",
  image: "assets/images/Vadergiphy.gif"
}, {
  question: "Which Star Wars episode came out first?",
  answers: ["III", "V", "IV", "VI"],
  correctAnswer: "IV",
  image: "assets/images/Deathgiphy.gif"
}, {
  question: "What a Mandalorian?",
  answers: ["Merchant", "A mount", "Jedi", "Bounty Hunter"],
  correctAnswer: "Bounty Hunter",
  image: "assets/images/Boba.gif"
}, {
  question: "How old is baby Yoda?",
  answers: ["55-years-old", "500-years-old", "5-years-old", "50-years-old"],
  correctAnswer: "50-years-old",
  image: "assets/images/baby.gif"
}, {
  question: "Who created Star Wars?",
  answers: ["George Lucas", "Lucas Spookus", "JJ Abrams", "Jar Jar Binks"],
  correctAnswer: "George Lucas",
  image: "assets/images/lucas.gif"
}, {
  question: "What color lightsaber does Windu use?",
  answers: ["Purple", "Blue", "Black", "Red"],
  correctAnswer: "Purple",
  image: "assets/images/windu.gif"
}, {
  question: "Who is Han Solo's right hand man?",
  answers: ["Ed", "Mark", "Jerry", "Chewbacca"],
  correctAnswer: "Chewbacca",
  image: "assets/images/Chewygiphy.gif"
}, {
  question: "How long has yoda trained Jedi for?",
  answers: ["990 years", "90 years", "900 years", "9000 years"],
  correctAnswer: "900 years",
  image: "assets/images/yoda.gif"
}];

//===========================================================================
//===========================================================================
//===========================================================================
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {
    
    timer = setInterval(game.countdown, 1000);

    questiondude.html("<h6>" + questions[this.currentQuestion].question + "</h6>");

    start.remove();
    $('#container2').remove();
    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      questiondude.append("<a class='answer-button waves-effect waves-light purple btn ' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</a>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    questiondude.html("<h3>Out of Time!</h3>");
    questiondude.append("<h6>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    questiondude.append("<img id= 'gif' src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    questiondude.html("<h5>All done, heres how you did!</h5>");

    $("#counter-number").text(game.counter);

    questiondude.append("<p>Correct Answers: " + game.correct + "</p>");
    questiondude.append("<p>Incorrect Answers: " + game.incorrect + "</p>");
    questiondude.append("<p>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</p>");
    questiondude.append("<br><a class = 'btn green' id='start-over'>Start Over?</a>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    questiondude.html("<h5>Nope!</h5>");
    questiondude.append("<h6>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h6>");
    questiondude.append("<img id='gif' src='" + questions[game.currentQuestion].image + "' />");

    

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 8 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 8 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    questiondude.html("<h5>Correct!</h5>");
    questiondude.append("<img id='gif' src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 5 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 5 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h5>Time Remaining: <span id='counter-number'>10</span> Seconds</h5>");
  game.loadQuestion();
});
