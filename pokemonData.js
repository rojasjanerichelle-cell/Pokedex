// data/pokemonData.js - all Pokémon data is stored here (static, no API)
const art = (id) =>
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";

const pokemonData = [
  { id: 1, name: "Bulbasaur", type: "Grass", image: art(1), height: "0.7 m", weight: "6.9 kg", category: "Seed Pokémon",
    description: "A Grass and Poison type Pokémon. A plant bulb on its back grows with it.",
    stats: { hp: 45, attack: 49, defense: 49, speed: 45 } },
  { id: 4, name: "Charmander", type: "Fire", image: art(4), height: "0.6 m", weight: "8.5 kg", category: "Lizard Pokémon",
    description: "A Fire type Pokémon with a flame on its tail. The flame shows how healthy it is.",
    stats: { hp: 39, attack: 52, defense: 43, speed: 65 } },
  { id: 6, name: "Charizard", type: "Fire", image: art(6), height: "1.7 m", weight: "90.5 kg", category: "Flame Pokémon",
    description: "A Fire type Pokémon that soars through the sky and breathes intense flames.",
    stats: { hp: 78, attack: 84, defense: 78, speed: 100 } },
  { id: 7, name: "Squirtle", type: "Water", image: art(7), height: "0.5 m", weight: "9.0 kg", category: "Tiny Turtle Pokémon",
    description: "A Water type Pokémon that uses its shell for protection and shoots water.",
    stats: { hp: 44, attack: 48, defense: 65, speed: 43 } },
  { id: 25, name: "Pikachu", type: "Electric", image: art(25), height: "0.4 m", weight: "6.0 kg", category: "Mouse Pokémon",
    description: "An Electric type Pokémon that stores electricity in its cheeks.",
    stats: { hp: 35, attack: 55, defense: 40, speed: 90 } },
  { id: 39, name: "Jigglypuff", type: "Fairy", image: art(39), height: "0.5 m", weight: "5.5 kg", category: "Balloon Pokémon",
    description: "A Fairy type Pokémon whose song makes enemies fall asleep.",
    stats: { hp: 115, attack: 45, defense: 20, speed: 20 } },
  { id: 94, name: "Gengar", type: "Ghost", image: art(94), height: "1.5 m", weight: "40.5 kg", category: "Shadow Pokémon",
    description: "A Ghost type Pokémon that hides in shadows and loves to play tricks.",
    stats: { hp: 60, attack: 65, defense: 60, speed: 110 } },
  { id: 130, name: "Gyarados", type: "Water", image: art(130), height: "6.5 m", weight: "235 kg", category: "Atrocious Pokémon",
    description: "A Water type Pokémon with a violent temper and enormous power.",
    stats: { hp: 95, attack: 125, defense: 79, speed: 81 } },
  { id: 133, name: "Eevee", type: "Normal", image: art(133), height: "0.3 m", weight: "6.5 kg", category: "Evolution Pokémon",
    description: "A Normal type Pokémon that can evolve into many different forms.",
    stats: { hp: 55, attack: 55, defense: 50, speed: 55 } },
  { id: 143, name: "Snorlax", type: "Normal", image: art(143), height: "2.1 m", weight: "460 kg", category: "Sleeping Pokémon",
    description: "A Normal type Pokémon that eats a huge amount of food and sleeps all day.",
    stats: { hp: 160, attack: 110, defense: 65, speed: 30 } },
  { id: 149, name: "Dragonite", type: "Dragon", image: art(149), height: "2.2 m", weight: "210 kg", category: "Dragon Pokémon",
    description: "A kind Dragon type Pokémon that can fly around the world very fast.",
    stats: { hp: 91, attack: 134, defense: 95, speed: 80 } },
  { id: 150, name: "Mewtwo", type: "Psychic", image: art(150), height: "2.0 m", weight: "122 kg", category: "Genetic Pokémon",
    description: "A Psychic type Pokémon created by science with incredible mental power.",
    stats: { hp: 106, attack: 110, defense: 90, speed: 130 } },
];

// Counts how many different types exist in the data
function countTypes() {
  const found = [];
  for (let i = 0; i < pokemonData.length; i++) {
    if (found.indexOf(pokemonData[i].type) === -1) {
      found.push(pokemonData[i].type);
    }
  }
  return found.length;
}

export { pokemonData, countTypes };
