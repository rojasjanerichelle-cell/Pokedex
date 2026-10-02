// components/Pokeball.js - decorative Pokéball drawn with plain Views
import React from "react";
import { View } from "react-native";

function Pokeball({ size, color, opacity, style }) {
  const line = size * 0.08;
  const c = color || "#FFFFFF";
  return (
    <View
      pointerEvents="none"
      style={[
        {
          width: size, height: size, borderRadius: size / 2, borderWidth: line,
          borderColor: c, opacity: opacity || 0.2, alignItems: "center", justifyContent: "center",
        },
        style,
      ]}
    >
      <View style={{ position: "absolute", left: 0, right: 0, height: line, backgroundColor: c }} />
      <View style={{ width: size * 0.36, height: size * 0.36, borderRadius: size * 0.18, borderWidth: line, borderColor: c }} />
    </View>
  );
}

export default Pokeball;
