import displayScores from './showNewScore.js';
import postNewScore from './postScore.js';

const addNewScore = () => {
  const theForm = document.querySelector('#game-form');
  theForm.addEventListener('click', async (e) => {
    e.preventDefault();
    const playname = document.querySelector('#name-input').value;
    const playscore = document.querySelector('#score-input').value;
    if (playname !== '' && playscore !== '') {
      await postNewScore({ user: playname, score: playscore });
      displayScores({ user: playname, score: playscore });
      theForm.reset();
    }
  });
};

export default addNewScore;