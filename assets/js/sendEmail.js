function sendMail (contactForm) {
    emailjs.send("service_vg5bikj","the_euro_football_quiz",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $(".modal-message").text("Thank you for your feedback " + contactForm.name.value +". We hope you enjoyed the quiz");
            $("#closing-btn").click(function() {
                location.reload();
            });
        },
        function (error) {
            console.log("FAILED", error);
        });
        return false;
}

// Source of code from EmailJS using Email templates
// Testing completed as credit limited reached for monthly - see README for more information