// data/pokemonData.js - all Pokémon data is stored here (static, no API)
const art = (id) =>
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";

// Small helper so each Pokémon fits on a few lines
function make(id, name, type, height, weight, category, abilities, description, hp, attack, defense, speed) {
  return { id, name, type, image: art(id), height, weight, category, abilities, description, stats: { hp, attack, defense, speed } };
}

const pokemonData = [
  make(1, "Bulbasaur", "Grass", "0.7 m", "6.9 kg", "Seed Pokémon", ["Overgrow", "Chlorophyll"], "A Grass and Poison type Pokémon. A plant bulb on its back grows with it.", 45, 49, 49, 45),
  make(2, "Ivysaur", "Grass", "1.0 m", "13.0 kg", "Seed Pokémon", ["Overgrow", "Chlorophyll"], "The bulb on its back grows large and it starts to walk on two legs.", 60, 62, 63, 60),
  make(3, "Venusaur", "Grass", "2.0 m", "100 kg", "Seed Pokémon", ["Overgrow", "Chlorophyll"], "A large flower on its back soaks up the sun's energy.", 80, 82, 83, 80),
  make(4, "Charmander", "Fire", "0.6 m", "8.5 kg", "Lizard Pokémon", ["Blaze", "Solar Power"], "A Fire type Pokémon with a flame on its tail. The flame shows how healthy it is.", 39, 52, 43, 65),
  make(5, "Charmeleon", "Fire", "1.1 m", "19.0 kg", "Flame Pokémon", ["Blaze", "Solar Power"], "A hot-tempered Pokémon that lashes out with its sharp claws.", 58, 64, 58, 80),
  make(6, "Charizard", "Fire", "1.7 m", "90.5 kg", "Flame Pokémon", ["Blaze", "Solar Power"], "A Fire type Pokémon that soars through the sky and breathes intense flames.", 78, 84, 78, 100),
  make(7, "Squirtle", "Water", "0.5 m", "9.0 kg", "Tiny Turtle Pokémon", ["Torrent", "Rain Dish"], "A Water type Pokémon that uses its shell for protection and shoots water.", 44, 48, 65, 43),
  make(8, "Wartortle", "Water", "1.0 m", "22.5 kg", "Turtle Pokémon", ["Torrent", "Rain Dish"], "Its furry tail is a symbol of long life and is very popular.", 59, 63, 80, 58),
  make(9, "Blastoise", "Water", "1.6 m", "85.5 kg", "Shellfish Pokémon", ["Torrent", "Rain Dish"], "A Water type Pokémon with powerful cannons on its shell.", 79, 83, 100, 78),
  make(10, "Caterpie", "Bug", "0.3 m", "2.9 kg", "Worm Pokémon", ["Shield Dust", "Run Away"], "A Bug type Pokémon that eats leaves and grows very quickly.", 45, 30, 35, 45),
  make(11, "Metapod", "Bug", "0.7 m", "9.9 kg", "Cocoon Pokémon", ["Shed Skin"], "It hardens its shell and waits patiently to evolve into a butterfly.", 50, 20, 55, 30),
  make(12, "Butterfree", "Bug", "1.1 m", "32 kg", "Butterfly Pokémon", ["Compound Eyes", "Tinted Lens"], "A graceful Bug type Pokémon that scatters powder from its wings.", 60, 45, 50, 70),
  make(25, "Pikachu", "Electric", "0.4 m", "6.0 kg", "Mouse Pokémon", ["Static", "Lightning Rod"], "An Electric type Pokémon that stores electricity in its cheeks.", 35, 55, 40, 90),
  make(26, "Raichu", "Electric", "0.8 m", "30.0 kg", "Mouse Pokémon", ["Static", "Lightning Rod"], "An Electric type Pokémon that can release a powerful electric shock.", 60, 90, 55, 110),
  make(39, "Jigglypuff", "Fairy", "0.5 m", "5.5 kg", "Balloon Pokémon", ["Cute Charm", "Competitive"], "A Fairy type Pokémon whose song makes enemies fall asleep.", 115, 45, 20, 20),
  make(40, "Wigglytuff", "Fairy", "1.0 m", "12.0 kg", "Balloon Pokémon", ["Cute Charm", "Competitive"], "Its fur is so soft and fluffy that people love to hug it.", 140, 70, 45, 45),
  make(54, "Psyduck", "Water", "0.8 m", "19.6 kg", "Duck Pokémon", ["Damp", "Cloud Nine"], "A Water type Pokémon that is always troubled by headaches.", 50, 52, 48, 55),
  make(55, "Golduck", "Water", "1.7 m", "76.6 kg", "Duck Pokémon", ["Damp", "Cloud Nine"], "A fast swimmer that uses its webbed limbs to glide through water.", 80, 82, 78, 85),
  make(58, "Growlithe", "Fire", "0.7 m", "19.0 kg", "Puppy Pokémon", ["Intimidate", "Flash Fire"], "A brave and friendly Fire type Pokémon that protects its trainer.", 55, 70, 45, 60),
  make(59, "Arcanine", "Fire", "1.9 m", "155 kg", "Legendary Pokémon", ["Intimidate", "Flash Fire"], "A Fire type Pokémon known for its speed and loyalty.", 90, 110, 80, 95),
  make(63, "Abra", "Psychic", "0.9 m", "19.5 kg", "Psi Pokémon", ["Synchronize", "Inner Focus"], "It sleeps for most of the day and teleports to stay safe.", 25, 20, 15, 90),
  make(64, "Kadabra", "Psychic", "1.3 m", "56.5 kg", "Psi Pokémon", ["Synchronize", "Inner Focus"], "It emits powerful psychic waves and carries a silver spoon.", 40, 35, 30, 105),
  make(65, "Alakazam", "Psychic", "1.5 m", "48 kg", "Psi Pokémon", ["Synchronize", "Inner Focus"], "A Psychic type Pokémon with an extremely high intelligence.", 55, 50, 45, 120),
  make(66, "Machop", "Fighting", "0.8 m", "19.5 kg", "Superpower Pokémon", ["Guts", "No Guard"], "A small Pokémon that loves to train its muscles every day.", 70, 80, 50, 35),
  make(67, "Machoke", "Fighting", "1.5 m", "70.5 kg", "Superpower Pokémon", ["Guts", "No Guard"], "It wears a belt that keeps its enormous power under control.", 80, 100, 70, 45),
  make(68, "Machamp", "Fighting", "1.6 m", "130 kg", "Superpower Pokémon", ["Guts", "No Guard"], "A Fighting type Pokémon that can throw many punches in a second.", 90, 130, 80, 55),
  make(92, "Gastly", "Ghost", "1.3 m", "0.1 kg", "Gas Pokémon", ["Levitate"], "A Ghost type Pokémon made almost entirely of gas.", 30, 35, 30, 80),
  make(93, "Haunter", "Ghost", "1.6 m", "0.1 kg", "Gas Pokémon", ["Levitate"], "It likes to hide in the dark and surprise people.", 45, 50, 45, 95),
  make(94, "Gengar", "Ghost", "1.5 m", "40.5 kg", "Shadow Pokémon", ["Cursed Body"], "A Ghost type Pokémon that hides in shadows and loves to play tricks.", 60, 65, 60, 110),
  make(129, "Magikarp", "Water", "0.9 m", "10 kg", "Fish Pokémon", ["Swift Swim"], "A Water type Pokémon that is weak, but it evolves into something mighty.", 20, 10, 55, 80),
  make(130, "Gyarados", "Water", "6.5 m", "235 kg", "Atrocious Pokémon", ["Intimidate", "Moxie"], "A Water type Pokémon with a violent temper and enormous power.", 95, 125, 79, 81),
  make(133, "Eevee", "Normal", "0.3 m", "6.5 kg", "Evolution Pokémon", ["Run Away", "Adaptability"], "A Normal type Pokémon that can evolve into many different forms.", 55, 55, 50, 55),
  make(134, "Vaporeon", "Water", "1.0 m", "29 kg", "Bubble Jet Pokémon", ["Water Absorb"], "Its body melts into water, making it almost invisible when swimming.", 130, 65, 60, 65),
  make(135, "Jolteon", "Electric", "0.8 m", "24.5 kg", "Lightning Pokémon", ["Volt Absorb"], "Its fur stands up like needles when it gathers electricity.", 65, 65, 60, 130),
  make(136, "Flareon", "Fire", "0.9 m", "25 kg", "Flame Pokémon", ["Flash Fire"], "It stores fire inside its body and can reach very high temperatures.", 65, 130, 60, 65),
  make(143, "Snorlax", "Normal", "2.1 m", "460 kg", "Sleeping Pokémon", ["Immunity", "Thick Fat"], "A Normal type Pokémon that eats a huge amount of food and sleeps all day.", 160, 110, 65, 30),
  make(147, "Dratini", "Dragon", "1.8 m", "3.3 kg", "Dragon Pokémon", ["Shed Skin"], "A rare Dragon type Pokémon that sheds its skin as it grows.", 41, 64, 45, 50),
  make(148, "Dragonair", "Dragon", "4.0 m", "16.5 kg", "Dragon Pokémon", ["Shed Skin"], "It can change the weather by using the crystals on its body.", 61, 84, 65, 70),
  make(149, "Dragonite", "Dragon", "2.2 m", "210 kg", "Dragon Pokémon", ["Inner Focus", "Multiscale"], "A kind Dragon type Pokémon that can fly around the world very fast.", 91, 134, 95, 80),
  make(150, "Mewtwo", "Psychic", "2.0 m", "122 kg", "Genetic Pokémon", ["Pressure", "Unnerve"], "A Psychic type Pokémon created by science with incredible mental power.", 106, 110, 90, 130),
  make(151, "Mew", "Psychic", "0.4 m", "4.0 kg", "New Species Pokémon", ["Synchronize"], "A rare Psychic type Pokémon said to hold the DNA of all Pokémon.", 100, 100, 100, 100),
  make(172, "Pichu", "Electric", "0.3 m", "2.0 kg", "Tiny Mouse Pokémon", ["Static", "Lightning Rod"], "A tiny Electric type Pokémon that cannot control its electricity yet.", 20, 40, 15, 60),
  make(446, "Munchlax", "Normal", "0.6 m", "105 kg", "Big Eater Pokémon", ["Pickup", "Thick Fat"], "It hides food everywhere and forgets where it put it.", 135, 85, 40, 5),
  make(447, "Riolu", "Fighting", "0.7 m", "20.2 kg", "Emanation Pokémon", ["Steadfast", "Inner Focus"], "A young Fighting type Pokémon that can sense emotions through aura.", 40, 70, 40, 60),
  make(448, "Lucario", "Fighting", "1.2 m", "54 kg", "Aura Pokémon", ["Steadfast", "Inner Focus"], "A Fighting type Pokémon that can sense and use aura.", 70, 110, 70, 90),
];

