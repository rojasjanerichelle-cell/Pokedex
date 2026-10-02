// screens/HomeScreen.js - first screen of the app
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { getTypeColor, GRAY } from "../styles/styles";
import { pokemonData, getAllTypes } from "../data/pokemonData";
import Pokeball from "../components/Pokeball";
import TeamPreview from "../components/TeamPreview";

function HomeScreen({ navigation }) {
  const types = getAllTypes();
  // "Pokémon of the Day" changes with the date
  const featured = pokemonData[new Date().getDate() % pokemonData.length];
  const featuredColor = getTypeColor(featured.type);

  // Button functions: they only call navigation
  function goToList() {
    navigation.navigate("List");
  }
  function goToSearch() {
    navigation.navigate("List", { focusSearch: true });
  }
  function goToType(type) {
    navigation.navigate("List", { type: type });
  }
  function goToFeatured() {
    navigation.navigate("Details", { pokemon: featured });
  }

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.hero}>
        <Pokeball size={230} style={styles.watermark} />
        <Text style={styles.logo}>PokéDex</Text>
        <Text style={styles.subtitle}>Your Pokémon Encyclopedia</Text>
        <Text style={styles.welcome}>Welcome, Trainer! Discover Pokémon, learn their types and compare their stats.</Text>

        <TouchableOpacity style={styles.searchPill} onPress={goToSearch} activeOpacity={0.9}>
          <Ionicons name="search" size={20} color={GRAY} />
          <Text style={styles.searchText}>Search Pokémon by name or number</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Pokémon of the day */}
        <View style={[styles.sectionRow, { marginTop: 4 }]}>
          <Text style={styles.sectionTitle}>Pokémon of the Day</Text>
        </View>
        <TouchableOpacity activeOpacity={0.92} onPress={goToFeatured} style={[styles.dayCard, { backgroundColor: featuredColor }]}>
          <Pokeball size={190} style={{ position: "absolute", right: -40, bottom: -40 }} />
          <Text style={styles.dayLabel}>FEATURED</Text>
          <Text style={styles.dayName}>{featured.name}</Text>
          <Text style={styles.dayNumber}>#{String(featured.id).padStart(3, "0")} · {featured.type}</Text>
          <View style={styles.dayButton}>
            <Text style={[styles.dayButtonText, { color: featuredColor }]}>View details</Text>
            <Ionicons name="chevron-forward" size={16} color={featuredColor} />
          </View>
          <Image source={{ uri: featured.image }} style={styles.dayImage} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={goToList} activeOpacity={0.88}>
          <Text style={styles.primaryButtonText}>Explore Pokémon</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        {/* My team */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>My Team</Text>
        </View>
        <TeamPreview navigation={navigation} />

        {/* Browse by type */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Browse by Type</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 14 }}>
          {types.map((type) => (
            <TouchableOpacity key={type} style={[styles.chip, { backgroundColor: getTypeColor(type) }]} onPress={() => goToType(type)} activeOpacity={0.85}>
              <Text style={[styles.chipText, styles.chipTextActive]}>{type}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Statistics */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Statistics</Text>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Ionicons name="albums-outline" size={22} color="#E3350D" />
            <Text style={styles.statNumber}>{pokemonData.length}</Text>
            <Text style={styles.statLabel}>Total Pokémon</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="color-palette-outline" size={22} color="#E3350D" />
            <Text style={styles.statNumber}>{types.length}</Text>
            <Text style={styles.statLabel}>Types</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="star-outline" size={22} color="#E3350D" />
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Featured</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
