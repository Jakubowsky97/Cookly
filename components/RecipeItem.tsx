import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface RecipeItemProps {
  title: string;
  imageUrl: string;
  onViewRecipes: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ title, imageUrl, onViewRecipes }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onViewRecipes}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200, // Fixed width to make each item align in a horizontal row
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RecipeItem;
