// Sets up all users score to be zero before starting the quiz questions
let finalScore = 0;

// Function will only run when the page is fully loaded
$(document).ready(function(){

//  Highlights the answer with a grey background color if incorrect and an orange background color if correct
    $(".quiz-btn").click(function() {
        if ($(this).hasClass('true')) {
            $(this).addClass('quiz-btn-correct');
        } else {
            $(this).addClass('quiz-btn-incorrect');
        }
    });

// create a function that either removes the other two answer once an answer has been selected, or locks in the answer once clicked
    

// Increments the users score by 1 each time they get a question correct 
    $('.true').click(function() {
        finalScore ++;
    });

// Show users score by removing the submit answer button and showing the users score and options to look at the answer or try again
    $("#submit-answers-btn").click(function() {
        $('.hide-btn').show();
        $(".results-btn").text(finalScore + ' out of 6');
        $(".answers-btn");
        $(".try-again-btn");
    });

    $("#submit-answers-btn").click(function() {
        $("#submit-answers-btn").remove();
    });
})

// $(".quiz-btn").click(function() {
    //     $(this).siblings.remove();
    // })

// $("#submit-answers-btn").click(function() {
//     $("#submit-answers-btn").text("hello");
// });

// $("#submit-answers-btn").click(function() {
//     $("#submit-answers-btn").remove();
// });


// $("#submit-answers-btn").click(function() {
//     $("#submit-answers-btn").remove();
//     $("#submit-answers-btn").add();
// });


