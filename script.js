document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before adding event listeners

  var changeMessageBtn = document.getElementById("change-message-btn");

  if (changeMessageBtn) {
    changeMessageBtn.addEventListener("click", function () {
      // Navigate to the "second-page.html" file when the button is clicked
      window.location.href = "second-page.html";
    });
  }
});
