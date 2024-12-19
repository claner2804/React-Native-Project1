
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { BudgetPlannerScreen } from "./BudgetPlannerScreen";

import { Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export default function App() {
  return (

    <SafeAreaView style={styles.screenContainer}>
      <BudgetPlannerScreen />
    </SafeAreaView>

  );
  }

const styles = StyleSheet.create({

  screenContainer: {
    flex: 1,
    backgroundColor: "#E5CCFF",
  },
});
