document.addEventListener("DOMContentLoaded", function () {
  function initializeQuantityControls(inputElement) {
    // Create decrement button
    const decrementBtn = document.createElement("span");
    decrementBtn.textContent = "-";
    decrementBtn.classList.add("quantity-controls");
    decrementBtn.classList.add("a2n_minus");
    decrementBtn.onclick = () => {
      if (inputElement.value > 0) {
        inputElement.value = parseInt(inputElement.value) - 1;
      }
    };

    // Create increment button
    const incrementBtn = document.createElement("span");
    incrementBtn.textContent = "+";
    incrementBtn.classList.add("quantity-controls");
    incrementBtn.classList.add("a2n_plus");
    incrementBtn.onclick = () => {
      inputElement.value = parseInt(inputElement.value) + 1;
    };

    // Insert buttons after the input
    inputElement.insertAdjacentElement("beforebegin", decrementBtn);
    inputElement.insertAdjacentElement("afterend", incrementBtn);
  }

  // Get all input elements with class .input-text
  const inputElements = document.querySelectorAll(
    "input[type='number'].input-text"
  );

  // Initialize quantity controls for each input
  inputElements.forEach((inputElement) => {
    initializeQuantityControls(inputElement);
  });
});
