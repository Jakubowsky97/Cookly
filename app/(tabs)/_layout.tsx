import TabBar from '@/components/TabBar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{ tabBarActiveTintColor: 'black'}}
            tabBar={props => <TabBar {...props}/>}
            >
            <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>
            }}
            />
            <Tabs.Screen
            name="recipes"
            options={{
                title: "Recipes",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color}/>
            }}
            />
            <Tabs.Screen
            name="grocery"
            options={{
                title: "Grocery",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-bag" color={color}/>
            }}
            />
            <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color}/>
            }}
            />
        </Tabs>
    );
}