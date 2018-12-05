// document ready
$(document).ready(function () {

    let guessTimer;
    let timeLeft;

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
            question: "What is Mega-Mans weapon called?",
            answers: [{
                    name: "Buster-Gun",
                    isCorrect: 0
                },
                {
                    name: "Mega-Gun",
                    isCorrect: 0
                },
                {
                    name: "Mega-Buster",
                    isCorrect: 1
                },
                {
                    name: "Mega-Blaster",
                    isCorrect: 0
                }
            ],
            image: "assets/images/rockMan.jpeg"
        },
        {
            question: "What was Mega-Mans original function?",
            answers: [{
                    name: "Industrial robot",
                    isCorrect: 0
                },
                {
                    name: "Bad-ass",
                    isCorrect: 0
                },
                {
                    name: "Police robot",
                    isCorrect: 0
                },
                {
                    name: "Household robot",
                    isCorrect: 1
                }
            ],
            image: "assets/images/rockMan.jpeg"
        },
        {
            question: "Which one of these Robot Bosses is from Mega-Man 1?",
            answers: [{
                    name: "Snake-Man",
                    isCorrect: 0
                },
                {
                    name: "Splash-Woman",
                    isCorrect: 0
                },
                {
                    name: "Guts-Man",
                    isCorrect: 1
                },
                {
                    name: "Metal-Man",
                    isCorrect: 0
                }
            ],
            image: "assets/images/rockMan.jpeg"
        },
        {
            question: "How many Robot bosses are in Mega-Man 2?",
            answers: [{
                    name: "8",
                    isCorrect: 0
                },
                {
                    name: "6",
                    isCorrect: 1
                },
                {
                    name: "4",
                    isCorrect: 0
                },
                {
                    name: "1,000",
                    isCorrect: 0
                }
            ],
            image: "assets/images/rockMan.jpeg"
        },
        {
            question: "What is Mega-Mans' nickname?",
            answers: [{
                    name: "Robot Guy",
                    isCorrect: 0
                },
                {
                    name: "Blue",
                    isCorrect: 0
                },
                {
                    name: "Awesome Robot Dude",
                    isCorrect: 0
                },
                {
                    name: "The Blue Bomber",
                    isCorrect: 1
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

    let timerLoop = function () {
        timeLeft--;
        console.log(timeLeft)
        $("#countdown").html(' ' + timeLeft);
        if (timeLeft === 0) {
            userWrong()
            console.log(`sub-zero ${timeLeft}`)
        }
    };
    //game function loops to get and display questions and user input start/end timer and redirect to win or lose function
    function resetTimer() {
        timeLeft = 10
    }

    function game() {
        // resetTimer()
        // guessTimer = setInterval(function () {
        //     timerLoop()
        // }, 1000);

        $(".answers").empty()

        //tried creating an array so the questions are always in a different order. kept getting duplicates. this does too unfortunatly.
        let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        console.log(currentQuestion)
        $('.questions').text('Question: ' + currentQuestion.question)
        let questionAnswers = currentQuestion.answers
        //grab answers from question array, create and place in divs
        for (let i = 0; i < currentQuestion.answers.length; i++) {
            let $validate = currentQuestion.answers[i].isCorrect
            let displayAnswers = $('<div class="answers row"></div>')
            let answer = questionAnswers[i]
            let $newDivId = displayAnswers.append($(`<div class="btn col-12 mt-4" name="${currentQuestion.answers[i].name}" value="${$validate}">` + answer.name + `</div>`))
            $('#questionsField').append($newDivId)
        }

        $('.btn').on('click', function () {
            let guess = $(this).attr('value')
            if (guess > 0) {
                console.log('Finally!')
                userCorrect();
            } else {
                userWrong();
                console.log('WRONG!')
            }
        })
    }

    function on() {
        document.getElementById("overlay").style.display = "block";
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
    }

    //userCorrect function should hide other screens for a few seconds then load new game
    function userCorrect() {
        $('#questionsField').hide()
        rightAnswers++
        $('#rightAnswers').text(rightAnswers)
        $('#winScreen').show()
        $('.answers').remove()
        timerStop();
        if (rightAnswers + wrongAnswers < 5) {
            setTimeout(correct, 5000);
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
        on()
        wrongAnswers++
        $('#wrongAnswers').text(wrongAnswers)
        timerStop()
        function questionsLeft() {
            // needs to highlight correct answer
            if (rightAnswers + wrongAnswers < 5) {
                $('.answers').remove()
                off()
                game()
            } else {
                off()
                statScreen()
            }
        }
        setTimeout(questionsLeft, 1000);
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
    //function to display user stats when all questions are answered with a restart button
    function statScreen() {
        $('#questionsField').hide()
        $('#winScreen').hide()
        $('#statScreen').show()
        $('#rightAnswers').text(rightAnswers)
        $('#wrongAnswers').text(wrongAnswers)
        $('#restart').on('click', function () {
            timerStop(guessTimer)
            newGame()
        })
    }
    // function to clear guesstimer interval
    function timerStop() {
        clearInterval(guessTimer);
        console.log(`Stop Timer`)
    };
})