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
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategorySelection(category) {
    console.log(`Kategorie ${category.categoryHeader} (App.js ausgabe)`);
    setSelectedCategory(category.categoryHeader);

    const index = categoriesData.findIndex((item) => {
      return item.categoryHeader === category.categoryHeader;
    });

    setSelectedCategory(categoriesData[index]);
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      {selectedCategory === null ? (
        <BudgetPlannerScreen onCategorySelect={handleCategorySelection} />
      ) : (
        <CategoryDetailScreen
          id={selectedCategory.id}
          categoryHeader={selectedCategory.categoryHeader}
          percentageText={selectedCategory.percentageText}
          circleColor={selectedCategory.circleColor}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#E5CCFF",
  },
});
