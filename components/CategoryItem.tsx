import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

interface CategoryItemProps {
  name: string;
  image: any;
  onViewRecipes: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, image, onViewRecipes }) => {
  return (
    <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Button title="View Recipes" onPress={onViewRecipes} />
        </View>
        <View>
            <Image source={ image } style={styles.image} />
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    display: 'flex',
    gap: 20
  }
});

export default CategoryItem;