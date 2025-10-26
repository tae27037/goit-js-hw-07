const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", function () {
  const name = textInput.value.trim();
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});
