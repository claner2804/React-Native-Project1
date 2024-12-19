import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { categoriesData } from "./data/Data";

export function CategoryDetailScreen({
  id,
  categoryHeader,
  percentageText,
  circleColor,
  image,
  details,
  detailsTextColor,
  onBackPress,
}) {



  // Gesamtsumme berechnen und sicherstellen, dass amount als Zahl behandelt wird
  const totalAmount = details.reduce(
    (sum, item) => sum + parseFloat(item.amount),
    0
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Zurück</Text>
      </TouchableOpacity>

      {/* Bild */}
      <View style={styles.ImageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>

      {/* Kategorie-Header */}
      <Text style={styles.categoryHeader}>{categoryHeader}</Text>

      {/* Prozentanzeige */}
      <View
        style={[
          styles.percentageContainer,
          { backgroundColor: circleColor }, // Dynamische Farbe für den Kreis
        ]}
      >
        <Text style={styles.percentageText}>{percentageText}</Text>
      </View>

      {/* Aufschlüsselung */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>{`${categoryHeader}-Aufschlüsselung`}</Text>
        {details.map((item) => (
          <View key={item.id} style={styles.detailsItem}>
            <Text style={styles.detailsSource}>{item.source}</Text>
            <Text
              style={[
                styles.detailsAmount,
                { color: detailsTextColor }, // Dynamische Farbe anwenden
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}

        {/* Linie unter den Einnahmen */}
        <View style={styles.divider} />

        {/* Gesamtsumme */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Gesamteinnahmen:</Text>
          <Text
            style={[
              styles.totalAmount,
              { color: detailsTextColor }, // Dynamische Farbe für Gesamtsumme
            ]}
          >{`${totalAmount} €`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5CCFF",
    alignItems: "center",
    paddingTop: 20,
  },

  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },

  backButtonText: {
    fontSize: 16,
    color: "#4B0082",
  },

  image: {
    width: 200,
    height: 200,
  },

  ImageContainer: {
    backgroundColor: "#E5CCFF",
    alignItems: "center",
    marginBottom: 20,
  },

  categoryHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    color: "#4B0082",
    backgroundColor: "#fff",
    borderRadius: 20, // Abgerundete Ecken
    marginBottom: 20, // Abstand nach unten
  },

  percentageContainer: {
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  percentageText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },

  detailsContainer: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Für Android
  },

  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 10,
  },

  detailsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  detailsSource: {
    fontSize: 16,
    color: "#4B0082",
  },

  detailsAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },

  divider: {
    borderBottomColor: "#4B0082",
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  totalText: {
    fontSize: 18,
    color: "#4B0082",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
