window.addEventListener("load", async () => {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
    const superHeroesData = await response.json();
    showSuperHeroes(superHeroesData);
  } catch (error) {
    console.error("Fehler beim Laden der Daten:", error);
  }
});

// Was im Browser angezeigt wird:
function showSuperHeroes(data) {
  const header = document.querySelector('header');
  const section = document.querySelector('section');

  const headline = document.createElement('h1');
  headline.textContent = data.squadName;
  header.appendChild(headline);

  const headerText = document.createElement('p');
  headerText.textContent = "Hometown: " + data.homeTown + " // " + "Formed: " + data.formed;
  header.appendChild(headerText);


  for (const hero of data.members) {
    createHeroBox(hero, section);
  }
}

// Erstellt eine Liste von Superkräften
function createPowerList(powers) {
  const list = document.createElement('ul');
  for (const power of powers) {
    const item = document.createElement('li');
    item.textContent = power;
    list.appendChild(item);
  }
  return list;
}

// Erstellt einzelne Hero-Boxen und werden in die section eingefügt
function createHeroBox(hero, section) {
  const box = document.createElement('div');
  box.classList.add('box');

  const heroName = document.createElement('h2');
  heroName.textContent = hero.name;
  box.appendChild(heroName);

  const heroIdentity = document.createElement('p');
  heroIdentity.textContent = "Secret Identity: " + hero.secretIdentity;
  box.appendChild(heroIdentity);

  const heroAge = document.createElement('p');
  heroAge.textContent = "Age: " + hero.age;
  box.appendChild(heroAge);

  const listTitle = document.createElement('p');
  listTitle.textContent = "Superpowers:";
  box.appendChild(listTitle);

  const list = createPowerList(hero.powers);
  box.appendChild(list);

  section.appendChild(box);
}
