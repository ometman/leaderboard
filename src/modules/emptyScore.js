const emptyScoreAlert = (alertmsg, alertcolor) => {
  const alertBox = document.createElement('div');
  alertBox.className = `alert ${alertcolor}`;
  alertBox.appendChild(document.createTextNode(alertmsg));
  const submitScore = document.querySelector('.submit-score');
  submitScore.insertAdjacentElement('beforebegin', alertBox);
  setTimeout(() => alertBox.remove(), 1000);
};

export default emptyScoreAlert;