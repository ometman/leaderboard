const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VEMRQSS1ky8XccFz9bnA/scores/';

const recordedScores = async () => {
  let theScoreList;
  try {
    const response = await fetch(`${gameUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const scoreList = await response.json();
    theScoreList = scoreList.result;
  } catch (error) {
    theScoreList = [];
  }
  return theScoreList;
};

export default recordedScores;