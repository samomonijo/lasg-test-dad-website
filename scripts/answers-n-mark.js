// Answers checking:
let score = 0;
let remark = '';
let siteSection = true;

const navigatorElement = document.querySelector('nav');
const options = document.querySelectorAll('input');
const submitButtonElement = document.querySelector('.js-submit-button');

const answers = [
  'optionB', 
  'optionB', 
  'optionC',
  'optionB',
  'optionC',
  'optionC',
  'optionA',
  'optionB',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionC',
  'optionA',
  'optionA',
  'optionC',
  'optionA',
  'optionB',
  'optionA',
  'optionC',
  'optionB',
  'optionC',
  'optionD',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionA',
  'optionA',
  'optionD',
  'optionC',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionD',
  'optionA',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionA',
  'optionC',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionB',
  'optionC',
  'optionC',
  'optionB',
  'optionA', 
  'optionC',
  'optionC',
  'optionB',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionB',
  'optionA',
  'optionD',
  'optionC',
  'optionB',
  'optionC',
  'optionB',
  'optionB',
  'optionA',
  'optionB',
];

const submitTestFunction = () => {
  answers.forEach((answer, answerQuestionNo) => {
    const correctOption = document.getElementById(`ques${answerQuestionNo + 1}-${answer}`);

    if (correctOption.checked) {
      score++;
    }
    else {
      console.log(document.getElementById(`ques${answerQuestionNo + 1}-${answer}`));
    }
  });

  if (score === 52) {
    remark = 'Average';
  }
  else if (score > 52 && score < 90) {
    remark = 'Good';
  }
  else if (score >= 90) {
    remark = 'Excellent';
  }
  else {
    remark = 'Poor';
  }

  options.forEach((option, optionIndex) => {
    option.checked = false;
    localStorage.removeItem(`selectedOption${optionIndex + 1}`);
  });

  window.location.href = 'results.html';
  
  clearInterval(timerIntervalId);
  minutes = 45;
  seconds = 0;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = `0${seconds}`;
  localStorage.setItem('time', time.innerHTML);
  localStorage.setItem('score', JSON.stringify(score));
  localStorage.setItem('remark', remark);
};

navigatorElement.addEventListener('click', () => {
  if (siteSection) {
    navigatorElement.innerHTML = `
      <a href="#page-top">
        <img src="images/up-arrow.png" alt="Up">
      </a>
    `;

    siteSection = false;
  }
  else {
    navigatorElement.innerHTML = `
      <a href="#page-bottom">
        <img src="images/down-arrow.png" alt="Down">
      </a>
    `;

    siteSection = true;
  }
});

submitButtonElement.addEventListener('click', submitTestFunction);