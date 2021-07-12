const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", (event) => {
  event.currentTarget.value.trim() 
  ? refs.outputEl.textContent = event.currentTarget.value
  : refs.outputEl.textContent = 'незнакомец';
});


