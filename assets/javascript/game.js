// document ready
$(document).ready(function () {
    $('.jumbotron').hide();
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
        answers: [{
            name: "Rock-man",
            isCorrect: 1
        },
        {
            name: "Blue-Man",
            isCorrect: 0
        },
        {
            name: "Man-Man",
            isCorrect: 0
        },
        {
            name: "Zero",
            isCorrect: 0
        }],
        image: "assets/images/rockMan.jpeg"
    },
    {
        question: "Who is the creator of Mega-Man in the game story?",
        answers: [{
            name: "Dr. Wily",
            isCorrect: 0
        },
        {
            name: "Dr. Who",
            isCorrect: 0
        },
        {
            name: "Dr. Suess",
            isCorrect: 0
        },
        {
            name: "Dr. Light",
            isCorrect: 1
        }],
        image: "assets/images/drLight.jpeg"
    },
    {
        question: "Who is Mega-Man trying to save the world from?",
        answers: [{
            name: "Dr. Doom",
            isCorrect: 0
        },
        {
            name: "Dr. Wily",
            isCorrect: 1
        },
        {
            name: "Billy",
            isCorrect: 0
        },
        {
            name: "Dr. Evil",
            isCorrect: 0
        }],
        image: "assets/images/drWily.jpeg"
    },
    {
        question: "Who is Mega-Man's brother?",
        answers: [{
            name: "Proto-Man",
            isCorrect: 1
        },
        {
            name: "Zero",
            isCorrect: 0
        },
        {
            name: "Rush",
            isCorrect: 0
        },
        {
            name: "Astro-Boy",
            isCorrect: 0
        }],
        image: "assets/images/protoMan.jpeg"
    },
    {
        question: "What is Mega-Man's sisters name?",
        answers: [{
            name: "Roll",
            isCorrect: 0
        },
        {
            name: "Mega-Woman",
            isCorrect: 1
        },
        {
            name: "Robot-Girl",
            isCorrect: 1
        },
        {
            name: "Vicki",
            isCorrect: 1
        }],
        image: "assets/images/roll.jpeg"
    }]

    console.log(rightAnswers)
    console.log(wrongAnswers)

    //countdown timer
    function timer() {
        var timeLeft = 10;
        var guessTimer = setInterval(function () {
            timeLeft--;
            document.getElementById("countdown").textContent = ' ' + timeLeft;
            if (timeLeft <= 0) {
                clearInterval(guessTimer)
                userWrong()
                timeLeft = 10
            }

        }, 1000);

    }
    
    //game function loops to get and display questions and user input start/end timer and redirect to win or lose function
    function game() {
        let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        $('.questions').text('Question: ' + currentQuestion.question)
        let questionAnswers = currentQuestion.answers //loop?
        let newDivCounter = 1
        let results = []
        // questionAnswers.forEach(function (answer) {
        //     if (answer)
        //         results.push(answer)
        // })
        // console.log(results)

        for (var i = 0; i < questionAnswers.length; i++) {
            let $validate = currentQuestion.answers.isCorrect
            var displayAnswers = $('<div class="answers row"></div>')
            var answer = questionAnswers[i]
            var $newDivId = displayAnswers.append($(`<div class="btn col-12 mt-4" name="isCorrect${$validate}">` + answer.name + `</div>`))
            displayAnswers.attr("id", "newBtn" + newDivCounter++);
            $('#questionsField').append($newDivId)
      
        
            
        $('.btn').on('click', function () {
            
          let guess = document.getElementsByName('isCorrect')
            
                if (guess > 0) {
                    console.log('Finally!')
                    userCorrect();
                } else {
                    console.log('WRONG!')
                    userWrong();
                }
        })
    } 
        
    }

    //new game function
    function newGame() {
        $('.jumbotron').show()
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

        currentQuestion = []
        answer = []
        wrongAnswers++
        $('#wrongAnswers').text(wrongAnswers)
        $('.answers').remove()
        game()
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