var questions = [{
	question: "What is Doug's last name?",
	choices: ["Funnie", "Skeeter", "Johnson", "Smith"],
	correctAnswer: "Funnie",
}, {
	question: "What song do Ren and Stimpy sing to make people more cheerful?",
	choices: ["Cheery puppy", "Happy Happy Joy Joy", "Fun Fun Cheer Smile", "Happy Joy"],
	correctAnswer: "Happy Happy Joy Joy",
}, {
	question: "What kind of animal is Rocko (from Rocko's Modern Life)?",
	choices: ["Mongoose", "Dog", "Wallaby", "Cow"],
	correctAnswer: "Wallaby",
}, {
	question: "What do Pinky and the Brain try to do during every episode?",
	choices: ["Escape from their cage.", "Trap the house cat.", "Conquer the world.", "Take over the world."],
	correctAnswer: "Take over the world.",
}, {
	question: "In Dexter's Laboratory, what is Dexter's sister's name?",
	choices: ["Deedee", "Dolly", "Dorothy", "Dee"],
	correctAnswer: "Deedee",
}, {
	question: "In Arthur, what does the main character's little sister's initials (D.W.) stand for?",
	choices: ["Daisy Water", "Dorothy Whitny", "Dora Winifred", "Diana White"],
	correctAnswer: "Dora Winifred",
}, {
	question: "In the Angry Beavers, which brother is named Norbert?",
	choices: ["The beaver with darker fur", "the beaver with lighter fur", "no brother is named Norbert", "the beaver with white stripes"],
	correctAnswer: "the beaver with lighter fur",
}, {
	question: "What TV network did Johnny Bravo first air on?",
	choices: ["Cartoon Network", "Nickelodeon", "PBS Kids", "Disney"],
	correctAnswer: "Cartoon Network",
}, {
	question: "What South Park character is most prone to injury and/or death?",
	choices: ["Butter", "Kenny", "Kyle", "Timmy"],
	correctAnswer: "Kenny",
}, {
	question: "Who created the Powerpuff Girls?",
	choices: ["Professor Utonium", "Professur Mercurium", "Professor Plutonium", "Professor x"],
	correctAnswer: "Professor Utonium",
}];


var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 60;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};



   










