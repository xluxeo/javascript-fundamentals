// Aufgabe 1:
const animals = ["dog", "cat", "fish"];
animals.forEach(animal => console.log(animal.toUpperCase()));

// Aufgabe 2:
for (let entry of animals) {
  console.log(entry.toLowerCase());
}

// Aufgabe 3:
for (let i = 15; i <= 25; i++) {
  console.log(i);
}

// Aufgabe 4:
const person = {
  name: 'Nelson',
  mail: 'nelson@neusta.de',
  age: 38
}
for (let i in person) {
  console.log(person[i]);
}

// Aufgabe 5:
for (let i = 0; i < animals.length - 1; i++) {
  console.log(animals[i]);
}
