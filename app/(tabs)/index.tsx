import RandomRecipes from "@/components/RandomRecipes";
import { ScrollView, StatusBar, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

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
        </View>
      </ScrollView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'SpaceMono-Regular'
  },
  ForYouText: {
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