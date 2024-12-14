import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default function App() {
  return (
    //Hauptcontainer der App
    <View style={styles.container}>

      {/* Header */}
      <Text style = {styles.header}>Budget Planer </Text>

      {/* Untertitel */}
      <Text style = {styles.bodyText}>dein Haushaltsbuch</Text>

      <StatusBar style="auto" />

      {/* Beschreibung */}
      <Text style={styles.sectionDescription}>Budgetieren, Planen, Sparen, Investieren</Text>
      

      {/* Trennlinie unter dem Text */}
      <View style={styles.sectionUnderline} />


     {/* Kategorien mit Prozentangaben */}
     <View style={styles.categoryContainer}>
        {/* Einnahmen */}
        <View style={styles.categoryItem}>
          <Text style={styles.categoryHeader}>Einnahmen</Text>
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageText}>50%</Text>
          </View>
        </View>

        {/* Ausgaben */}
        <View style={styles.categoryItem}>
          <Text style={styles.categoryHeader}>Ausgaben</Text>
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageText}>100%</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  //Hauptcontainer der App
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E5CCFF',
    alignItems: 'center',
    paddingTop: height * 0.2,  // 20% der Bildschirmhöhe
  },

  //Header-Text für den Titel "Budget Planer"
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#4B0082',
    backgroundColor: '#fff',
    borderRadius: 20,  // Abgerundete Ecken
    marginBottom: 20,  // Abstand nach unten
  },

  //Text für die Beschreibung 'dein Haushaltsbuch'
  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4B0082',
    marginTop: 20,
  },

  //Text für die Beschreibung "Budgetieren, Planen, Sparen, Investieren"
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },

  //Trennlinie unter dem Text
  sectionUnderline: {
    borderBottomColor: '#fff',
    borderBottomWidth: 5,
    width: 350,
    marginTop: 20,
  },

  //Container für die Kategorien (Einnahmen, Ausgaben)
  categoryContainer: {
    flexDirection: 'row', // horizontal nebeneinander
    justifyContent: 'space-between',
    width: 350,
    marginTop: 20,
  },

  // Vertikaler Container für eine Kategorie (z. B. Einnahmen oder Ausgaben)
  categoryItem: {
    alignItems: 'center', // Zentriert die Inhalte vertikal (Text und Prozentangaben)
  },


  //Kategorie-Header (Einnahmen, Ausgaben)
  categoryHeader: {
    fontSize: 18,
    fontWeight: '400',
    color: '#4B0082',
    textAlign: 'center', 
    marginTop: 20,
    marginBottom: 15, // Abstand nach unten
  },
  
  //Container für die Prozentangabe
  percentageContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Prozentangabe text
  percentageText: {
    // 50% und 100% als Beispiel sollen später dynamisch berechnet werden 
    //sie sollen unter einnahmen und ausgaben stehen
    fontSize: 18,
    fontWeight: '400',
    color: '#4B0082',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
