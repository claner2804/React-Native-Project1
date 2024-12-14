import { View, Text, StyleSheet } from 'react-native';

export function Category(props) {
  return (
    <View style={styles.categoryContainer}>
      {/* Einnahmen */}
      <View style={styles.categoryItem}>
        <Text style={styles.categoryHeader}>{props.categoryHeader1}</Text>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>{props.percentageText1}</Text>
        </View>
      </View>

      {/* Ausgaben */}
      <View style={styles.categoryItem}>
        <Text style={styles.categoryHeader}>{props.categoryHeader2}</Text>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>{props.percentageText2}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container für die horizontalen Kategorien (Einnahmen & Ausgaben)
  categoryContainer: {
    flexDirection: 'row', // Kategorien nebeneinander
    justifyContent: 'space-between', // Abstand zwischen Kategorien
    alignItems: 'center',
    width: 350,
    marginTop: 20,
  },

  // Vertikaler Container für eine einzelne Kategorie
  categoryItem: {
    alignItems: 'center', // Zentriert Text und Prozentkreis vertikal
  },

  // Text für die Kategorie-Header (Einnahmen/Ausgaben)
  categoryHeader: {
    fontSize: 18,
    fontWeight: '400',
    color: '#4B0082',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Kreisförmiger Container für die Prozentangabe
  percentageContainer: {
    backgroundColor: '#B266FF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Text für die Prozentangabe
  percentageText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
});
