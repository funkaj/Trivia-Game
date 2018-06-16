// document ready
$(document).ready(function () {
    var guessTimer = setInterval(function() {
        timerLoop()
        }, 1000);
    var timeLeft = 10;
    timerStop(guessTimer);
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
                }
            ],
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
                }
            ],
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
                }
            ],
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
                }
            ],
            image: "assets/images/protoMan.jpeg"
        },
        {
            question: "What is Mega-Man's sisters name?",
            answers: [{
                    name: "Roll",
                    isCorrect: 1
                },
                {
                    name: "Mega-Woman",
                    isCorrect: 0
                },
                {
                    name: "Robot-Girl",
                    isCorrect: 0
                },
                {
                    name: "Vicki",
                    isCorrect: 0
                }
            ],
            image: "assets/images/roll.jpeg"
        }
    ]

    
    // countdown timer needs to be fixed

    var timerLoop = function () {
        timeLeft--;
        console.log(timeLeft)
        document.getElementById("countdown").textContent = ' ' + timeLeft;
        if (timeLeft <= 0) {
            userWrong()
            console.log(`sub-zero ${timeLeft}`)
            resetTimer();
        }
    };

    //let tempQuestionArray = [];

    // while (tempQuestionArray.length < questions.length) {
    //     let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    //     if (!tempQuestionArray.includes(currentQuestion)) {
    //         tempQuestionArray.push(Number(currentQuestion));
    //     }
    // }
    //console.log(tempQuestionArray)
    //game function loops to get and display questions and user input start/end timer and redirect to win or lose function
    function resetTimer() {
        timeLeft = 10
    }
    
    function game() {
        resetTimer();
        guessTimer = setInterval(function() {
            timerLoop()
            }, 1000);
        $(".answers").empty()

        //tried creating an array so the questions are always in a different order. kept getting duplicates. this does too unfortunatly.
        let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        console.log(currentQuestion)
        $('.questions').text('Question: ' + currentQuestion.question)
        let questionAnswers = currentQuestion.answers

        for (var i = 0; i < currentQuestion.answers.length; i++) {

            let $validate = currentQuestion.answers[i].isCorrect
            console.log(`name ${currentQuestion.answers[i].name}, validate ${$validate}`)
            var displayAnswers = $('<div class="answers row"></div>')
            var answer = questionAnswers[i]
            var $newDivId = displayAnswers.append($(`<div class="btn col-12 mt-4" name="${currentQuestion.answers[i].name}" value="${$validate}">` + answer.name + `</div>`))
            $('#imageHolder').append(currentQuestion.image)
            $('#questionsField').append($newDivId)
        }
        
        $('.btn').on('click', function () {
            let guess = $(this).attr('value')
            if (guess > 0) {
                console.log('Finally!')
                userCorrect();
            } else {
                on()
                console.log('WRONG!')

                function correct() {
                    //highlight correct answer
                    userWrong();
                }
                setTimeout(correct, 4000);
            }
        })
        
    }

    function on() {
        document.getElementById("overlay").style.display = "block";
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
    }
    //new game function
    function newGame() {

        rightAnswers = 0
        wrongAnswers = 0
        $('#winScreen').hide()
        $('#statScreen').hide()
        $('.jumbotron').show()
        $('#timer').show()
        $('.questions').show()
        $('.answers').show()
        $('#questionsField').show()
        game()
    }
    //userCorrect function should hide other screens for a few seconds then load new game
    function userCorrect() {
        
        resetTimer()
        $('#questionsField').hide()
        rightAnswers++
        $('#rightAnswers').text(rightAnswers)
        $('#winScreen').show()
        $('.answers').remove()
        timerStop(guessTimer);
        if (rightAnswers + wrongAnswers < questions.length) {
            setTimeout(correct, 2000);
        } else {
            statScreen()
        }
    }
    function correct() {
                game()
                $('#winScreen').hide()
                $('#questionsField').show()
            }
    //userWrongTime function will display correct answer wait a few seconds and show next question
    function userWrong() {

        wrongAnswers++
        resetTimer()
        $('#wrongAnswers').text(wrongAnswers)
        $('.answers').remove()
        timerStop(guessTimer)
        if (rightAnswers + wrongAnswers < questions.length) {
            off()
            game()
        } else {
            off()
            statScreen()
        }
    }
    //function to display user stats when all questions are answered with a restart button

    function statScreen() {
        resetTimer()
        timerStop(guessTimer)
        $('#questionsField').hide()
        $('#winScreen').hide()
        $('#statScreen').show()
        $('#rightAnswers').text(rightAnswers)
        $('#wrongAnswers').text(wrongAnswers)
        $('#restart').on('click', function () {
            newGame()
        })
    }
function timerStop(t) {
    clearInterval(t);
    console.log(`Stop Timer`)
};

})