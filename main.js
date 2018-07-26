//Interval Timer
var timeIntervalUp;

function startTimer(){ 
          timeIntervalUp = setInterval(function(){countTimer()}, 1000);
}
function countTimer() {
        document.getElementById("intervalTimer").innerHTML("Time Remaining: " + secondsDown);
        secondsDown--;
        
         if (secondsDown == 0) {
            clearInterval(timeIntervalUp);
            endTimer();
            reload();
        }
    }
    $("#startTimer").on("click", function() {
        startTimer();
        countTimer();
    });


//User Input
function submitAnswers() {
    var total = 10;
    var score = 0;

    //Get User response
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;

//Loop thru every question to-
    for (i = 1; i <= total; i++) {
//Get the users response- Then if they are correct or not
     //Check that each question has been answered and none were missed
        if ((eval('q' + i) == null) || (eval('q' + i) === ' ')) {
            alert('Opps! You missed Question ' + i);
            return false;
        }
    }



//Set correct Answers
    var answers = ["c", "a", "b", "a", "a", "b", "c", "c", "d", "c"];

//Loop thru all the Questions inside of the array
    //Check Answers
for (i = 1; i <= 10; i++) {
            if (eval('q' + i) == answers[i - 1]) {
                score++;
            }
        }
//Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span</h3>';
//Tell them if they were right or wrong
    console.log('You scored ' + score + ' out of ' + total);

    return false;
}








//Ask each Question individually







