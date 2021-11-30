const message = "Thank you and see you later!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
