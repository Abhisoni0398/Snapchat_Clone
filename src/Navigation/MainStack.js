import * as React from "react";
import navigationStrings from "../Constants/navigationStrings";
import TabRoutes from "./TabRoutes";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TABROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}
