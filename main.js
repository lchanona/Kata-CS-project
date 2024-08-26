// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the HTML elements
  const characterCatalog = document.getElementById('character-catalog');
  const filterType = document.getElementById('filter-type');
  const filterRegion = document.getElementById('filter-region');
  const filterAttribute = document.getElementById('filter-attribute');

  // Define a constructor function for Character objects
  function Character(name, type, region, attribute, image) {
    this.name = name;
    this.type = type;
    this.region = region;
    this.attribute = attribute;
    this.image = image;
  }

  // Define an array of Character objects
  const characters = [
    new Character('Link', 'Hylian', 'Hyrule', 'Courageous', 'assets/img/link.png'),
    new Character('Zelda', 'Hylian', 'Hyrule', 'Wise', 'assets/img/zelda.png'),
    new Character('Daruk', 'Goron', 'Goron City', 'Strong', 'assets/img/daruk.png'),
    new Character('Yunobo', 'Goron', 'Goron City', 'Timid', 'assets/img/yunobo.png'),
    new Character('Mipha', 'Zora', 'Zoras Domain', 'Compassionate', 'assets/img/mipha.png'),
    new Character('Sidon', 'Zora', 'Zoras Domain', 'Charismatic', 'assets/img/sidon.png'),
    new Character('Revali', 'Rito', 'Rito Village', 'Proud', 'assets/img/revali.png'),
    new Character('Kass', 'Rito', 'Rito Village', 'Musical', 'assets/img/kass.png'),
    new Character('Urbosa', 'Gerudo', 'Gerudo Town', 'Fierce', 'assets/img/urbosa.png'),
    new Character('Riju', 'Gerudo', 'Gerudo Town', 'Determined', 'assets/img/riju.png'),
    
    // Add more characters as needed
  ];

 // Function to display characters
function displayCharacters(data) {
  // Clear the character catalog element
  characterCatalog.innerHTML = '';

  // Loop through the data array and create character cards
  data.forEach(character => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="character-image">
      <h3>${character.name}</h3>
      <p>Type: ${character.type}</p>
      <p>Region: ${character.region}</p>
      <p>Attribute: ${character.attribute}</p>
    `;
    characterCatalog.appendChild(card);
  });
}

  // Initial display of only one character
  const initialCharacter = characters[0]; // Choose the first character as the initial display
  displayCharacters([initialCharacter]);

  // Function to filter characters based on user input
  function filterCharacters() {
    // Get the selected filter values
    const selectedType = filterType.value;
    const selectedRegion = filterRegion.value;
    const selectedAttribute = filterAttribute.value;

    // Initialize the filtered characters array
    let filteredCharacters = characters;

    // Filter characters by type
    if (selectedType && selectedType !== 'all') {
      filteredCharacters = filteredCharacters.filter(character => character.type === selectedType);
    }

    // Filter characters by region
    if (selectedRegion && selectedRegion !== 'all') {
      filteredCharacters = filteredCharacters.filter(character => character.region === selectedRegion);
    }

    // Filter characters by attribute
    if (selectedAttribute && selectedAttribute !== 'all') {
      filteredCharacters = filteredCharacters.filter(character => character.attribute === selectedAttribute);
    }

    // Display the filtered characters
    displayCharacters(filteredCharacters);
  }

  // Add event listeners to the filters
  filterType.addEventListener('change', filterCharacters);
  filterRegion.addEventListener('change', filterCharacters);
  filterAttribute.addEventListener('change', filterCharacters);
});