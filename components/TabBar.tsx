import { StyleSheet ,View, Text } from "react-native";
import React from "react";
import { useLinkBuilder} from '@react-navigation/native';
import { PlatformPressable } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";

export default function TabBar({ state, descriptors, navigation }) {
    const { buildHref } = useLinkBuilder();
    const primaryColor = "#181411";
    const secondaryColor = "#737373";

    const icons = {
        index: (props) => <Ionicons size={26} name="home-outline" color={secondaryColor} {...props} />,
        recipes: (props) => <Ionicons size={26} name="book-outline" color={secondaryColor} {...props} />,
        grocery: (props) => <Ionicons size={26} name="bag-outline" color={secondaryColor} {...props} />,
        profile: (props) => <Ionicons size={26} name="person-outline" color={secondaryColor} {...props} />,
    }
    return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
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
            {
                icons[route.name]({
                    color: isFocused ? primaryColor : secondaryColor
                })
            }
            <Text style={{ color: isFocused ? primaryColor : secondaryColor, fontSize: 11 }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})