import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import colors from "../styles/colors";
import Loader from "./Loader";
import { moderateScale } from "../styles/responsiveSize";
const WrapperContainer = ({
  barStyle = "dark-content",
  statusBarColor = colors.white,
  children,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default WrapperContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: moderateScale(14),
  },
});
