import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Decks from "../screens/Decks";
import AddDeck from "../screens/AddDeck";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Decks"
        component={Decks}
        options={{
          title: "Decks",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cards"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddDeck}
        options={{
          title: "Add deck",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add-to-photos"
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Decks":
      return "Decks";
    case "Add":
      return "Add deck";
  }
}
