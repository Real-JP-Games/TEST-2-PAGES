document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before adding event listeners

  var welcomeMessage = document.getElementById("welcome-message");
  var changeMessageBtn = document.getElementById("change-message-btn");

  if (changeMessageBtn) {
    changeMessageBtn.addEventListener("click", function () {
      // Change the welcome message when the button is clicked
      welcomeMessage.textContent = "Welcome to the Updated Test Page!";
    });
  }
});
