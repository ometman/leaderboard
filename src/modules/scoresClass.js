import ScoresStorage from './scoreStorage.js';

export default class ScoresClass {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addScore = (playname, playscore) => {
    const playScores = ScoresStorage.scoreStore();
    playScores.push({ name: playname, score: playscore });
    localStorage.setItem('scoreLists', JSON.stringify(playScores));
  }

  scoreListCount = () => {
    const playScoreLength = JSON.parse(localStorage.getItem('scoreLists')).length;
    return playScoreLength;
  }

  allScoreLists = () => {
    const playScores = JSON.parse(localStorage.getItem('scoreLists'));
    return playScores;
  }

  isEmptyList = () => this.allScoreLists === 0;

  displayScoreLists = () => {
    const displayContainer = document.querySelector('#display-container');
    displayContainer.innerHTML = '';
    const scoreLists = this.allScoreLists();
    scoreLists.forEach((score, scoreIndex) => {
      const displayScoreList = document.createElement('div');
      displayScoreList.classList = 'display-scores row pt-2';
      displayScoreList.id = 'display-scores';
      displayScoreList.innerHTML = `
      <p class="display-name col-4 card-text">${scoreLists[scoreIndex].name}</p>
      <p class="display-score col-8 card-text">${scoreLists[scoreIndex].score}</p>`;
      displayContainer.appendChild(displayScoreList);
    });
  }
}
