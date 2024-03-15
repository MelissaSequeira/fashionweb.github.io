document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button element
    var submitButton = document.querySelector(".submit-btn");
    
    // Add event listener for click on the submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the current value of the email input field
        var emailtext = document.querySelector(".inform1").value;
        
        // Get the current value of the password input field
        var passtext = document.querySelector(".inform2").value;

        // Check if email and password are empty
        if (emailtext === "" && passtext === "") {
            // If both are empty, show alert
            alert("Please enter your email and password!");
        }
        else if(emailtext === "") {
            // If email is empty, show alert
            alert("Please enter your email!");
        }
        else if (passtext === "") {
            // If password is empty, show alert
            alert("Please enter your password!");
        }
        else {
            // Redirect to the specified URL
            window.location.href = "index.html"; 
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button element
    var submitButton = document.querySelector(".submit-btn");
    
    // Add event listener for click on the submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the current value of the email input field
        var emailtext = document.querySelector(".inform1").value;
        
        // Get the current value of the password input field
        var passtext = document.querySelector(".inform2").value;

        // Check if email and password are empty
        if (emailtext === "" && passtext === "") {
            // If both are empty, show alert
            alert("Please enter your email and password!");
        }
        else if(emailtext === "") {
            // If email is empty, show alert
            alert("Please enter your email!");
        }
        else if (passtext === "") {
            // If password is empty, show alert
            alert("Please enter your password!");
        }
        else {
            // Redirect to the specified URL
            window.location.href = "index.html"; 
        }
    });
});
