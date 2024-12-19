import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function Category(props) {
  return (
    <TouchableOpacity 
    activeOpacity={0.4} 
    style={[styles.categoryContainer, props.style]}

    onPress={() => props.onPress && props.onPress(props.categoryHeader)}

    >
      
      
      {/* Kategorien */}
      <View style={styles.categoryItem}>
        <Text style={styles.categoryHeader}>{props.categoryHeader}</Text>
        <View
          style={[
            styles.percentageContainer,
            { backgroundColor: props.circleColor }, // Dynamische Farbe für den Kreis
          ]}
        >
          <Text style={styles.percentageText}>{props.percentageText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Container für die horizontalen Kategorien (Einnahmen & Ausgaben)
  categoryContainer: {
    flexDirection: "row", // Kategorien nebeneinander
    justifyContent: "space-between", // Abstand zwischen Kategorien
    alignItems: "center",
    marginTop: 5,
  },

  // Vertikaler Container für eine einzelne Kategorie
  categoryItem: {
    alignItems: "center", // Zentriert Text und Prozentkreis vertikal
  },

  // Text für die Kategorie-Header (Einnahmen/Ausgaben/Ersparnisse)
  categoryHeader: {
    fontSize: 15,
    fontWeight: "400",
    color: "#4B0082",
    textAlign: "center",
    marginBottom: 10,
  },

  // Kreisförmiger Container für die Prozentangabe
  percentageContainer: {
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  // Text für die Prozentangabe
  percentageText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
});
