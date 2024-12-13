import CategoriesScreen from "@/components/CategoriesView";
import RandomRecipes from "@/components/RandomRecipes";
import { ScrollView, StatusBar, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";

const [fontLoaded, setFontLoaded] = useState(false);

useEffect(() => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    });
    setFontLoaded(true);
  };
  
  loadFonts();
}, []);

const Home = () => (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
           <Text style={styles.ForYouText}>
              Recipes for you
          </Text>
        </View>
        <RandomRecipes />
        <View>
           <Text style={styles.popularText}>
              Popular categories
          </Text>
          <CategoriesScreen/>
        </View>
      </ScrollView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 35
  },
  ForYouText: {
    fontFamily: 'Lato-Regular',
    fontSize: 24,
    marginTop: 10,
    marginStart: 20,
    fontWeight: 'bold'
  },
  popularText: {
    fontSize: 24, 
    marginStart: 20,
    fontWeight: 'bold'
  }
});

export default Home;