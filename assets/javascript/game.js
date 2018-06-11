// document ready
$(document).ready(function () {
    $('#timer').hide();
    $('#questionsField').hide();
    $('.questions').hide();
    $('.answers').hide();
    $('#winScreen').hide();
    $('#statScreen').hide();
    $('#instructions').on('click', function () {
        $('#instructions').hide();
        newGame();
    })
    // assign varibles 
    let rightAnswers = 0;
    let wrongAnswers = 0;

    // create object array of questions and answers
    let questions = [{
            question: "What was Mega-Man's original Japanese name?",
            answer: ["Rock-man", "Blue-Man", "Man-Man", "Zero"],
            correctAnswer: "Rock-Man",
            image: "assets/images/rockMan.jpeg"
        },
        {
            question: "Who is the creator of Mega-Man in the game story?",
            answer: ["Dr. Wily", "Dr. Who", "Dr. Strange", "Dr. Light"],
            correctAnswer: "Dr. Light",
            image: "assets/images/drLight.jpeg"
        },
        {
            question: "Who is Mega-Man trying to save the world from?",
            answer: ["Dr. Doom", "Dr. Wily", "Billy", "Dr. Evil"],
            correctAnswer: "Dr. Wily",
            image: "assets/images/drWily.jpeg"
        },
        {
            question: "Who is Mega-Man's brother?",
            answer: ["Proto-Man", "Zero", "Rush", "Astro-Boy"],
            correctAnswer: "Proto-Man",
            image: "assets/images/protoMan.jpeg"
        },
        {
            question: "What is Mega-Man's sisters name?",
            answer: ["Roll", "Mega-Woman", "Robot-Girl", "Vicki"],
            correctAnswer: "Roll",
            image: "assets/images/roll.jpeg"
        }
    ]

    let userAnswer = [];
    
    console.log(questions.question[0])
    //countdown timer
    function timer() {
        var timeleft = 10;
        var downloadTimer = setInterval(function () {
            timeleft--;
            document.getElementById("countdown").textContent = ' ' + timeleft;
            if (timeleft <= 0)
            clearInterval(downloadTimer)
        }, 1000);
    }
    //new game function
    function newGame() {
        $('#timer').show()
        $('.questions').show()
        $('.answers').show()
        $('#questionsField').show()
        timer()
        game()
    }
    //userCorrect function should hide other screens for a few seconds then load new game
    function userCorrect() {
        rightAnswers++
        countdownTimer = 0
        $('#winScreen').show()
        
    }
    //userWrongTime function will display correct answer wait a few seconds and show next question
    function userWrongTime() {
        countdownTimer = 0
        wrongAnswers++
        
    }
    //game function loops to get and display questions and user input start/end timer and redirect to win or lose function
    function game() {
        // for (var i = 0; i < questions.length; i++) {}
        $('.questions').text(questions[0].question)
        
    }

    //function to display user stats when all questions are answered with a restart button
    function statScreen() {
        $('#rightAnswers').text(rightAnswers)
        $('#wrongAnswers').text(wrongAnswers)
        $('#restart').on('click', function () {
            newGame()
        })
    }

})