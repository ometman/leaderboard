const displayScores = async (theScore) => {
  const displayContainer = document.querySelector('#display-container');
  displayContainer.innerHTML = '';
  const displayScoreList = document.createElement('div');
  displayScoreList.classList = 'display-scores row pt-2';
  displayScoreList.id = 'display-scores';
  displayScoreList.id = 'display-scores';
  displayScoreList.innerHTML = `
  <p class="display-name col-12 card-text"> 
  ${theScore.user}, ${theScore.score} 
  successfully added. You may refresh to view all scores</p>
  `;
  displayContainer.appendChild(displayScoreList);
};

export default displayScores;