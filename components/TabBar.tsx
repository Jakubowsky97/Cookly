import { StyleSheet, View } from "react-native";
import React from "react";
import {
  useLinkBuilder,
  TabNavigationState,
  ParamListBase,
} from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const icons: Record<string, (props: { color: string }) => React.JSX.Element> = {
  index: (props) => <Ionicons size={32} name="home-outline" color={props.color} />,
  recipes: (props) => <Ionicons size={32} name="book-outline" color={props.color} />,
  grocery: (props) => <Ionicons size={32} name="bag-outline" color={props.color} />,
  profile: (props) => <Ionicons size={32} name="person-outline" color={props.color} />,
};


interface CustomTabBarProps extends Omit<BottomTabBarProps, "state"> {
  state: TabNavigationState<ParamListBase>;
}


export default function TabBar({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) {
  const { buildHref } = useLinkBuilder();
  const primaryColor = "#0090ff";
  const secondaryColor = "#737373";

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const iconRenderer = icons[route.name as keyof typeof icons];
        if (!iconRenderer) {
          console.warn(`No icon found for route: ${route.name}`);
          return null; 
        }
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : typeof options.tabBarLabel === "function"
            ? options.tabBarLabel({
                focused: isFocused,
                color: isFocused ? primaryColor : secondaryColor,
                position: "below-icon",
                children: route.name,
              })
            : typeof options.title === "string"
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            style={styles.tabbarItem}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {iconRenderer({
              color: isFocused ? primaryColor : secondaryColor,
            })}
            
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
