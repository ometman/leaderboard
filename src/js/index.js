// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import addNewScore from '../modules/addScore.js';
import allRecordedScores from '../modules/showAllScores.js';

// refresh scores page
const refreshBtn = document.querySelector('#score-refresh-btn');
refreshBtn.addEventListener('click', async () => {
  window.location.reload();
  allRecordedScores();
});

// showing the list of scores recorded
document.addEventListener('DOMContentLoaded', async (ev) => {
  ev.preventDefault();
  allRecordedScores();
});

// adding a score to the list of scores
addNewScore();

export default bootstrap;
