import TabBar from '@/components/TabBar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import React from 'react';

type MyParamList = {
    index: undefined;
    recipes: undefined;
    grocery: undefined;
    profile: undefined;
  };

  export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          headerTitleAlign: "center",
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="recipes" options={{ title: "Find a Recipe" }} />
        <Tabs.Screen name="grocery" options={{ title: "Shopping List" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    );
  }
  