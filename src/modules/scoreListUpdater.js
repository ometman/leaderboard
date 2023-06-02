import scoreStore from './scoreStorage.js';

const updateScoreList = (scoreList) => {
  const scoreUpdate = scoreStore.push(scoreList);
  localStorage.setItem('scoreLists', JSON.stringify(scoreUpdate));
};
export default updateScoreList;