import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { getRandomRecipes, Recipe } from '../services/api';
import RecipeItem from './RecipeItem';

const RandomRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecipes = async () => {
    try {
      const data = await getRandomRecipes(15); // Fetch 15 random recipes for horizontal scroll
      setRecipes(data.recipes);
    } catch (error) {
      console.error('Failed to load recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleViewRecipes = (recipeTitle: string) => {
    console.log(`Viewing recipes for: ${recipeTitle}`);
    // Navigate or show details for the recipe
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={recipes}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RecipeItem
              title={item.title}
              imageUrl={item.image}
              onViewRecipes={() => handleViewRecipes(item.title)}
            />
          )}
          showsHorizontalScrollIndicator={false} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 15,
    paddingBottom: 10
  },
});

export default RandomRecipes;
