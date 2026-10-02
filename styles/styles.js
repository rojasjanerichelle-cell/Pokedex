// styles/styles.js - all colors and styles are stored here
import { StyleSheet, Platform, StatusBar } from "react-native";

export const typeColors = {
  Grass: "#48B96C", Fire: "#F5793A", Water: "#4A90E2", Electric: "#F2B90F",
  Fairy: "#EE82B5", Ghost: "#7A62B5", Normal: "#8E9AAF", Dragon: "#5B6BD0",
  Psychic: "#E8588A", Fighting: "#D6573F",
};

export function getTypeColor(type) {
  return typeColors[type] || "#8E9AAF";
}

export const RED = "#E3350D";
export const DARK = "#1D2033";
export const GRAY = "#8A90A6";
export const topPad = Platform.OS === "ios" ? 58 : (StatusBar.currentHeight || 24) + 14;

const shadow = {
  shadowColor: "#1D2033", shadowOpacity: 0.08, shadowRadius: 14,
  shadowOffset: { width: 0, height: 6 }, elevation: 4,
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F4F5F9" },
  content: { padding: 20, paddingBottom: 40 },
  sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 26, marginBottom: 12 },
  sectionTitle: { fontSize: 19, fontWeight: "800", color: DARK },

  // ----- Hero (Home + List) -----
  hero: { backgroundColor: RED, paddingTop: topPad, paddingBottom: 26, paddingHorizontal: 22, borderBottomLeftRadius: 34, borderBottomRightRadius: 34, overflow: "hidden" },
  watermark: { position: "absolute", right: -50, top: -40 },
  logo: { fontSize: 36, fontWeight: "900", color: "#FFFFFF", letterSpacing: 0.5 },
  subtitle: { fontSize: 15, color: "#FFD9D1", marginTop: 2, fontWeight: "600" },
  welcome: { fontSize: 14, color: "#FFFFFF", marginTop: 12, lineHeight: 20, maxWidth: "85%" },
  searchPill: { backgroundColor: "#FFFFFF", borderRadius: 18, paddingHorizontal: 16, height: 52, marginTop: 20, flexDirection: "row", alignItems: "center", ...shadow },
  searchText: { flex: 1, marginLeft: 10, fontSize: 15, color: GRAY },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 15, color: DARK, height: 52 },

  // ----- Pokémon of the day -----
  dayCard: { borderRadius: 28, padding: 22, overflow: "hidden", minHeight: 190, ...shadow },
  dayLabel: { color: "#FFFFFFCC", fontSize: 12, fontWeight: "800", letterSpacing: 1 },
  dayName: { color: "#FFFFFF", fontSize: 28, fontWeight: "900", marginTop: 4 },
  dayNumber: { color: "#FFFFFFCC", fontSize: 14, fontWeight: "700", marginBottom: 10 },
  dayImage: { position: "absolute", right: -6, bottom: -6, width: 170, height: 170 },
  dayButton: { marginTop: 14, backgroundColor: "#FFFFFF", alignSelf: "flex-start", flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20 },
  dayButtonText: { fontWeight: "800", fontSize: 13, marginRight: 2 },

  primaryButton: { backgroundColor: RED, borderRadius: 18, height: 56, flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20, shadowColor: RED, shadowOpacity: 0.35, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 6 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 17, fontWeight: "800", marginRight: 8 },

  statsRow: { flexDirection: "row" },
  statBox: { flex: 1, backgroundColor: "#FFFFFF", borderRadius: 20, paddingVertical: 16, marginHorizontal: 4, alignItems: "center", ...shadow },
  statNumber: { fontSize: 22, fontWeight: "900", color: DARK, marginTop: 6 },
  statLabel: { fontSize: 12, color: GRAY, marginTop: 2, fontWeight: "600" },

  // ----- Chips -----
  chip: { paddingHorizontal: 16, paddingVertical: 9, borderRadius: 20, marginRight: 8, backgroundColor: "#FFFFFF", ...shadow },
  chipText: { fontSize: 13, fontWeight: "800", color: DARK },
  chipTextActive: { color: "#FFFFFF" },

  // ----- List -----
  listHeaderRow: { flexDirection: "row", alignItems: "center" },
  backButton: { width: 42, height: 42, borderRadius: 21, backgroundColor: "#FFFFFF33", alignItems: "center", justifyContent: "center", marginRight: 12 },
  listTitle: { fontSize: 26, fontWeight: "900", color: "#FFFFFF" },
  listCount: { fontSize: 13, color: "#FFD9D1", fontWeight: "600" },
  chipsRow: { paddingHorizontal: 16, paddingVertical: 16 },
  listPadding: { paddingHorizontal: 10, paddingBottom: 40 },
  card: { flex: 1, borderRadius: 24, margin: 6, padding: 14, overflow: "hidden", minHeight: 190 },
  cardNumber: { fontSize: 13, fontWeight: "800", color: DARK, opacity: 0.35 },
  cardImage: { width: 112, height: 112, alignSelf: "center", marginVertical: 2 },
  cardName: { fontSize: 16, fontWeight: "800", color: DARK, marginBottom: 6 },
  badge: { alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  badgeText: { color: "#FFFFFF", fontSize: 11, fontWeight: "800" },
  emptyBox: { alignItems: "center", marginTop: 60 },
  emptyTitle: { fontSize: 18, fontWeight: "800", color: DARK, marginTop: 10 },
  emptyText: { fontSize: 14, color: GRAY, marginTop: 4 },

  // ----- Details -----
  detailsHero: { paddingTop: topPad, paddingBottom: 70, alignItems: "center", overflow: "hidden" },
  detailsBack: { position: "absolute", left: 20, top: topPad - 6 },
  detailsNumber: { color: "#FFFFFFCC", fontSize: 16, fontWeight: "800", marginTop: 4 },
  detailsImage: { width: 250, height: 250, marginTop: 10 },
  detailsName: { color: "#FFFFFF", fontSize: 32, fontWeight: "900", marginTop: 4 },
  detailsBadge: { backgroundColor: "#FFFFFF33", paddingHorizontal: 18, paddingVertical: 6, borderRadius: 20, marginTop: 8 },
  sheet: { backgroundColor: "#F4F5F9", borderTopLeftRadius: 32, borderTopRightRadius: 32, marginTop: -36, padding: 20, paddingBottom: 40 },
  infoRow: { flexDirection: "row" },
  infoBox: { flex: 1, backgroundColor: "#FFFFFF", borderRadius: 18, padding: 14, marginHorizontal: 4, alignItems: "center", ...shadow },
  infoLabel: { fontSize: 12, color: GRAY, fontWeight: "700" },
  infoValue: { fontSize: 14, color: DARK, fontWeight: "800", marginTop: 4, textAlign: "center" },
  card2: { backgroundColor: "#FFFFFF", borderRadius: 22, padding: 18, marginTop: 14, ...shadow },
  cardTitle: { fontSize: 17, fontWeight: "800", color: DARK, marginBottom: 12 },
  description: { fontSize: 15, color: "#4A4F63", lineHeight: 23 },
  abilityRow: { flexDirection: "row", flexWrap: "wrap" },
  ability: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 16, marginRight: 8, marginBottom: 4 },
  abilityText: { fontSize: 13, fontWeight: "800" },
  statRow: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
  statName: { width: 68, fontSize: 14, fontWeight: "700", color: GRAY },
  statValue: { width: 38, fontSize: 14, fontWeight: "900", color: DARK },
  barBackground: { flex: 1, height: 10, backgroundColor: "#ECEEF4", borderRadius: 5, overflow: "hidden" },
  barFill: { height: 10, borderRadius: 5 },
  totalRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, paddingTop: 12, borderTopWidth: 1, borderTopColor: "#ECEEF4" },
  navRow: { flexDirection: "row", marginTop: 18 },
  navButton: { flex: 1, backgroundColor: "#FFFFFF", borderRadius: 18, padding: 14, marginHorizontal: 4, flexDirection: "row", alignItems: "center", ...shadow },
  navSmall: { fontSize: 11, color: GRAY, fontWeight: "700" },
  navName: { fontSize: 14, color: DARK, fontWeight: "800" },
});

export default styles;
