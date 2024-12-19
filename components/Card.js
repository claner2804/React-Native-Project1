import React from "react";
import { View, StyleSheet } from "react-native";

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff", //Hintergrund zum Debuggen
    padding: 10,
    borderRadius: 15,
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Für Android
  },
});
