import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function MarSvg() {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center", elevation: 3 },
      ]}
    >
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="10"
          cy="10"
          r="20"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg>
    </View>
  );
}
