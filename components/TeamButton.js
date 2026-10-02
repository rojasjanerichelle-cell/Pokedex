// components/TeamButton.js - "Add to My Team" / "Remove from Team" button
// Class component: it listens to the team store and redraws when the team changes.
import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import { subscribe, isInTeam, addToTeam, removeFromTeam, getTeam, MAX_TEAM } from "../data/teamStore";

class TeamButton extends React.Component {
  componentDidMount() {
    this.unsubscribe = subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handlePress = () => {
    const pokemon = this.props.pokemon;
    if (isInTeam(pokemon.id)) {
      removeFromTeam(pokemon.id);
    } else if (addToTeam(pokemon.id) === "full") {
      Alert.alert("Team is full", "Your team can only have " + MAX_TEAM + " Pokémon. Remove one first.");
    }
  };

  render() {
    const inTeam = isInTeam(this.props.pokemon.id);
    return (
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={this.handlePress}
        style={[styles.teamButton, { backgroundColor: inTeam ? "#1D2033" : "#E3350D" }]}
      >
        <Ionicons name={inTeam ? "checkmark-circle" : "add-circle"} size={22} color="#FFFFFF" />
        <Text style={styles.teamButtonText}>
          {inTeam ? "In My Team (tap to remove)" : "Add to My Team  " + getTeam().length + "/" + MAX_TEAM}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TeamButton;
