// components/TeamPreview.js - small team card shown on the Home screen
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { GRAY, getTypeColor } from "../styles/styles";
import { subscribe, getTeam, MAX_TEAM } from "../data/teamStore";
import { getPokemonById } from "../data/pokemonData";

class TeamPreview extends React.Component {
  componentDidMount() {
    this.unsubscribe = subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const ids = getTeam();
    const slots = [];
    for (let i = 0; i < MAX_TEAM; i++) {
      slots.push(ids[i] === undefined ? null : getPokemonById(ids[i]));
    }

    return (
      <TouchableOpacity style={styles.card2} activeOpacity={0.9} onPress={() => this.props.navigation.navigate("Team")}>
        <View style={styles.previewRow}>
          {slots.map((p, index) => (
            <View key={index} style={[styles.previewSlot, p && { backgroundColor: getTypeColor(p.type) + "33" }]}>
              {p ? (
                <Image source={{ uri: p.image }} style={styles.previewImage} resizeMode="contain" />
              ) : (
                <Ionicons name="add" size={20} color={GRAY} />
              )}
            </View>
          ))}
        </View>
        <Text style={[styles.description, { marginTop: 12 }]}>
          {ids.length === 0
            ? "Build your dream team of 6 Pokémon."
            : ids.length + " of " + MAX_TEAM + " Pokémon chosen. Tap to edit your team."}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TeamPreview;
