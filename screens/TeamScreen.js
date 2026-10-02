// screens/TeamScreen.js - build and view your team of six
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { getTypeColor, GRAY } from "../styles/styles";
import { getPokemonById, getTotalStats } from "../data/pokemonData";
import { subscribe, getTeam, removeFromTeam, clearTeam, MAX_TEAM } from "../data/teamStore";
import Pokeball from "../components/Pokeball";

class TeamScreen extends React.Component {
  componentDidMount() {
    this.unsubscribe = subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  askClear = () => {
    Alert.alert("Clear team?", "Remove all Pokémon from your team?", [
      { text: "Cancel", style: "cancel" },
      { text: "Clear", style: "destructive", onPress: clearTeam },
    ]);
  };

  // Draws one slot (filled or empty)
  renderSlot = (index) => {
    const id = getTeam()[index];

    if (id === undefined) {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          style={[styles.teamSlot, styles.teamSlotEmpty]}
          onPress={() => this.props.navigation.navigate("List", { pickMode: true })}
        >
          <Ionicons name="add-circle-outline" size={42} color={GRAY} />
          <Text style={[styles.slotName, { color: GRAY, marginTop: 6 }]}>Add Pokémon</Text>
        </TouchableOpacity>
      );
    }

    const p = getPokemonById(id);
    const color = getTypeColor(p.type);
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.88}
        style={[styles.teamSlot, { backgroundColor: color + "26" }]}
        onPress={() => this.props.navigation.navigate("Details", { pokemon: p })}
      >
        <Pokeball size={110} color={color} opacity={0.18} style={{ position: "absolute", right: -28, bottom: -20 }} />
        <Text style={styles.slotNumber}>{index + 1}</Text>
        <TouchableOpacity style={styles.removeBtn} onPress={() => removeFromTeam(p.id)}>
          <Ionicons name="close" size={18} color="#1D2033" />
        </TouchableOpacity>
        <Image source={{ uri: p.image }} style={styles.slotImage} resizeMode="contain" />
        <Text style={styles.slotName}>{p.name}</Text>
        <View style={[styles.badge, { backgroundColor: color }]}>
          <Text style={styles.badgeText}>{p.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const ids = getTeam();
    const members = ids.map((id) => getPokemonById(id));
    const slots = [];
    for (let i = 0; i < MAX_TEAM; i++) {
      slots.push(this.renderSlot(i));
    }

    // Team summary
    let power = 0;
    const teamTypes = [];
    for (let i = 0; i < members.length; i++) {
      power += getTotalStats(members[i]);
      if (teamTypes.indexOf(members[i].type) === -1) {
        teamTypes.push(members[i].type);
      }
    }

    return (
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" />
        <View style={styles.hero}>
          <Pokeball size={200} style={styles.watermark} />
          <View style={styles.listHeaderRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <View>
              <Text style={styles.listTitle}>My Team</Text>
              <Text style={styles.listCount}>{ids.length} / {MAX_TEAM} Pokémon{ids.length === MAX_TEAM ? " · Team complete!" : ""}</Text>
            </View>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.grid}>{slots}</View>

          <View style={styles.card2}>
            <Text style={styles.cardTitle}>Team Summary</Text>
            <View style={styles.statRow}>
              <Text style={[styles.statName, { width: 110 }]}>Total power</Text>
              <Text style={styles.statValue}>{power}</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={[styles.statName, { width: 110 }]}>Types</Text>
              <View style={[styles.abilityRow, { flex: 1 }]}>
                {teamTypes.length === 0 ? (
                  <Text style={styles.infoLabel}>No Pokémon yet</Text>
                ) : (
                  teamTypes.map((t) => (
                    <View key={t} style={[styles.badge, { backgroundColor: getTypeColor(t), marginRight: 6, marginBottom: 4 }]}>
                      <Text style={styles.badgeText}>{t}</Text>
                    </View>
                  ))
                )}
              </View>
            </View>
          </View>

          {ids.length > 0 && (
            <TouchableOpacity style={[styles.teamButton, { backgroundColor: "#1D2033", marginTop: 16 }]} onPress={this.askClear}>
              <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
              <Text style={styles.teamButtonText}>Clear Team</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default TeamScreen;
