import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function Button(props) {
  //Let's define our props
  const { title, color, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.boxWithShadow,
        styles.pattern,
        { backgroundColor: color },
      ]}
      {...otherProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  color: "blue",
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 5,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    elevation: 4,
  },
});
