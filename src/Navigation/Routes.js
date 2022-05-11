import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import AuthStack from "./AuthStack";
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{AuthStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
}
