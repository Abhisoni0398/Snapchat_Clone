import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => navigation.goBack()}
        type="font-awesome"
        color={colors.blue}
        size={24}
        name="chevron-left"
      />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingBottom: 24,
  },
});
