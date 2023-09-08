let displayScreen = document.getElementById("display-screen");
let displayError = document.querySelector("#error-message");

function display(num) {
  displayScreen.value += num;
}

function Calculate() {
  if (displayScreen.value === "" || displayScreen.value === "Error") {
    displayScreen.value = "";
    clearError();
  } else {
    try {
      displayScreen.value = eval(displayScreen.value);
    } catch (err) {
      displayError.innerHTML = "SYNTAX ERROR";
      displayScreen.value = "";
    }
  }
}

function Clear() {
  displayScreen.value = "";
}

function del() {
  displayScreen.value = displayScreen.value.slice(0, -1);
}

function clearError() {
  displayError.innerHTML = "";
}
