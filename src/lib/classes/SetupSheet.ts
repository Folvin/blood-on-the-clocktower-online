export class SetupSheet {
  townsfolks: number;
  outsiders: number;
  minions: number;
  demons: number;
  travellers: number;

  constructor(nOfPlayers: number) {
    let [townsfolks, outsiders, minions, demons, travellers] = getSetupNumbers(nOfPlayers);
    this.townsfolks = townsfolks;
    this.outsiders = outsiders;
    this.minions = minions;
    this.demons = demons;
    this.travellers = travellers;
  }
}

function getSetupNumbers(nOfPlayers: number) {
  if (nOfPlayers < 5) {
    return [0, 0, 0, 0, 0];
  }
  if (nOfPlayers < 7) {
    return nOfPlayers === 5 ? [3, 0, 1, 1, 0] : [3, 1, 1, 1, 0];
  } else {
    let setupNumbers = [5, 0, 1, 1, 0];
    let remainingPlayers = nOfPlayers - 7;
    if (remainingPlayers > 8) {
      setupNumbers[4] = remainingPlayers - 8;
      remainingPlayers = 8;
    }
    for (let i = remainingPlayers; i > 0; i--) {
      if (setupNumbers[1] < 2) {
        setupNumbers[1] += 1;
      } else {
        setupNumbers[1] = 0;
        setupNumbers[0] += 2;
        setupNumbers[2] += 1;
      }
    }

    return setupNumbers;
  }
}
