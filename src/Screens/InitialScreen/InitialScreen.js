import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import imagePath from "../../Constants/imagePath";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithText from "../../Components/ButtonWithText";
import colors from "../../styles/colors";

const InitialScreen = ({ navigation }) => {
  const onPress = (route) => {
    navigation.navigate(route);
  };
  return (
    <ImageBackground
      source={imagePath.bgImage}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <SafeAreaView style={styles.container}>
        <ButtonWithText
          text="Log In"
          textStyle={{ color: colors.black }}
          btnStyle={{ backgroundColor: colors.white }}
          navigation={navigation}
          onPress={() => onPress("Login")}
        />
        <ButtonWithText
          text="Sign Up"
          onPress={() => onPress("Signup")}
          textStyle={{ color: colors.white }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
});
