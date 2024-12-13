import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';
import { popularCategories } from '../data/Categories';

const CategoriesScreen: React.FC = () => {
  const handleViewRecipes = (queryType: string, name: string) => {
    console.log(`Fetching recipes for ${name} (${queryType})`);
    // Use navigation or API fetch here based on queryType and name
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {popularCategories.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          image={category.image}
          onViewRecipes={() => handleViewRecipes(category.queryType, category.name)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default CategoriesScreen;