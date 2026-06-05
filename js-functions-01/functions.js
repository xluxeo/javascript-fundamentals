//Gegeben ist folgender Code:
/*
const liste1Items = ['Hans', 'Peter', 'Ida', 'Klaus'];
const liste1 = document.createElement('ul');
const liste2Items = ['Georg', 'Andreas', 'Marcus', 'Dieter'];
const liste2 = document.createElement('ul');


const headline1 = document.createElement('h2');
headline1.append('Gruppe 1');
document.body.append(headline1);

liste1Items.forEach(item => {
  const listItem = document.createElement('li');
  listItem.innerText = item;
  liste1.append(listItem);
})

document.body.append(liste1);


const headline2 = document.createElement('h2');
headline2.append('Gruppe 2');
liste1.after(headline2);

liste2Items.forEach(item => {
  const listItem = document.createElement('li');
  listItem.innerText = item;
  liste2.append(listItem);
})

headline2.after(liste2);
*/

//refactored code

const liste1Items = ['Hans', 'Peter', 'Ida', 'Klaus'];
const liste2Items = ['Georg', 'Andreas', 'Marcus', 'Dieter'];

function createHeadline(text) {
  const headline = document.createElement('h2');
  headline.append(text);
  return headline;
}

function createCompleteList(listItems) {
  const list = document.createElement('ul');
  listItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    list.append(listItem);
  })
  return list;
}


document.body.append(createHeadline("Gruppe 1"));
document.body.append(createCompleteList(liste1Items));
document.body.append(createHeadline("Gruppe 2"));
document.body.append(createCompleteList(liste2Items));
