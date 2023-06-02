import ScoresClass from './scoresClass.js';
import displayScores from './showScores.js';

const addNewScore = () => {
  const newName = document.querySelector('#name-input');
  const newScore = document.querySelector('#score-input');
  const theForm = document.querySelector('#game-form');
  theForm.addEventListener('click', (e) => {
    e.preventDefault();
    const newScoreList = new ScoresClass();
    const playname = newName.value;
    const playscore = newScore.value;
    if (playname !== '' && playscore !== '') {
      newScoreList.addScore(playname, playscore);
      displayScores();
      theForm.reset();
    }
  });
};

export default addNewScore;