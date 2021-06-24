function sendMail(contactForm) {
    // sets a new variable ready to use further down the code
    var modal = document.getElementById("modal");

    emailjs.send("gmail", "the_euro_football_quiz", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "feedback": contactForm.feedback.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Bespoke message to the user specifically to the 'name' of the user within the Modal
                $(".modal-message").text("Thank you for your feedback " + contactForm.name.value + ". We hope you enjoyed the quiz!");
                modal.style.display = "block";
                // reloads the form once the user clicks the close button in the Modal
                $("#closing-btn").click(function () {
                    location.reload();
                });
            },
            function (error) {
                console.log("FAILED", error);
                // Bespoke message to the user specifically to the 'name' of the user within the Modal
                $(".modal-message").text("Sorry " + contactForm.name.value + " something went wrong. Please try submitting your feedback again!");
                modal.style.display = "block";
                // reloads the form once the user clicks the close button in the Modal
                $("#closing-btn").click(function () {
                    location.reload();
                });
            });
    // Blocks the form from loading 
    return false;
}

// Source of code from EmailJS using Email templates. This enables all successful feedback forms to be sent as an email
// Used to source the code for reloading the form - https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery