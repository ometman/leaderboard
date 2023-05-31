import ScoresClass from './scoresClass.js';

const displayScores = () => {
  const showScores = new ScoresClass();
  if (showScores.scoreListCount() >= 0) {
    showScores.displayScoreLists();
  }
};
export default displayScores;