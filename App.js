import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import homescreen from "../news/src/page/homescreen";
import detail from "./src/page/detail";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Ana Sayfa"
            component={homescreen}
            options={{
              title: "Ana Sayfa",
              headerStyle: {
                backgroundColor: "darkgrey",
                
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
              },
              
            }}
          />
          <Stack.Screen name="Detay" component={detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