// Evolution chains. Each chain is a list of STAGES, and each stage is a list of Pokémon.
// "how" tells you what is needed to evolve into that Pokémon.
const evolutionChains = [
  [[{ id: 1 }], [{ id: 2, how: "Level 16" }], [{ id: 3, how: "Level 32" }]],
  [[{ id: 4 }], [{ id: 5, how: "Level 16" }], [{ id: 6, how: "Level 36" }]],
  [[{ id: 7 }], [{ id: 8, how: "Level 16" }], [{ id: 9, how: "Level 36" }]],
  [[{ id: 10 }], [{ id: 11, how: "Level 7" }], [{ id: 12, how: "Level 10" }]],
  [[{ id: 172 }], [{ id: 25, how: "Friendship" }], [{ id: 26, how: "Thunder Stone" }]],
  [[{ id: 39 }], [{ id: 40, how: "Moon Stone" }]],
  [[{ id: 54 }], [{ id: 55, how: "Level 33" }]],
  [[{ id: 58 }], [{ id: 59, how: "Fire Stone" }]],
  [[{ id: 63 }], [{ id: 64, how: "Level 16" }], [{ id: 65, how: "Trade" }]],
  [[{ id: 66 }], [{ id: 67, how: "Level 28" }], [{ id: 68, how: "Trade" }]],
  [[{ id: 92 }], [{ id: 93, how: "Level 25" }], [{ id: 94, how: "Trade" }]],
  [[{ id: 129 }], [{ id: 130, how: "Level 20" }]],
  [[{ id: 133 }], [{ id: 134, how: "Water Stone" }, { id: 135, how: "Thunder Stone" }, { id: 136, how: "Fire Stone" }]],
  [[{ id: 446 }], [{ id: 143, how: "Friendship" }]],
  [[{ id: 147 }], [{ id: 148, how: "Level 30" }], [{ id: 149, how: "Level 55" }]],
  [[{ id: 447 }], [{ id: 448, how: "Friendship" }]],
];

// Finds the evolution chain that contains this Pokémon id (or null if it does not evolve)
function getEvolutionChain(id) {
  for (let c = 0; c < evolutionChains.length; c++) {
    const chain = evolutionChains[c];
    for (let s = 0; s < chain.length; s++) {
      for (let m = 0; m < chain[s].length; m++) {
        if (chain[s][m].id === id) {
          return chain;
        }
      }
    }
  }
  return null;
}

// Finds one Pokémon by its id
function getPokemonById(id) {
  for (let i = 0; i < pokemonData.length; i++) {
    if (pokemonData[i].id === id) {
      return pokemonData[i];
    }
  }
  return null;
}

// Returns a list of the different types, for example ["Grass", "Fire", ...]
function getAllTypes() {
  const found = [];
  for (let i = 0; i < pokemonData.length; i++) {
    if (found.indexOf(pokemonData[i].type) === -1) {
      found.push(pokemonData[i].type);
    }
  }
  return found;
}

// Adds HP + Attack + Defense + Speed
function getTotalStats(pokemon) {
  const s = pokemon.stats;
  return s.hp + s.attack + s.defense + s.speed;
}

export { pokemonData, getAllTypes, getTotalStats, getEvolutionChain, getPokemonById };
