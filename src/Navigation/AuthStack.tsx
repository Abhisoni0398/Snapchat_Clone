import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import navigationStrings from "../constants/navigationStrings";
import * as Screens from '../Screens'; //import all screens 

const Stack = createNativeStackNavigator();

const AuthStack = (isFirstTime: boolean) => {

    return (
        <>
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Screens.Login}
                options={{ headerShown: false }}
            /> 
        </>
    );
}

export default AuthStack