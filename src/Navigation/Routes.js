import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";

export default function Routes() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin, "ISLOGIN?>>");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
