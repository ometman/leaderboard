class ScoresStorage {
  static scoreStore = () => {
    let theScoreList;
    if (localStorage.getItem('scoreLists') === null) {
      theScoreList = [];
    } else {
      theScoreList = JSON.parse(localStorage.getItem('scoreLists'));
    }
    return theScoreList;
  }

  static scoreListLength = ScoresStorage.scoreStore().length;
}

export default ScoresStorage;