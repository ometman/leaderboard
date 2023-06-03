import recordedScores from './getScore.js';

const allRecordedScores = async () => {
  const displayContainer = document.querySelector('#display-container');
  displayContainer.innerHTML = '';
  const theScores = await recordedScores();
  theScores.forEach((el, elIndex) => {
    const displayScoreList = document.createElement('div');
    displayScoreList.classList = 'display-scores row pt-0 ';
    displayScoreList.id = 'display-scores';
    displayScoreList.innerHTML = `
    <p class="display-name col-4 card-text">${theScores[elIndex].user}</p>
    <p class="display-score col-8 card-text">${theScores[elIndex].score}</p>
    `;
    displayContainer.appendChild(displayScoreList);
  });
};

export default allRecordedScores;