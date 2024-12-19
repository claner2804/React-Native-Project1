import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { Category } from "./components/Category";
import { Card } from "./components/Card";

import { categoriesData } from "./data/Data";
const { height } = Dimensions.get("window");

export function BudgetPlannerScreen({onCategorySelect}) {
  return (
    //Hauptcontainer der App
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Budget Planer </Text>

      {/* Untertitel */}
      <Text style={styles.bodyText}>dein Haushaltsbuch</Text>

      <StatusBar style="auto" />

      {/* Beschreibung */}
      <Text style={styles.sectionDescription}>
        Budgetieren, Planen, Sparen, Investieren
      </Text>

      {/* Trennlinie unter dem Text */}
      <View style={styles.sectionUnderline} />

      {/* Kategorien */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        style={{ flexGrow: 0 }} // Hier Flex-Wachstum erlauben
      >
        <View style={styles.categoriesContainer}>
          {categoriesData.map((category) => (
            <Card key={category.id}>
              <Category
                categoryHeader={category.categoryHeader}
                percentageText={category.percentageText}
                circleColor={category.circleColor}
                onPress={() => onCategorySelect(category)}
              />
            </Card>
          ))}
        </View>
      </ScrollView>

      {/* Bild */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/9462/9462711.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Hauptcontainer der App
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5CCFF",
    alignItems: "center",
    paddingTop: height * 0.2, // 20% der Bildschirmhöhe
  },

  //Header-Text für den Titel "Budget Planer"
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    color: "#4B0082",
    backgroundColor: "#fff",
    borderRadius: 20, // Abgerundete Ecken
    marginBottom: 20, // Abstand nach unten
  },

  //Text für die Beschreibung 'dein Haushaltsbuch'
  bodyText: {
    fontSize: 20,
    textAlign: "center",
    color: "#4B0082",
    marginTop: 20,
  },

  //Text für die Beschreibung "Budgetieren, Planen, Sparen, Investieren"
  sectionDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
    textAlign: "center",
    marginTop: 32,
    paddingHorizontal: 24,
  },

  //Trennlinie unter dem Text
  sectionUnderline: {
    borderBottomColor: "#fff",
    borderBottomWidth: 5,
    width: 350,
    marginTop: 10,
    borderRadius: 20, // Abgerundete Ecken
  },

  //Container für die horizontalen Kategorien (Einnahmen & Ausgaben & Ersparnisse)
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Verteilt Kategorien gleichmäßig
    paddingHorizontal: 10,
    marginTop: 20,
    // backgroundColor: "red", // Hintergrund zum Debuggen,
    height: 120, // Festgelegte Höhe
  },

  //Container für das Bild
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
    // backgroundColor: "blue", // Hintergrund zum Debuggen
    flex: 1, // Flex-Größe 1, um den Inhalt zu strecken
  },

  //Bild
  image: {
    width: 300, // Setzt eine feste Breite
    height: 200, // Setzt eine feste Höhe
    resizeMode: "contain", // Bild an den Container anpassen
  },
});
