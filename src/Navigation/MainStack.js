import * as React from "react";
import { Camera, Chat, Map, Stories } from "../Screens/Index";
import navigationStrings from "../Constants/navigationStrings";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.CAMERA}
        component={Camera}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CHAT}
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.MAP}
        component={Map}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.STORIES}
        component={Stories}
        options={{ headerShown: false }}
      />
    </>
  );
}
