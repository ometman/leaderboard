// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import addNewScore from '../modules/addScore.js';
// import ScoresClass from '../modules/scoresClass.js';
// import ScoresStorage from '../modules/scoreStorage.js'
import displayScores from '../modules/showScores.js';

// refresh scores page
const refreshBtn = document.querySelector('#score-refresh-btn');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

// adding a score to the list of scores
addNewScore();

// showing the list of scores recorded
displayScores();

export default bootstrap;
