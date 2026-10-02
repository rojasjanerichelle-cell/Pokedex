// components/EvolutionChart.js - shows the evolution line of a Pokémon
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { getTypeColor, GRAY } from "../styles/styles";
import { getEvolutionChain, getPokemonById } from "../data/pokemonData";

function EvolutionChart({ pokemon, color, onSelect }) {
  const chain = getEvolutionChain(pokemon.id);

  return (
    <View style={styles.card2}>
      <Text style={styles.cardTitle}>Evolution Chart</Text>

      {chain === null ? (
        <Text style={styles.description}>{pokemon.name} does not evolve.</Text>
      ) : (
        <View style={styles.evoRow}>
          {chain.map((stage, stageIndex) => (
            <React.Fragment key={stageIndex}>
              {stageIndex > 0 && <Ionicons name="chevron-forward" size={18} color={GRAY} />}
              <View style={styles.evoStage}>
                {stage.map((member) => {
                  const p = getPokemonById(member.id);
                  const isCurrent = member.id === pokemon.id;
                  return (
                    <TouchableOpacity
                      key={member.id}
                      activeOpacity={0.85}
                      style={[styles.evoCell, isCurrent && { backgroundColor: color + "26" }]}
                      onPress={() => { if (!isCurrent) onSelect(p); }}
                    >
                      {member.how ? <Text style={[styles.evoHow, { color: getTypeColor(p.type) }]}>{member.how}</Text> : null}
                      <Image source={{ uri: p.image }} style={styles.evoImage} resizeMode="contain" />
                      <Text style={styles.evoName}>{p.name}</Text>
                      <Text style={styles.evoNumber}>#{String(p.id).padStart(3, "0")}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </React.Fragment>
          ))}
        </View>
      )}
    </View>
  );
}

export default EvolutionChart;
