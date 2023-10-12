function handleSubmit(event) {
  event.preventDefault();

  const textInput = document.getElementById("textInput").value;
  const numberInput = document.getElementById("numberInput").value;
  const rangeInput = document.getElementById("rangeInput").value;
  const dateInput = document.getElementById("dateInput").value;
  const emailInput = document.getElementById("emailInput").value;
  const passwordInput = document.getElementById("passwordInput").value;
  const humanInput = document.querySelector('input[name="radioInput"]:checked');

  document.getElementById("textResult").textContent = textInput;
  document.getElementById("numberResult").textContent = numberInput;
  document.getElementById("rangeResult").textContent = rangeInput;
  document.getElementById("dateResult").textContent = dateInput;
  document.getElementById("emailResult").textContent = emailInput;
  document.getElementById("passwordResult").textContent = passwordInput;
  document.getElementById("humanResult").textContent = humanInput ? (humanInput.value ? "like a human" : "a human") : "not a human";
}

const form = document.getElementById("manyInputsForm");
form.addEventListener("submit", handleSubmit);
