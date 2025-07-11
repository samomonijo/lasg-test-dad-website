const inputTabElements = document.querySelectorAll('.js-input-tab');

const submitButtonElement = document.querySelector('.js-submit-button');

let submit;

const submitDetailsFunction = () => {
  if (inputTabElements[0].value !== '' && inputTabElements[1].value !== '' && inputTabElements[2].value !== '') {
    inputTabElements.forEach(inputTabElement => {
      inputTabElement.value = '';
    });

    window.location.href = "test-website.html";
  }

  inputTabElements.forEach((inputTabElement, inputTabElementIndexNumber) => {
    const checkElement = document.querySelector(`.js-check-input-${inputTabElementIndexNumber}`);

    if (inputTabElement.value === '') {
      checkElement.innerHTML = 'Please fill out this field!';
    }
    else {
      checkElement.innerHTML = '';
    }
  });
}

submitButtonElement.addEventListener('click', submitDetailsFunction);

inputTabElements.forEach((inputTabElement, inputTabElementIndexNumber) => {
  inputTabElement.addEventListener('keydown', e => {
    if (e.key && e.key !== 'Shift' && e.key !== 'CapsLock' && e.key !== ' ') {
      document.querySelector(`.js-check-input-${inputTabElementIndexNumber}`).innerHTML = '';
    }

    if (e.key === 'Enter') {
      if (inputTabElements[0].value !== '' && inputTabElements[1].value !== '' && inputTabElements[2].value !== '' && submit === true) {
        submitDetailsFunction();
      } 
      else if (inputTabElementIndexNumber < 2) {
        inputTabElements[inputTabElementIndexNumber + 1].focus();
      }
      else if (inputTabElementIndexNumber === 2) {
        inputTabElements[0].focus();
      }

      if (inputTabElementIndexNumber === 1) {
        submit = true;
      }
      else {
        submit = false
      }
    }
  });
});