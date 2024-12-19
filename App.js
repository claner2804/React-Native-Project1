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
    setSelectedCategory(category);

    const index = categoriesData.findIndex((item) => {
      return item.categoryHeader === category.categoryHeader;
    });

    setSelectedCategory(categoriesData[index]);
  }

  function handleBackPress() {
    setSelectedCategory(null);
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
          image={selectedCategory.image}
          details={selectedCategory.details} 
          detailsTextColor={selectedCategory.detailsTextColor}
          onBackPress={handleBackPress}
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
