let finalScore = 0;

$(document).ready(function(){
    $(".quiz-btn").click(function() {
        if ($(this).hasClass('true')) {
            $(this).addClass('quiz-btn-correct');
        } else {
            $(this).addClass('quiz-btn-correct');
        }
    });

    $('.true').one('click', function() {
        finalScore ++;
    });

    $("#submit-answers-btn").click(function() {
        $("#submit-answers-btn").text('Your score is: ' + finalScore + ' out of 6');
    });


    // $('.quiz-btn').click(function() {
    //     $(this).siblings.remove();
    // })


    
    
})


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


