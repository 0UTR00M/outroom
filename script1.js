
  /*Define the correct password*/
  const correctPassword = "outroom22"; /*Change this to your desired password*/
  const form = document.getElementById("entrance-form");
  const errorMessage = document.getElementById("error-message");
  
  /*Add an event listener to the form*/
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const enteredPassword = document.getElementById("password").value;
  
    if (enteredPassword === correctPassword) {
      /*Redirect to the main page*/
      window.location.href = "index2.html"; // Replace with the actual URL of your main page
    } else {
      /* Display an error message*/
      errorMessage.textContent = "Incorrect password. Try again.";
    }
  });
 
  

  document.getElementById("submit-waitlist").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("waitlist-email").value.trim();
    let messageEl = document.getElementById("waitlist-message");

    /*Validation*/
    if (!name) {
        messageEl.textContent = "Please enter your nickname.";
        messageEl.style.color = "#f04e23";
        return;
    }
    if (!email || !email.includes("@")) {
        messageEl.textContent = "Please enter a valid email address.";
        messageEl.style.color = "#f04e23";
        return;
    }

    /*EmailJS Template Parameters*/
    const templateParams = {
        user_name: name,
        user_email: email
    };

    /* Send email via EmailJS*/
    emailjs.send("service_jww15id", "template_cv6hfwn", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            
            /*Show success message*/
            messageEl.textContent = "Thanks for joining the waitlist! We will send you an email soon!";
            messageEl.style.color = "#f04e23";

            /*Optional: Clear the form after success*/
            document.getElementById("name").value = "";
            document.getElementById("waitlist-email").value = "";

        }, function(error) {
            console.error("FAILED...", error);
            messageEl.textContent = "Something went wrong. Please try again.";
            messageEl.style.color = "red";
        });
});
  

/*EmailJS Template Parameters*/
const templateParams = {
  user_name: name,
  user_email: email
};

/* Send first email to yourself */
emailjs.send("service_jww15id", "template_cv6hfwn", templateParams)
  .then(function(response) {
      console.log("SUCCESS! Main email sent", response.status, response.text);

      /* Auto-reply to user */
      emailjs.send("service_jww15id", "template_v6dr2vw", templateParams)
          .then(function(reply) {
              console.log("Auto-reply sent!", reply.status, reply.text);
          }).catch(function(error) {
              console.error("Auto-reply failed", error);
          });

      /* Show success message */
      messageEl.textContent = "Thanks for joining the waitlist! We will send you an email soon!";
      messageEl.style.color = "#f04e23";

      /* Clear form */
      document.getElementById("name").value = "";
      document.getElementById("waitlist-email").value = "";

  }, function(error) {
      console.error("FAILED...", error);
      messageEl.textContent = "Something went wrong. Please try again.";
      messageEl.style.color = "red";
  });
