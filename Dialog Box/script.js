document.addEventListener("DOMContentLoaded", function () {
  // Your code to get the dialog box and attach events
  var model = document.getElementById("dialog-box");
  // ... rest of your code
});

window.onclick = function (event) {
  if (!model.contains(event.target)) {
    model.style.display = "none";
  }
};
