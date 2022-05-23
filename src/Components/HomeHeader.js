import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import { moderateScale } from "../styles/responsiveSize";

const HomeHeader = () => {
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

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    minHeight: moderateScale(40),
  },
});
