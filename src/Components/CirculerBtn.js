import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import { moderateScale } from "../styles/responsiveSize";
import fontFamily from "../styles/fontFamily";

const CirculerBtn = ({ text, onPress }) => {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 60, height: 60, borderRadius: 50 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-XTge8MKeoxh4boXjnOC-qunLx0eG4D5ig&usqp=CAU",
        }}
      />

      <View style={styles.bottomView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CirculerBtn;
const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: colors.white,
    alignSelf: "flex-start",
    borderRadius: moderateScale(24),
    paddingLeft: 5,
  },
  textStyle: {
    ...commonStyles.fontSize12,
    alignSelf: "center",
    fontFamily: fontFamily.bold,
  },
});
