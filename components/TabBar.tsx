import { StyleSheet ,View, Text } from "react-native";
import React from "react";
import { useLinkBuilder} from '@react-navigation/native';
import { PlatformPressable } from "@react-navigation/elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabBar({ state, descriptors, navigation }) {
    const { buildHref } = useLinkBuilder();
    const primaryColor = "#181411";
    const secondaryColor = "#897361";

    const icons = {
        index: (props) => <FontAwesome size={28} name="home" color={secondaryColor} {...props} />,
        recipes: (props) => <FontAwesome size={28} name="book" color={secondaryColor} {...props} />,
        grocery: (props) => <FontAwesome size={28} name="shopping-bag" color={secondaryColor} {...props} />,
        profile: (props) => <FontAwesome size={28} name="user" color={secondaryColor} {...props} />,
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
            <Text style={{ color: isFocused ? primaryColor : secondaryColor }}>
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
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})