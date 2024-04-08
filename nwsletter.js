document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById("newsletterForm");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); //
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim(); // Trim the input value to remove whitespace

        if (email) {
            // Get existing emails from local storage 
            let emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

            // Check if the email is already subscribed
            if (!emails.includes(email)) {
                // Add the new email to the array
                emails.push(email);

                // Save the updated array 
                localStorage.setItem("newsletterEmails", JSON.stringify(emails));

                //
                alert("Thank you for subscribing to our newsletter!");
            } else {
               
                alert("You are already subscribed to our newsletter.");
            }

            // Clear the email input 
            emailInput.value = "";
        } else {
            // Email input is empty
            alert("Please enter a valid email address.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    
    if (userData && userData.username === "Kalhara") {
      
        const dashboardButton = document.getElementById("dashboardButton");

        
        dashboardButton.addEventListener("click", function() {
            
            window.location.href = "email.html";
        });
    }
});


// make the"view Dashboard" button functional

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    // Get a reference to the dashboard button
    const dashboardButton = document.getElementById("dashboardButton");

    
    if (userData && userData.username === "Kalhara") {
        // Show the dashboard button
        dashboardButton.style.display = "block";

        // Add an event listener to the button
        dashboardButton.addEventListener("click", function() {
            // Redirect to the dashboard page
            window.location.href = "email.html";
        });
    } else {
        // Hide the dashboard button
        dashboardButton.style.display = "none";
    }
});