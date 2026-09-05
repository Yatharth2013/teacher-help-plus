// TeacherHelpPlus JavaScript

console.log("Welcome to TeacherHelpPlus! 🎓");

// Get Started button
const getStartedButton = document.querySelector(".nav-button");

getStartedButton.addEventListener("click", function () {
  document.querySelector("#tools").scrollIntoView({
    behavior: "smooth"
  });
});

// Tool buttons
const toolButtons = document.querySelectorAll(".tool-card button");

toolButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("🚀 This tool is coming soon!");
  });
});
