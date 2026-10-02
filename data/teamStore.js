// data/teamStore.js - keeps "My Team" (max 6 Pokémon ids) and saves it on the phone.
// Screens call subscribe() so they redraw when the team changes. No hooks needed.
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "pokedex_my_team";
const MAX_TEAM = 6;

let team = [];      // list of Pokémon ids, for example [25, 6, 94]
let listeners = []; // functions to call when the team changes

function notify() {
  for (let i = 0; i < listeners.length; i++) {
    listeners[i]();
  }
}

function subscribe(listener) {
  listeners.push(listener);
  // returns a function that stops listening
  return function unsubscribe() {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function saveTeam() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(team)).catch(() => {});
}

// Called once when the app starts: reads the saved team from the phone
function loadTeam() {
  AsyncStorage.getItem(STORAGE_KEY)
    .then((value) => {
      if (value) {
        team = JSON.parse(value);
        notify();
      }
    })
    .catch(() => {});
}

function getTeam() {
  return team;
}

function isInTeam(id) {
  return team.indexOf(id) !== -1;
}

// Returns "added", "exists" or "full"
function addToTeam(id) {
  if (isInTeam(id)) return "exists";
  if (team.length >= MAX_TEAM) return "full";
  team = team.concat([id]);
  saveTeam();
  notify();
  return "added";
}

function removeFromTeam(id) {
  team = team.filter((x) => x !== id);
  saveTeam();
  notify();
}

function clearTeam() {
  team = [];
  saveTeam();
  notify();
}

export { MAX_TEAM, subscribe, loadTeam, getTeam, isInTeam, addToTeam, removeFromTeam, clearTeam };
