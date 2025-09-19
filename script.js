// This code will run after the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIN PAGE LOGIC ---
    
    // Find the login form on the page
    const loginForm = document.getElementById('login-form');
    
    // Check if the login form exists before adding an event listener
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting the default way
            event.preventDefault(); 
            
            // Get the values from the input fields
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            // Simple check for username and password (you can change these)
            if (username === 'user' && password === 'pass') {
                // If correct, redirect to the profile page
                window.location.href = 'profile.html'; 
            } else {
                // If incorrect, show an error message
                errorMessage.textContent = 'Incorrect username or password. Please try again.';
                errorMessage.style.color = 'red';
            }
        });
    }


    // --- PROFILE PAGE LOGIC ---

    // Find the logout link on the page
    const logoutLink = document.getElementById('logout-link');

    // Check if the logout link exists
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            // Prevent the link from immediately navigating away
            event.preventDefault();

            // Show a confirmation dialog box
            const userConfirmed = confirm("Are you sure you want to logout?");

            // If the user clicks "OK", then go to the login page
            if (userConfirmed) {
                window.location.href = 'login.html';
            }
            // If they click "Cancel", do nothing.
        });
    }

});