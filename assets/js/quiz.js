// Sets up all users score to be zero before starting the quiz questions
var finalScore = 0;

// Function will only run when the page is fully loaded
$(document).ready(function () {

    //  Highlights the answer with a grey background color if incorrect and an orange background color if correct
    $(".quiz-btn").click(function () {
        if ($(this).hasClass('true')) {
            $(this).addClass('quiz-btn-correct');
        } else {
            $(this).addClass('quiz-btn-incorrect');
        }
    });

    // Increments the users score by 1 each time they get a question correct 
    $('.true').click(function () {
        finalScore++;
    });

    // Show users score by removing the submit answer button and showing the users score and options to look at the answer or try again
    $("#submit-answers-btn").click(function () {
        $('.hide-btn').show();
        $(".results-btn").text(finalScore + ' out of 6');
        $(".answers-btn");
        $(".try-again-btn");
    });

    $("#submit-answers-btn").click(function () {
        $("#submit-answers-btn").remove();
    });

    // question 1 - removes 2 answers out of 3 when 1 answer is selected
    $("#q1a1").click(function () {
        $("#q1a2").remove();
        $("#q1a3").remove();
        $("#q1a1").css("margin-top","50px");
    });

    $("#q1a2").click(function () {
        $("#q1a1").remove();
        $("#q1a3").remove();
        $("#q1a2").css("margin-top","30px");
    });

    $("#q1a3").click(function () {
        $("#q1a1").remove();
        $("#q1a2").remove();
        $("#q1a3").css("margin-top","10px");
    });

    // question 2 - removes 2 answers out of 3 when 1 answer is selected
    $("#q2a1").click(function () {
        $("#q2a2").remove();
        $("#q2a3").remove();
        $("#q2a1").css("margin-top","50px");
    });

    $("#q2a2").click(function () {
        $("#q2a1").remove();
        $("#q2a3").remove();
        $("#q2a2").css("margin-top","30px");
    });

    $("#q2a3").click(function () {
        $("#q2a1").remove();
        $("#q2a2").remove();
        $("#q2a3").css("margin-top","10px");
    });

    // question 3 - removes 2 answers out of 3 when 1 answer is selected
    $("#q3a1").click(function () {
        $("#q3a2").remove();
        $("#q3a3").remove();
        $("#q3a1").css("margin-top","50px");
    });

    $("#q3a2").click(function () {
        $("#q3a1").remove();
        $("#q3a3").remove();
        $("#q3a2").css("margin-top","30px");
    });

    $("#q3a3").click(function () {
        $("#q3a1").remove();
        $("#q3a2").remove();
        $("#q3a3").css("margin-top","10px");
    });

    // question 4 - removes 2 answers out of 3 when 1 answer is selected
    $("#q4a1").click(function () {
        $("#q4a2").remove();
        $("#q4a3").remove();
        $("#q4a1").css("margin-top","50px");
    });

    $("#q4a2").click(function () {
        $("#q4a1").remove();
        $("#q4a3").remove();
        $("#q4a2").css("margin-top","30px");
    });

    $("#q4a3").click(function () {
        $("#q4a1").remove();
        $("#q4a2").remove();
        $("#q4a3").css("margin-top","10px");
    });

    // question 5 - removes 2 answers out of 3 when 1 answer is selected
    $("#q5a1").click(function () {
        $("#q5a2").remove();
        $("#q5a3").remove();
        $("#q5a1").css("margin-top","50px");
    });

    $("#q5a2").click(function () {
        $("#q5a1").remove();
        $("#q5a3").remove();
        $("#q5a2").css("margin-top","30px");
    });

    $("#q5a3").click(function () {
        $("#q5a1").remove();
        $("#q5a2").remove();
        $("#q5a3").css("margin-top","10px");
    });

    // question 6 - removes 2 answers out of 3 when 1 answer is selected
    $("#q6a1").click(function () {
        $("#q6a2").remove();
        $("#q6a3").remove();
        $("#q6a1").css("margin-top","50px");
    });

    $("#q6a2").click(function () {
        $("#q6a1").remove();
        $("#q6a3").remove();
        $("#q6a2").css("margin-top","30px");
    });

    $("#q6a3").click(function () {
        $("#q6a1").remove();
        $("#q6a2").remove();
        $("#q6a3").css("margin-top","10px");
    });
});