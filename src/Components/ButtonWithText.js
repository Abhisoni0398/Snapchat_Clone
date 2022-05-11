import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
const ButtonWithText = ({
  text,
  onPress,
  btnStyle,
  textStyle,
  navigation,
  isDisable,
}) => {
  console.log("Text", text);

  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.buttonStyle, ...btnStyle }}
        onPress={onPress}
        disabled={isDisable}
      >
        <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithText;
const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.blue,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 15,
    fontFamily: fontFamily.bold,
  },
});
