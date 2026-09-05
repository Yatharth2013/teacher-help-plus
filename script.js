// TeacherHelpPlus JavaScript

console.log("Welcome to TeacherHelpPlus! 🎓");

// Get Started button
const getStartedButton = document.querySelector(".nav-button");

getStartedButton.addEventListener("click", function () {
  document.querySelector("#tools").scrollIntoView({
    behavior: "smooth"
  });
});

