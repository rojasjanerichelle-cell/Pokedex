// App.js - navigation lives here
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PokemonListScreen from "./screens/PokemonListScreen";
import PokemonDetailsScreen from "./screens/PokemonDetailsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#E3350D" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "800" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={PokemonListScreen} options={{ title: "All Pokémon" }} />
        <Stack.Screen name="Details" component={PokemonDetailsScreen} options={{ title: "Pokémon Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
