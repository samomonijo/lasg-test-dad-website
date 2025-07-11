const questionsDivElements = document.querySelectorAll('form');

questionsDivElements.forEach((ques, quesNo) => {
  const i = Number(localStorage.getItem(`selectedOption${quesNo + 1}`));
  const reloadOptionElements = document.querySelectorAll(`.ques${quesNo + 1} input`);
  const optionElements = document.querySelectorAll(`.ques${quesNo + 1} input`);

  optionElements.forEach((option, optionIndex) => {
    option.addEventListener('mouseenter', () => {
      if (optionElements[optionIndex].checked) {
        option.addEventListener('click', () => {
          optionElements[optionIndex].checked = false;
          localStorage.removeItem(`selectedOption${quesNo + 1}`);
        });
      }
      else {
        option.addEventListener('click', () => {
          optionElements[optionIndex].checked = true;
          let selectedOption;
          selectedOption = optionIndex + 1;
          localStorage.removeItem(`selectedOption${quesNo + 1}`);
          localStorage.setItem(`selectedOption${quesNo + 1}`, JSON.stringify(selectedOption));
        });
      }
    });
  });

  if (i) {
    reloadOptionElements[i - 1].checked = true;
  }
});