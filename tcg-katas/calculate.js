var players = [
  { name: "palesa", goals: 10 },
  { name: "Lerato", goals: 7 },
  { name: "Nj", goals: 0 },
];




const  calculateNumberOfGoals = (players) => {
      var totalGoals=0
    for (var i in players) {
      totalGoals= totalGoals+ players[i].goals
      console.log(players[i].goals)
    }
    return totalGoals;
  }
  
console.log(calculateNumberOfGoals(players));
