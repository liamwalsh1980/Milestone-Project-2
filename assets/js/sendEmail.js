function sendMail (contactForm) {
    emailjs.send("service_vg5bikj","the_euro_football_quiz",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        });
        return false;
}

// Source of code from EmailJS using Email templates