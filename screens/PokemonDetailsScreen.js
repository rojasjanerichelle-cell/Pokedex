// screens/PokemonDetailsScreen.js - shows one Pokémon
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { getTypeColor } from "../styles/styles";
import { pokemonData, getTotalStats } from "../data/pokemonData";
import Pokeball from "../components/Pokeball";
import TeamButton from "../components/TeamButton";
import EvolutionChart from "../components/EvolutionChart";

// One stat row with a progress bar (150 is treated as the maximum)
function StatBar({ label, value, color }) {
  const percent = Math.min((value / 150) * 100, 100) + "%";
  return (
    <View style={styles.statRow}>
      <Text style={styles.statName}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: percent, backgroundColor: color }]} />
      </View>
    </View>
  );
}

// One small info box (Height, Weight, Category)
function InfoBox({ label, value }) {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function PokemonDetailsScreen({ navigation, route }) {
  // The selected Pokémon arrives through navigation parameters
  const pokemon = route.params.pokemon;
  const color = getTypeColor(pokemon.type);

  // Find the position of this Pokémon so we can show Previous / Next
  let index = 0;
  for (let i = 0; i < pokemonData.length; i++) {
    if (pokemonData[i].id === pokemon.id) {
      index = i;
    }
  }
  const total = pokemonData.length;
  const previous = pokemonData[(index - 1 + total) % total];
  const next = pokemonData[(index + 1) % total];

  function openPokemon(p) {
    navigation.replace("Details", { pokemon: p });
  }

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false} bounces={false}>
      <StatusBar barStyle="light-content" />

      {/* Colored header */}
      <View style={[styles.detailsHero, { backgroundColor: color }]}>
        <Pokeball size={320} style={{ position: "absolute", top: 70, alignSelf: "center" }} />
        <TouchableOpacity style={[styles.backButton, styles.detailsBack]} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.detailsNumber}>#{String(pokemon.id).padStart(3, "0")}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.detailsImage} resizeMode="contain" />
        <Text style={styles.detailsName}>{pokemon.name}</Text>
        <View style={styles.detailsBadge}>
          <Text style={styles.badgeText}>{pokemon.type}</Text>
        </View>
      </View>

      {/* White sheet */}
      <View style={styles.sheet}>
        <TeamButton pokemon={pokemon} />
        <View style={[styles.infoRow, { marginTop: 14 }]}>
          <InfoBox label="Height" value={pokemon.height} />
          <InfoBox label="Weight" value={pokemon.weight} />
          <InfoBox label="Category" value={pokemon.category.replace(" Pokémon", "")} />
        </View>

        <View style={styles.card2}>
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.description}>{pokemon.description}</Text>
        </View>

        <EvolutionChart pokemon={pokemon} color={color} onSelect={openPokemon} />

        <View style={styles.card2}>
          <Text style={styles.cardTitle}>Abilities</Text>
          <View style={styles.abilityRow}>
            {pokemon.abilities.map((name) => (
              <View key={name} style={[styles.ability, { backgroundColor: color + "26" }]}>
                <Text style={[styles.abilityText, { color: color }]}>{name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card2}>
          <Text style={styles.cardTitle}>Base Stats</Text>
          <StatBar label="HP" value={pokemon.stats.hp} color={color} />
          <StatBar label="Attack" value={pokemon.stats.attack} color={color} />
          <StatBar label="Defense" value={pokemon.stats.defense} color={color} />
          <StatBar label="Speed" value={pokemon.stats.speed} color={color} />
          <View style={styles.totalRow}>
            <Text style={styles.statName}>Total</Text>
            <Text style={[styles.statValue, { color: color, width: 60, textAlign: "right" }]}>{getTotalStats(pokemon)}</Text>
          </View>
        </View>

        {/* Previous / Next */}
        <View style={styles.navRow}>
          <TouchableOpacity style={styles.navButton} onPress={() => openPokemon(previous)} activeOpacity={0.85}>
            <Ionicons name="chevron-back" size={20} color={color} />
            <View style={{ marginLeft: 6 }}>
              <Text style={styles.navSmall}>Previous</Text>
              <Text style={styles.navName}>{previous.name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, { justifyContent: "flex-end" }]} onPress={() => openPokemon(next)} activeOpacity={0.85}>
            <View style={{ marginRight: 6, alignItems: "flex-end" }}>
              <Text style={styles.navSmall}>Next</Text>
              <Text style={styles.navName}>{next.name}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={color} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default PokemonDetailsScreen;
