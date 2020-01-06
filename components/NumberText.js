import React from "react";
import { Text, StyleSheet } from "react-native";

const NumberText = ({ value }) => {
  return <Text style={styles.numbers}>{value}</Text>;
};

const styles = StyleSheet.create({
  numbers: {
    fontSize: 100,
    fontWeight: "800"
  }
});

export { NumberText };
