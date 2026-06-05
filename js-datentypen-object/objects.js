// Aufgabe 1:
const team = {
  name: "Dream Team",
  members: 5,
  scores: [10, 20, 30]
};
console.log(team);

// Aufgabe 2:
delete team.name;
console.log(team);

//Aufgabe 3:
team.city = "Berlin";
console.log(team);

// Aufgabe 4:
console.log(Object.keys(team).length);

// Aufgabe 5:
team.coach = { firstName: "Max", lastName: "Mustermann" };
console.log(team);

// Aufgabe 6:
console.log(team.coach.lastName);

// Aufgabe 7:
const fruit = { name: 'cherry', color: 'red' };
const embeddedObject = Object.assign( team, fruit);
console.log(embeddedObject);
