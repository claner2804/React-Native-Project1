import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style ={styles.header}>Budget Planer </Text>
      <Text style = {styles.bodyText}>dein Haushaltsbuch</Text>

      <StatusBar style="auto" />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>
          Budgetieren, Planen, Sparen, Investieren
        </Text>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E5CCFF',
    alignItems: 'center',
    paddingTop: 200,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#4B0082',
    backgroundColor: '#fff',
  },
  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4B0082',
    marginTop: 20,
  },
});
