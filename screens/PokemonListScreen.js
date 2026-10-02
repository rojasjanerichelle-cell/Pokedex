// screens/PokemonListScreen.js - searchable, filterable grid of Pokémon
// This is a CLASS component: it keeps the search text and chosen type in this.state.
// (Class components are not hooks, so no useState is needed.)
import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, ScrollView, StatusBar, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { getTypeColor, GRAY } from "../styles/styles";
import { pokemonData, getAllTypes } from "../data/pokemonData";
import Pokeball from "../components/Pokeball";
import { addToTeam } from "../data/teamStore";

class PokemonListScreen extends React.Component {
  constructor(props) {
    super(props);
    // Values sent from the Home screen (all optional)
    const params = props.route.params || {};
    this.state = {
      query: "",
      selectedType: params.type || "All",
    };
  }

  setQuery = (text) => {
    this.setState({ query: text });
  };

  setType = (type) => {
    this.setState({ selectedType: type });
  };

  // Returns only the Pokémon that match the search text AND the chosen type
  getFilteredPokemon = () => {
    const text = this.state.query.trim().toLowerCase();
    const result = [];
    for (let i = 0; i < pokemonData.length; i++) {
      const p = pokemonData[i];
      const matchesType = this.state.selectedType === "All" || p.type === this.state.selectedType;
      const matchesText = text === "" || p.name.toLowerCase().indexOf(text) !== -1 || String(p.id).indexOf(text) !== -1;
      if (matchesType && matchesText) {
        result.push(p);
      }
    }
    return result;
  };

  // Draws ONE card. FlatList calls this for every Pokémon.
  renderPokemon = ({ item }) => {
    const color = getTypeColor(item.type);
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: color + "26" }]}
        activeOpacity={0.88}
        onPress={() => this.openPokemon(item)}
      >
        <Pokeball size={120} color={color} opacity={0.18} style={{ position: "absolute", right: -30, top: 20 }} />
        <Text style={styles.cardNumber}>#{String(item.id).padStart(3, "0")}</Text>
        <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
        <Text style={styles.cardName}>{item.name}</Text>
        <View style={[styles.badge, { backgroundColor: color }]}>
          <Text style={styles.badgeText}>{item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Normal mode: open the details. Pick mode: add the Pokémon to the team.
  openPokemon = (item) => {
    const params = this.props.route.params || {};
    if (params.pickMode) {
      const result = addToTeam(item.id);
      if (result === "full") {
        Alert.alert("Team is full", "Your team can only have 6 Pokémon. Remove one first.");
      } else if (result === "exists") {
        Alert.alert("Already in your team", item.name + " is already in your team.");
      } else {
        this.props.navigation.goBack();
      }
    } else {
      this.props.navigation.navigate("Details", { pokemon: item });
    }
  };

  renderEmpty = () => {
    return (
      <View style={styles.emptyBox}>
        <Ionicons name="search-outline" size={48} color={GRAY} />
        <Text style={styles.emptyTitle}>No Pokémon found</Text>
        <Text style={styles.emptyText}>Try another name, number or type.</Text>
      </View>
    );
  };

  render() {
    const params = this.props.route.params || {};
    const filtered = this.getFilteredPokemon();
    const filters = ["All"].concat(getAllTypes());

    return (
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" />

        {/* Header with back button + search */}
        <View style={styles.hero}>
          <Pokeball size={200} style={styles.watermark} />
          <View style={styles.listHeaderRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <View>
              <Text style={styles.listTitle}>{params.pickMode ? "Choose a Pokémon" : "All Pokémon"}</Text>
              <Text style={styles.listCount}>{filtered.length} found</Text>
            </View>
          </View>

          <View style={styles.searchPill}>
            <Ionicons name="search" size={20} color={GRAY} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by name or number"
              placeholderTextColor={GRAY}
              value={this.state.query}
              onChangeText={this.setQuery}
              autoFocus={!!params.focusSearch}
              autoCorrect={false}
              returnKeyType="search"
            />
            {this.state.query !== "" && (
              <TouchableOpacity onPress={() => this.setQuery("")}>
                <Ionicons name="close-circle" size={20} color={GRAY} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Type filter chips */}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
            {filters.map((type) => {
              const active = this.state.selectedType === type;
              const bg = type === "All" ? "#1D2033" : getTypeColor(type);
              return (
                <TouchableOpacity
                  key={type}
                  style={[styles.chip, active && { backgroundColor: bg }]}
                  onPress={() => this.setType(type)}
                  activeOpacity={0.85}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{type}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <FlatList
          data={filtered}
          renderItem={this.renderPokemon}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          contentContainerStyle={styles.listPadding}
          ListEmptyComponent={this.renderEmpty}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default PokemonListScreen;
