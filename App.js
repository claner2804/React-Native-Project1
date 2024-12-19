import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";


import { BudgetPlannerScreen } from "./BudgetPlannerScreen";
import { CategoryDetailScreen } from "./CategoryDetailScreen";
import { categoriesData } from "./data/Data";
import { useState } from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.screenContainer}>
       <BudgetPlannerScreen />

       
      {/* <CategoryDetailScreen
      
      id={categoriesData[0].id}
      categoryHeader={categoriesData[0].categoryHeader}
      percentageText={categoriesData[0].percentageText}
      circleColor={categoriesData[0].circleColor}
      
      /> */} 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#E5CCFF",
  },
});
