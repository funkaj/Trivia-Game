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
        answer: ["Dr. Wily", "Dr. Who", "Dr. Suess", "Dr. Light"],
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

    console.log(rightAnswers)
    console.log(wrongAnswers)

    //countdown timer
    function timer() {  
        var timeLeft = 10;
         
        var guessTimer = setInterval(function () {
            timeLeft--;
            document.getElementById("countdown").textContent = ' ' + timeLeft;
            if (timeLeft <= 0) {
                console.log('timeLeft')
                clearInterval(guessTimer)
                userWrong() 
                timeLeft=10
            }
            
        }, 1000);
        
    }
    //new game function
    function newGame() {
        console.log('newGame activated')
        $('#timer').show()
        $('.questions').show()
        $('.answers').show()
        $('#questionsField').show() 
        game()
    }
    //userCorrect function should hide other screens for a few seconds then load new game
    function userCorrect() {
        currentQuestion = []
        answer = []
        rightAnswers++
        $('#rightAnswers').text(rightAnswers)
        $('#questionField').hide()
        $('#winScreen').show()
        $('.answers').remove()
        game()
    }
    //userWrongTime function will display correct answer wait a few seconds and show next question
    function userWrong() {
        console.log('userWrong activated')
        currentQuestion = []
        answer = []
        wrongAnswers++
        $('#wrongAnswers').text(wrongAnswers)
        $('.answers').remove()
        game()
    }
    //game function loops to get and display questions and user input start/end timer and redirect to win or lose function
    function game() {
        console.log('game activated') 
        timer()
        var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        $('.questions').text('Question: ' + currentQuestion.question)
        console.log(currentQuestion.question)
        // console.log(currentQuestion.correctAnswer)
        var questionsAnswer = currentQuestion.answer
        var newDivCounter = 1
        
        for (var i = 0; i < questionsAnswer.length; i++) {
            var displayAnswers = $('<div class="answers"></div>')
            var answer = currentQuestion.correctAnswer
            var $newDivId = displayAnswers.append($('<div class="btn">' + questionsAnswer[i] + '</div>'))
            displayAnswers.attr("id", "newBtn" + newDivCounter++);
            $('#questionsField').append($newDivId)
            // console.log(questionsAnswer)
            console.log(answer)
        }
        $('#newBtn1').on('click', function () {
            if (questionsAnswer == answer) {
                console.log('Correct!')
                userWin();
            } else {
                userWrong();
            }
        })
        $('#newBtn2').on('click', function () {
            if (questionsAnswer == answer) {
                console.log('Correct!')
                 userWin();
             } else {
                 userWrong();
             }
         })
         $('#newBtn3').on('click', function () {
             if (questionsAnswer == answer) {
                console.log('Correct!')
                 userWin();
             } else {
                 userWrong();
             }
         })
         $('#newBtn4').on('click', function () {
            
             if (questionsAnswer == answer) {
                console.log('Correct!')
                 userWin();
             } else {
                 userWrong();
             }
         })
        
        // $('.btn').on('click', function (e) {
        //     console.log("One of the buttons was pushed")
        //     var answer = currentQuestion.correctAnswer
        //     console.log("this is the " + answer)
        //     if (e == "#newBtn1") {
        //         console.log('Correct!')
        //         userCorrect()

        //     }
        //     else {
        //         console.log('Wrong!')
        //         userWrong()
        //     }
        // })
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