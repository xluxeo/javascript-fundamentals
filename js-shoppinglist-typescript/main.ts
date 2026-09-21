const button: HTMLButtonElement = document.querySelector('.c-button') as HTMLButtonElement;
const input: HTMLInputElement = document.querySelector('.c-input') as HTMLInputElement;
const list: HTMLUListElement = document.querySelector('#list') as HTMLUListElement;
const select: HTMLSelectElement = document.querySelector('.c-select') as HTMLSelectElement;

enum Category {
  Baumarkt = 'Baumarkt',
  Elektronik = 'Elektronik',
  Mode = 'Mode',
  Lebensmittel = 'Lebensmittel'
}

type ShoppingItem = {
  name: string;
  category?: Category;
}

function getCategory (value: string): Category | undefined {
  switch (value) {
    case Category.Baumarkt:
      return Category.Baumarkt;
    case Category.Elektronik:
      return Category.Elektronik;
    case Category.Mode:
      return Category.Mode;
    case Category.Lebensmittel:
      return Category.Lebensmittel;
    default:
      return undefined;
  }
}

button.addEventListener('click', (): void => {
  const itemText: string = input.value.trim();

  if (itemText === '') {
    alert('Bitte geben Sie einen Artikel ein!');
    return;
  }


  const newItem: ShoppingItem = {
    name: itemText,
    category: getCategory(select.value)
  };

  const listItem: HTMLLIElement = document.createElement('li');

  const displayCategory = newItem.category ? newItem.category : 'Keine Kategorie';
  listItem.textContent = `${newItem.name} (${displayCategory})`;

  list.appendChild(listItem);

  // Felder wieder leeren
  input.value = '';
  select.value = '';
});
